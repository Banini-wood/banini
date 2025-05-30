// --- קוד להגבלת קלט לספרות בלבד בשדה הטלפון ---
const phoneInput = document.getElementById('phone');

if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
        // החלף כל תו שאינו ספרה במחרוזת ריקה
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
}
// --- סוף קוד להגבלת קלט ---