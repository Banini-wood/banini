let currentSlideIndex = 0; // משתנה לשמירת האינדקס של השקופית הנוכחית
const slides = document.querySelectorAll("#portfolio .gallery-container .gallery-slide"); // אוסף את כל אלמנטי השקופיות

// פונקציה להצגת שקופית ספציפית לפי אינדקס
function showSlide(index) {
    // בדיקה אם האינדקס חורג מגבולות המערך (מאפשר גלילה מעגלית)
    if (index >= slides.length) {
        currentSlideIndex = 0; // חזרה לשקופית הראשונה
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1; // מעבר לשקופית האחרונה
    } else {
        currentSlideIndex = index;
    }

    // הסתרת כל השקופיות
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // הצגת השקופית הנוכחית בלבד
    if (slides[currentSlideIndex]) { // בדיקה שהשקופית קיימת
         slides[currentSlideIndex].style.display = "block";

        // --- תוספת ARIA להכרזת השקופית הנוכחית ---
        const announcer = document.getElementById('gallery-announcer');
        if (announcer) { // ודא שאלמנט ההכרזה קיים
            const currentSlideNumber = currentSlideIndex + 1; // מספר השקופית (מתחיל מ-1 עבור התצוגה למשתמש)
            const totalSlides = slides.length; // המספר הכולל של שקופיות
            
            // ננסה לקבל את טקסט ה-alt של התמונה בשקופית הנוכחית
            const imageElement = slides[currentSlideIndex].querySelector('img');
            // אם יש אלמנט תמונה ויש לו טקסט alt, נשתמש בו. אחרת, נשתמש בטקסט חלופי.
            const imageAltText = (imageElement && imageElement.alt) ? imageElement.alt : 'תיאור תמונה אינו זמין'; 
            
            // עדכון הטקסט באלמנט ההכרזה
            announcer.textContent = `שקופית ${currentSlideNumber} מתוך ${totalSlides}: ${imageAltText}`;
        }
        // --- סוף תוספת ARIA ---
    }
}

// פונקציה להחלפת שקופית (קדימה או אחורה)
// n יכול להיות 1 (לשקופית הבאה) או -1 (לשקופית הקודמת)
function changeSlide(n) {
    showSlide(currentSlideIndex + n);
}

// אתחול הגלריה: הצגת השקופית הראשונה כשהדף נטען
// ודא שיש שקופיות לפני שמנסים להציג אותן
if (slides.length > 0) {
    showSlide(currentSlideIndex); // קריאה זו תפעיל את ההכרזה הראשונית
}

// --- קוד להגבלת קלט לספרות בלבד בשדה הטלפון ---
const phoneInput = document.getElementById('phone');

if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
        // החלף כל תו שאינו ספרה במחרוזת ריקה
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
}
// --- סוף קוד להגבלת קלט ---