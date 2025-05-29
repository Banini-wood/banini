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
    showSlide(currentSlideIndex);
}

// הפונקציות changeSlide נקראות ישירות מה-HTML באמצעות onclick.
// אין צורך לרשום אותן לחלון הגלובלי באופן מיוחד במקרה זה.