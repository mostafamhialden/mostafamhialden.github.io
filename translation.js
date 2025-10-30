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
    'project5Title': 'تطبيق إدارة جامعية',
    'project5Desc': 'بناء تطبيق هاتف لإدارة الفصول ومعلومات الطلاب باستخدام Flutter، مع ربط الواجهات بقاعدة البيانات.',
    'project6Title': 'مشاريع تعلم الآلة',
    'project6Desc': 'مجموعة من المشاريع التحليلية باستخدام Jupyter Notebooks، تغطي التنبؤ، التصنيف، وتحليل البيانات.',
    'contactTitle': 'تواصل معي',
    'contactEmail': 'البريد الإلكتروني',
    'contactPhone': 'الهاتف',
    'contactWhatsApp': 'WhatsApp',
    'contactLocation': 'الموقع',
    'contactSubtitle': '... أو تواصل معي مباشرة عبر', // <-- مفتاح جديد
    'footerRights': '© 2025 مصطفى محي الدين. جميع الحقوق محفوظة.',
    
    // --- (صفحات المشاريع) ---
    'backToProjects': '→ العودة لجميع المشاريع',
    
    // --- (إصلاح ملف بلكو) ---
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
    // ... (أضف باقي مفاتيح صفحات المشاريع هنا) ...
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
    'project5Title': 'University Management App',
    'project5Desc': 'Building a mobile app to manage classes and student info using Flutter, linking UI to a database.',
    'project6Title': 'Machine Learning Projects',
    'project6Desc': 'A collection of analytical projects using Jupyter Notebooks, covering prediction, classification, and data analysis.',
    'contactTitle': 'Contact Me',
    'contactEmail': 'Email',
    'contactPhone': 'Phone',
    'contactWhatsApp': 'WhatsApp',
    'contactLocation': 'Location',
    'contactSubtitle': '... or reach out directly on', // <-- مفتاح جديد
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
    // ... (أضف باقي مفاتيح صفحات المشاريع هنا) ...
  }
};

// --- محرك الترجمة (يبقى كما هو، لا تغيير) ---
document.addEventListener('DOMContentLoaded', () => {
    
    const langToggleButton = document.getElementById('lang-toggle-btn');

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

        if (langToggleButton) {
            langToggleButton.textContent = (lang === 'ar') ? 'English' : 'العربية';
        }

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            } else if (translations['en'] && translations['en'][key]) {
                // إذا لم يوجد المفتاح في اللغة المختارة، استخدم الإنجليزية كاحتياط
                element.textContent = translations['en'][key];
            }
        });
        localStorage.setItem('language', lang);
    }

    if (langToggleButton) {
        langToggleButton.addEventListener('click', () => {
            const currentLang = localStorage.getItem('language') || 'en';
            const newLang = (currentLang === 'en') ? 'ar' : 'en';
            setLanguage(newLang);
        });
    }

    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
});