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
        this.isRTL = document.documentElement.getAttribute('dir') === 'rtl';
        
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
            // تحديث منطق الأسهم ليعكس LTR/RTL
            if (e.key === 'ArrowLeft') this.isRTL ? this.nextSlide() : this.prevSlide();
            if (e.key === 'ArrowRight') this.isRTL ? this.prevSlide() : this.nextSlide();
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
          this.stopAutoPlay();
          activeVideo.play();
          activeVideo.onended = () => {
              this.startAutoPlay();
          };
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

document.addEventListener('DOMContentLoaded', () => {
    // تحديث ليتوافق مع التغييرات في i18n
    // يجب أن يعمل محرك الترجمة أولاً لتحديث dir
    // لذلك، سيتم استدعاء هذا من داخل translation.js
    // أو نتأكد من أن اتجاه الصفحة صحيح عند التحميل
    
    // بسيط: فقط تأكد من أن اتجاه الصفحة يتم تحديده قبل هذا السكريبت
    // الكود في translation.js سيعمل أولاً إذا تم تحميله أولاً
    // ولكننا نعتمد على السمة الموجودة في <html>
    
    // تحديث: كود project-script.js الآن يقرأ اتجاه الصفحة
    // عند الإنشاء، وكود translation.js يغيره.
    // يجب أن نضمن أن يتم تحديث اتجاه الصفحة قبل إنشاء الكائن
    
    // الحل: نستدعي هذا بعد انتهاء تحميل كل شيء
    // الكود في translation.js يعمل على DOMContentLoaded
    // لذلك هذا الكود سيعمل أيضاً ويقرأ الاتجاه المحدث
    new EnhancedImageGallery();
});