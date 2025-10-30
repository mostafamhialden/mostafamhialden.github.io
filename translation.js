// ملف: translation.js

const translations = {
  // ------------------
  // اللغة العربية
  // ------------------
  'ar': {
    // --- (index.html) ---
    'navHome': 'الرئيسية',
    'navAbout': 'نبذة عني',
    'navSkills': 'المهارات',
    'navProjects': 'المشاريع',
    'navContact': 'تواصل معي',
    'homeTitle': 'أنا المهندس مصطفى محي الدين',
    'homeSubtitle': 'مبرمج ذكاء اصطناعي بخلفية قوية في تطوير البرمجيات وتعلم الآلة، وشغوف بحل مشكلات العالم الحقيقي عبر حلول ذكاء اصطناعي مبتكرة وقابلة للتطوير.',
    'btnContact': 'تواصل معي',
    'aboutTitle': 'نبذة عني',
    'aboutP1': 'أنا مبرمج ذكاء اصطناعي حاصل على دبلوم في الذكاء الاصطناعي والروبوتات من DTC. حالياً، أتابع دراسة هندسة تقانة المعلومات في SVU.',
    'aboutP2': 'لدي خبرة كقائد فريق لمشاريع ذكاء اصطناعي عن بُعد، ومدرب ذكاء اصطناعي للطلاب، ومدرب روبوتات لمبادرات الشباب، إلى جانب عملي الحر في الذكاء الاصطناعي وتطوير التطبيقات.',
    'skillsTitle': 'المهارات',
    'skill1Title': 'الذكاء الاصطناعي وتعلم الآلة',
    'skill2Title': 'الرؤية الحاسوبية',
    'skill3Title': 'الروبوتات وإنترنت الأشياء',
    'skill4Title': 'معالجة اللغات والبحث',
    'skill5Title': 'تطوير التطبيقات',
    'skill6Title': 'البرمجة',
    'projectsTitle': 'المشاريع',
    'projectLink': 'عرض المشروع →',
    'project1Title': 'روبوت Plucko لقطف العنب',
    'project1Desc': 'تطوير روبوت متكامل لقطف العنب آلياً باستخدام الرؤية الحاسوبية، الذكاء الاصطناعي، وأنظمة التحكم المتقدمة.',
    'project2Title': 'عميل ذكاء اصطناعي للتحكم بالويب',
    'project2Desc': 'قيادة فريق لتطوير عميل ذكاء اصطناعي (AI Agent) قادر على التحكم بصفحات الويب وأتمتتها عبر دمج نماذج متعددة.',
    'project3Title': 'تطوير روبوتات الدردشة (Bots)',
    'project3Desc': 'بناء ودمج روبوتات محادثة ذكية باستخدام نماذج لغوية (LLMs) ومنصات مثل Rasa لأتمتة المهام والتفاعل.',
    'project4Title': 'تطوير ألعاب بـ Unity',
    'project4Desc': 'تصميم وتطوير مجموعة من الألعاب ثلاثية الأبعاد باستخدام محرك Unity ولغة C#، مع التركيز على الفيزياء واللعب.',
    
    // --- !!!!  هذا هو التعديل المطلوب   !!!! ---
    'project5Title': 'تطبيقات فلتر وصفحات وب', 
    'project5Desc': 'بناء تطبيقات هاتف متعددة المنصات باستخدام Flutter وصفحات ويب حديثة ومتجاوبة.',
    // --- !!!!  نهاية التعديل   !!!! ---

    'project6Title': 'مشاريع تعلم الآلة',
    'project6Desc': 'مجموعة من المشاريع التحليلية باستخدام Jupyter Notebooks، تغطي التنبؤ، التصنيف، وتحليل البيانات.',
    'contactTitle': 'تواصل معي',
    'contactEmail': 'البريد الإلكتروني',
    'contactPhone': 'الهاتف',
    'contactWhatsApp': 'WhatsApp',
    'contactLocation': 'الموقع',
    'contactSubtitle': '... أو تواصل معي مباشرة عبر',
    'footerRights': '© 2025 مصطفى محي الدين. جميع الحقوق محفوظة.',
    
    // --- (صفحات المشاريع) ---
    'backToProjects': '→ العودة لجميع المشاريع',
    
    // --- (مفاتيح بلكو) ---
    'pluckoTitle': 'روبوت Plucko لقطف العنب بالذكاء الاصطناعي',
    'pluckoSec1Title': 'الوصف: المشكلة والحل',
    'pluckoSec1Desc': 'يُعد قطف العنب عملية تتطلب عمالة مكثفة ودقة عالية. تم تصميم روبوت "Plucko" لأتمتة هذه العملية بالكامل باستخدام الذكاء الاصطناعي والروبوتات. ساهمت في جميع جوانب المشروع، بدءاً من التصميم الميكانيكي وحتى تطوير "عيون" الروبوت، وهو نظام رؤية حاسوبية متقدم لاكتشاف العنب.',
    'pluckoSec2Title': 'الميزة الرئيسية: نظام الرؤية بالذكاء الاصطناعي',
    'pluckoSec2Desc': 'لتشغيل الروبوت، كان من الضروري تطوير نظام رؤية دقيق. بناءً على العمل الموثق في مشروع اكتشاف العنب، تضمنت العملية ما يلي:',
    'pluckoDataCollection': 'جمع البيانات:',
    'pluckoAnnotation': 'توصيف البيانات (Annotation):',
    'pluckoAugmentation': 'زيادة البيانات (Data Augmentation):',
    'pluckoSec3Title': 'الميزات والتقنيات',
    'pluckoFeature1Title': 'التصميم الميكانيكي',
    'pluckoFeature1Desc': 'تصميم هيكل الروبوت وذراعه، وتطبيق مبادئ الحركة الأمامية والعكسية (FK/IK).',
    'pluckoFeature2Title': 'الاكتشاف بالتعلم العميق',
    'pluckoFeature2Desc': 'تجربة وتدريب نماذج تعلم عميق متعددة للوصول إلى دقة عالية في اكتشاف العنب في ظروف متغيرة.',
    'pluckoFeature3Title': 'أنظمة التحكم',
    'pluckoFeature3Desc': 'تطوير أنظمة التحكم الذكية التي تربط "الرؤية" (المدخلات) بـ "حركة" ذراع الروبوت (المخرجات).',
    'pluckoFeature4Title': 'التكامل الشامل',
    'pluckoFeature4Desc': 'دمج نظام الرؤية (AI) مع منصة الروبوتات المادية (Robotics) في نظام واحد متكامل وفعال.',
    'pluckoSec4Title': 'التقنيات المستخدمة',

    // --- (مفاتيح تعلم الآلة) ---
    'mlTitle': 'تطبيقات تعلم الآلة وعلوم البيانات',
    'mlSec1Title': 'وصف المشروع',
    'mlDesc': 'مجموعة من أعمالي التطبيقية في مجال علوم البيانات، المنفذة بشكل أساسي عبر Jupyter Notebooks. تغطي هذه المشاريع الدورة الكاملة لعلوم البيانات: من الحصول على البيانات الأولية ومعالجتها، إلى تحليل البيانات الاستكشافي (EDA)، وهندسة الميزات، وتدريب النماذج، وتقييم الأداء.',
    'mlSec2Title': 'المهارات والمنهجيات الرئيسية',
    'mlFeat1Title': 'تحليل البيانات الاستكشافي (EDA)',
    'mlFeat1Desc': 'استخدام Pandas و Numpy لتنظيف وتحويل وتحليل مجموعات البيانات. واستخدام أدوات مثل Matplotlib و Seaborn لكشف الأنماط المخفية.',
    'mlFeat2Title': 'هندسة الميزات والمعالجة المسبقة',
    'mlFeat2Desc': 'خبرة في اختيار وتحويل وإنشاء ميزات جديدة من البيانات الأولية لتحسين دقة وأداء النموذج.',
    'mlFeat3Title': 'تدريب وتقييم النماذج',
    'mlFeat3Desc': 'تطبيق نماذج Scikit-Learn متنوعة (مثل الانحدار، التصنيف، والتجميع) وتقييم أدائها باستخدام المقاييس المناسبة.',

    // --- (مفاتيح تطبيقات فلتر) ---
    'univAppTitle': 'تطبيقات فلتر وصفحات الويب',
    'univAppDescTitle': 'الوصف',
    'univAppDesc': 'يعرض هذا القسم مهاراتي في بناء تطبيقات حديثة ومتجاوبة لمنصات الموبايل والويب. باستخدام Flutter، أقوم بإنشاء تطبيقات متعددة المنصات تعمل بسلاسة على iOS و Android من قاعدة كود واحدة. وفي نفس الوقت، أقوم بتطوير صفحات ويب ولوحات تحكم ثابتة وديناميكية باستخدام تقنيات الويب الأساسية.',
    'univAppFeatTitle': 'الميزات الرئيسية',
    'univAppFeat1Title': 'متعدد المنصات (Flutter)',
    'univAppFeat1Desc': 'تطوير تطبيقات موبايل عالية الأداء لنظامي iOS و Android باستخدام Flutter و Dart، مما يضمن إحساساً أصلياً ودورات تطوير سريعة.',
    'univAppFeat2Title': 'تصميم ويب متجاوب',
    'univAppFeat2Desc': 'بناء صفحات ويب وملفات شخصية نظيفة وحديثة ومتجاوبة (مثل هذا الموقع) باستخدام HTML, CSS, و JavaScript.',
    'univAppFeat3Title': 'تكامل قواعد البيانات',
    'univAppFeat3Desc': 'ربط واجهات الموبايل والويب الأمامية بقواعد بيانات (مثل SQL أو Firebase) لإدارة البيانات في الوقت الفعلي وبناء تطبيقات متكاملة.',
    'univAppTechTitle': 'التقنيات المستخدمة',
  },
  
  // ------------------
  // اللغة الإنجليزية
  // ------------------
  'en': {
    // --- (index.html) ---
    'navHome': 'Home',
    'navAbout': 'About Me',
    'navSkills': 'Skills',
    'navProjects': 'Projects',
    'navContact': 'Contact',
    'homeTitle': 'I am Mostafa Mhialden, AI Engineer',
    'homeSubtitle': 'AI programmer with a strong background in software development and machine learning, passionate about solving real-world problems via innovative and scalable AI solutions.',
    'btnContact': 'Contact Me',
    'aboutTitle': 'About Me',
    'aboutP1': 'I am an AI programmer holding a diploma in Artificial Intelligence and Robotics from DTC. Currently, I am pursuing a degree in Information Technology Engineering at SVU.',
    'aboutP2': 'I have experience as a team leader for remote AI projects, an AI trainer for students, and a robotics coach for youth initiatives, alongside my freelance work in AI and application development.',
    'skillsTitle': 'Skills',
    'skill1Title': 'AI & Machine Learning',
    'skill2Title': 'Computer Vision',
    'skill3Title': 'Robotics & IoT',
    'skill4Title': 'NLP & Search',
    'skill5Title': 'App Development',
    'skill6Title': 'Programming',
    'projectsTitle': 'Projects',
    'projectLink': 'View Project →',
    'project1Title': 'Plucko Grape-Picking Robot',
    'project1Desc': 'Developing an integrated robot for automated grape harvesting using computer vision, AI, and advanced control systems.',
    'project2Title': 'AI Agent for Web Control',
    'project2Desc': 'Leading a team to develop an AI Agent capable of controlling and automating web pages by integrating multiple models.',
    'project3Title': 'Chatbot Development (Bots)',
    'project3Desc': 'Building and integrating smart chatbots using LLMs and platforms like Rasa for task automation and interaction.',
    'project4Title': 'Unity Game Development',
    'project4Desc': 'Designing and developing a range of 3D games using the Unity engine and C#, focusing on physics and gameplay.',

    // --- !!!!  هذا هو التعديل المطلوب   !!!! ---
    'project5Title': 'Flutter Apps & Web Pages', 
    'project5Desc': 'Building cross-platform mobile apps with Flutter and modern, responsive web pages and dashboards.',
    // --- !!!!  نهاية التعديل   !!!! ---

    'project6Title': 'Machine Learning Projects',
    'project6Desc': 'A collection of analytical projects using Jupyter Notebooks, covering prediction, classification, and data analysis.',
    'contactTitle': 'Contact Me',
    'contactEmail': 'Email',
    'contactPhone': 'Phone',
    'contactWhatsApp': 'WhatsApp',
    'contactLocation': 'Location',
    'contactSubtitle': '... or reach out directly on',
    'footerRights': '© 2025 Mostafa Mhialden. All rights reserved.',

    // --- (Project Pages) ---
    'backToProjects': '→ Back to All Projects',

    // --- (Plucko Fix) ---
    'pluckoTitle': 'Plucko AI Grape-Picking Robot',
    'pluckoSec1Title': 'Description: The Problem & Solution',
    'pluckoSec1Desc': 'Grape harvesting is a labor-intensive and delicate process. "Plucko" is designed to fully automate this task using AI and robotics. I contributed to all aspects of the project, from mechanical design to developing the robot\'s "eyes"—an advanced computer vision system for grape detection.',
    'pluckoSec2Title': 'Key Feature: The AI Vision System',
    'pluckoSec2Desc': 'To power the robot, a precise vision system was essential. Based on work documented in the Grape Detection Project, the process included:',
    'pluckoDataCollection': 'Data Collection:',
    'pluckoAnnotation': 'Data Annotation:',
    'pluckoAugmentation': 'Data Augmentation:',
    'pluckoSec3Title': 'Features & Technologies',
    'pluckoFeature1Title': 'Mechanical Design',
    'pluckoFeature1Desc': 'Designing the robot\'s chassis and arm, applying Forward/Inverse Kinematics (FK/IK).',
    'pluckoFeature2Title': 'Deep Learning Detection',
    'pluckoFeature2Desc': 'Training and experimenting with multiple deep learning models to achieve high-accuracy detection in varied conditions.',
    'pluckoFeature3Title': 'Control Systems',
    'pluckoFeature3Desc': 'Developing intelligent control systems linking "vision" (input) to the robotic arm\'s "action" (output).',
    'pluckoFeature4Title': 'Full Integration',
    'pluckoFeature4Desc': 'Merging the AI vision system with the physical robotics platform into one seamless, functional system.',
    'pluckoSec4Title': 'Technologies Used',

    // --- (ML Notebooks) ---
    'mlTitle': 'Applied Machine Learning & Data Science',
    'mlSec1Title': 'Project Description',
    'mlDesc': 'This collection represents my practical work in data science, primarily executed within Jupyter Notebooks. These projects cover the full data science lifecycle: from acquiring and preprocessing raw data to exploratory data analysis (EDA), feature engineering, model training, and performance evaluation.',
    'mlSec2Title': 'Key Skills & Methodologies',
    'mlFeat1Title': 'Exploratory Data Analysis (EDA)',
    'mlFeat1Desc': 'Utilizing Pandas and Numpy to clean, transform, and analyze datasets. Using visualization tools like Matplotlib & Seaborn to uncover hidden patterns.',
    'mlFeat2Title': 'Feature Engineering & Preprocessing',
    'mlFeat2Desc': 'Skillfully selecting, transforming, and creating new features from raw data to improve model accuracy and performance.',
    'mlFeat3Title': 'Model Training & Evaluation',
    'mlFeat3Desc': 'Applying various Scikit-Learn models (e.g., Regression, Classification, Clustering) and evaluating their performance using appropriate metrics.',

    // --- (Flutter App) ---
    'univAppTitle': 'Flutter Apps & Web Pages',
    'univAppDescTitle': 'Description',
    'univAppDesc': 'This category showcases my skills in building modern, responsive applications for both mobile and web platforms. Using Flutter, I create cross-platform mobile apps that run smoothly on iOS and Android from a single codebase. Simultaneously, I develop static and dynamic web pages and dashboards using core web technologies.',
    'univAppFeatTitle': 'Key Features',
    'univAppFeat1Title': 'Cross-Platform (Flutter)',
    'univAppFeat1Desc': 'Developing high-performance mobile apps for iOS and Android using Flutter and Dart, ensuring a native feel and fast development cycles.',
    'univAppFeat2Title': 'Responsive Web Design',
    'univAppFeat2Desc': 'Building clean, modern, and responsive web pages and portfolios (like this one) using HTML, CSS, and JavaScript.',
    'univAppFeat3Title': 'Database Integration',
    'univAppFeat3Desc': 'Linking both mobile and web front-ends to databases (like SQL or Firebase) to manage data in real-time and build full-stack applications.',
    'univAppTechTitle': 'Technologies Used',
  }
};

// --- محرك الترجمة (لا تعدل هذا الجزء) ---
document.addEventListener('DOMContentLoaded', () => {
    
    const langToggleButton = document.getElementById('lang-toggle-btn');

    function setLanguage(lang) {
        // 1. Set page language and direction
        document.documentElement.lang = lang;
        document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

        // 2. Update toggle button text
        if (langToggleButton) {
            langToggleButton.textContent = (lang === 'ar') ? 'English' : 'العربية';
        }

        // 3. Translate all elements with data-key
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            } else if (translations['en'] && translations['en'][key]) {
                // Fallback to English if translation is missing
                element.textContent = translations['en'][key];
            }
        });
        
        // 4. Save user's preference
        localStorage.setItem('language', lang);
    }

    // 5. Add click event to the button
    if (langToggleButton) {
        langToggleButton.addEventListener('click', () => {
            const currentLang = localStorage.getItem('language') || 'en';
            const newLang = (currentLang === 'en') ? 'ar' : 'en';
            setLanguage(newLang);
        });
    }

    // 6. Load saved language or default to 'en'
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
});