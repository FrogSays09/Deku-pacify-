// --- Translations Data ---
const i18n = {
    en: {
        "nav-home": "Home", "nav-about": "About", "nav-services": "Services", "nav-skills": "Team", "nav-contact": "Contact",
        "about-title": "Who is Deku?", "about-p1": "Deku is an awesome channel for all entertainment lovers! Fun videos, challenges, and vlogs for everyone!",
        "about-p2": "If you love entertainment and creative content, Deku has got it all in one place!",
        "s1-t": "Video Content", "s1-d": "Creative and entertaining videos for your channel.",
        "s2-t": "Background Music", "s2-d": "High-quality music for editing and clips.",
        "s3-t": "Video Editing", "s3-d": "Professional editing for your content.",
        "s4-t": "Entertainment", "s4-d": "Fun challenges, pranks, and engaging content.",
        "ph-name": "Your Name", "ph-email": "Your Email", "ph-msg": "Your Message", "btn-send": "Send Now",
        "welcome": "Welcome to Deku's World! 👋"
    },
    ar: {
        "nav-home": "الرئيسية", "nav-about": "من نحن", "nav-services": "خدماتنا", "nav-skills": "الفريق", "nav-contact": "تواصل معنا",
        "about-title": "من هو ديكو؟", "about-p1": "قناة ديكو جامدة لكل محبي الترفيه! فيديوهات مضحكة، تحديات، وفلوغز للجميع!",
        "about-p2": "لو بتحب الترفيه والمحتوى المبتكر، ديكو عنده كل شيء في مكان واحد!",
        "s1-t": "محتوى فيديو", "s1-d": "فيديوهات ممتعة ومبدعة للقناة.",
        "s2-t": "موسيقى", "s2-d": "موسيقى عالية الجودة للتحرير والفيديوهات.",
        "s3-t": "مونتاج", "s3-d": "مونتاج احترافي لمحتواك.",
        "s4-t": "ترفيه", "s4-d": "تحديات، مقالب، ومحتوى ممتع.",
        "ph-name": "اسمك", "ph-email": "بريدك", "ph-msg": "رسالتك", "btn-send": "إرسال الآن",
        "welcome": "أهلاً بك في عالم ديكو! 👋"
    }
};

let currentLang = 'en';

// --- Language Switcher ---
const langBtn = document.getElementById('lang-btn');
langBtn.onclick = () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    langBtn.innerText = currentLang === 'en' ? 'العربية' : 'English';
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    updateContent();
};

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.innerText = i18n[currentLang][el.getAttribute('data-i18n')];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        el.placeholder = i18n[currentLang][el.getAttribute('data-i18n-ph')];
    });
    resetTypewriter();
}

// --- Typewriter Effect ---
let txtIdx = 0;
function resetTypewriter() {
    document.getElementById('typewriter').innerHTML = "";
    txtIdx = 0;
    type();
}

function type() {
    const fullTxt = i18n[currentLang].welcome;
    if (txtIdx < fullTxt.length) {
        document.getElementById('typewriter').innerHTML += fullTxt.charAt(txtIdx);
        txtIdx++;
        setTimeout(type, 100);
    }
}

// --- Theme Toggle ---
document.getElementById('theme-btn').onclick = function() {
    document.body.classList.toggle('lightmode');
    this.innerHTML = document.body.classList.contains('lightmode') ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
};

// --- Scroll Reveal ---
window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(sec => {
        if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
            sec.classList.add('reveal');
        }
    });
});

// --- Matrix/Code Rain Background ---
const canvas = document.getElementById('code-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = "DEKU01GAMING";
const fontSize = 15;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill