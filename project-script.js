class EnhancedImageGallery {
    constructor() {
        this.gallery = document.querySelector('.image-gallery');
        if (!this.gallery) return;

        this.slides = this.gallery.querySelectorAll('.gallery-slide');
        this.dotsContainer = this.gallery.querySelector('.gallery-dots');
        this.prevBtn = this.gallery.querySelector('.gallery-prev');
        this.nextBtn = this.gallery.querySelector('.gallery-next');
        
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (this.totalSlides <= 1) {
          if(this.prevBtn) this.prevBtn.style.display = 'none';
          if(this.nextBtn) this.nextBtn.style.display = 'none';
          if(this.dotsContainer) this.dotsContainer.style.display = 'none';
          const counter = this.gallery.querySelector('.gallery-counter');
          if(counter) counter.style.display = 'none';
          return;
        };

        this.init();
    }

    /* الاتجاه يُقرأ عند كل استخدام وليس مرة واحدة عند الإنشاء.
       سابقاً كان يُخزَّن في this.isRTL داخل الباني، وبما أن هذا الملف يُحمَّل
       قبل translation.js فإن القيمة كانت تُقرأ قبل أن يضبط محرّك الترجمة
       السمة dir — أي false دائماً، فيتعطّل منطق RTL كلياً. وهي أيضاً لم تكن
       تُحدَّث عند تبديل اللغة أثناء التصفّح. */
    get isRTL() {
        return document.documentElement.dir === 'rtl';
    }


    init() {
        this.createCounter();
        this.createDots();
        this.addEventListeners();
        this.updateSlides(); // تم تغيير اسمها من goToSlide(0) لاسم أوضح
        this.startAutoPlay();
    }
    
    createCounter() {
        const counter = document.createElement('div');
        counter.className = 'gallery-counter';
        counter.innerHTML = `<span class="current">1</span> / <span class="total">${this.totalSlides}</span>`;
        this.gallery.querySelector('.gallery-container').appendChild(counter);
        this.counter = counter;
    }
    
    createDots() {
        if (!this.dotsContainer) return;
        this.dotsContainer.innerHTML = '';
        this.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'gallery-dot';
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });
        this.dots = Array.from(this.dotsContainer.children);
    }
    
    addEventListeners() {
        if(this.prevBtn) this.prevBtn.addEventListener('click', () => this.prevSlide());
        if(this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        this.gallery.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.gallery.addEventListener('mouseleave', () => this.startAutoPlay());

        document.addEventListener('keydown', (e) => {
            if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;

            // لا نخطف أسهم لوحة المفاتيح إن كان المستخدم يكتب في حقل،
            // ولا إن كان المعرض خارج الشاشة أصلاً.
            const tag = document.activeElement && document.activeElement.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

            const rect = this.gallery.getBoundingClientRect();
            const onScreen = rect.bottom > 0 && rect.top < window.innerHeight;
            if (!onScreen) return;

            // منطق الأسهم يعكس اتجاه القراءة الحالي
            if (e.key === 'ArrowLeft') this.isRTL ? this.nextSlide() : this.prevSlide();
            else this.isRTL ? this.prevSlide() : this.nextSlide();
        });
        
        this.addSwipeSupport();
    }

    addSwipeSupport() {
        let startX = 0;
        const galleryContainer = this.gallery.querySelector('.gallery-container');
        
        galleryContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            this.stopAutoPlay();
        }, { passive: true });
        
        galleryContainer.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) {
                 // تحديث منطق السحب ليعكس LTR/RTL
                if (diff > 0) this.isRTL ? this.prevSlide() : this.nextSlide();
                else this.isRTL ? this.nextSlide() : this.prevSlide();
            }
            this.startAutoPlay();
        });
    }
    
    // تم تغيير اسم الدالة من goToSlide(index) إلى updateSlides(index)
    // وجعل index اختيارياً
    updateSlides(index) {
        if (index !== undefined) {
             this.currentSlide = (index + this.totalSlides) % this.totalSlides;
        }
       
        const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;

        this.slides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev-slide', 'next-slide');
            if (i === this.currentSlide) slide.classList.add('active');
            if (i === prevIndex) slide.classList.add('prev-slide');
            if (i === nextIndex) slide.classList.add('next-slide');
        });
        
        if (this.dots) {
            this.dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === this.currentSlide);
            });
        }
        
        this.updateCounter();
        this.handleVideo();
    }

    goToSlide(index) {
        this.updateSlides(index);
    }
    
    handleVideo() {
      this.slides.forEach(slide => {
          const video = slide.querySelector('video');
          if (video) {
              video.pause();
          }
      });

      const activeSlide = this.slides[this.currentSlide];
      const activeVideo = activeSlide.querySelector('video');
      if (activeVideo) {
          // لا نشغّل الفيديو تلقائياً: الملفات بحجم 4–8 ميغابايت ولا يصحّ
          // تنزيلها على بيانات المستخدم دون طلبه. نكتفي بإيقاف التمرير
          // التلقائي حتى لا تنتقل الشريحة أثناء المشاهدة.
          this.stopAutoPlay();
          activeVideo.onplay = () => this.stopAutoPlay();
          activeVideo.onended = () => this.startAutoPlay();
      } else {
          this.startAutoPlay();
      }
    }

    nextSlide() {
        this.goToSlide(this.currentSlide + 1);
    }
    
    prevSlide() {
        this.goToSlide(this.currentSlide - 1);
    }
    
    updateCounter() {
        if (this.counter) {
            this.counter.querySelector('.current').textContent = this.currentSlide + 1;
        }
    }
    
    startAutoPlay() {
        this.stopAutoPlay();

        // احترام تفضيل تقليل الحركة: لا تشغيل تلقائي للشرائح
        if (this.prefersReducedMotion) return;

        const activeSlide = this.slides[this.currentSlide];
        const video = activeSlide.querySelector('video');

        if (!video || video.paused) {
             this.autoPlayInterval = setInterval(() => {
                this.nextSlide();
            }, 5000);
        }
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// لم يعد ترتيب تحميل هذا الملف بالنسبة إلى translation.js مهمّاً:
// المعرض يقرأ اتجاه الصفحة عند كل استخدام عبر الخاصية isRTL،
// فيبقى صحيحاً حتى لو بدّل المستخدم اللغة أثناء التصفّح.
document.addEventListener('DOMContentLoaded', () => {
    new EnhancedImageGallery();
});