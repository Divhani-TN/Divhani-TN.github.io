

const form = document.getElementById("contact-form");

// Validates a single field, shows/hides its error message
function validateField(inputId, errorId, checkFn) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  const valid = checkFn(input.value.trim());
  input.classList.toggle("error", !valid);
  error.classList.toggle("show", !valid);
  return valid;
}

// Clear error state as user types
["name", "email", "phone", "message"].forEach(id => {
  document.getElementById(id)
    .addEventListener("input", () => {
      document.getElementById(id).classList.remove("error");
      document.getElementById(`e-${id}`).classList.remove("show");
    });
});

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[\d\s\+\-\(\)]{7,15}$/;

  const valid = [
    validateField("name",    "e-name",  v => v.length > 0),
    validateField("email",   "e-email", v => emailRegex.test(v)),
    validateField("phone",   "e-phone", v => v === "" || phoneRegex.test(v)),
    validateField("message", "e-msg",   v => v.length > 0),
  ].every(Boolean);

  if (!valid) return;

  document.getElementById("success-banner").classList.add("show");

 setTimeout(function() {
    document.getElementById("success-banner").classList.remove("show");
   }, 5000);
  form.reset();

});

