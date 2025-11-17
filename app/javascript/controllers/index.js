// Import and register all your controllers from the importmap via controllers/**/*_controller
import { application } from "controllers/application"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

var condRadio = document.getElementsByClassName('govuk-radios__conditional');

for (var i = 0; i < condRadio.length; i ++) {
    condRadio[i].style.visibility = 'hidden';

}
window.onload = function() {
var def = document.getElementById('contact-1');
var abc = document.getElementById('conditional-contact-1');

if (def.checked === true){
	alert('hi');
	abc.style.visibility = 'visible'
}
}

// document.addEventListener("DOMContentLoaded", function() {
//     const nameRadio = document.getElementById("pref_name");
//     const phoneRadio = document.getElementById("pref_phone");
//     const mobileRadio = document.getElementById("pref_mobile");
//     const nameField = document.getElementById("name_field");
//     const phoneField = document.getElementById("phone_field");
//     const mobileField = document.getElementById("mobile_field");

//     function toggleFields() {
//       if (nameRadio.checked) {
//         nameField.style.display = "block";
//         phoneField.style.display = "none";
//         mobileField.style.display = "none";
//       } else if (phoneRadio.checked) {
//         phoneField.style.display = "block";
//         nameField.style.display = "none";
//         mobileField.style.display = "none";
//       } else if (mobileRadio.checked) {
//       	mobileField.style.display = "block";
//         nameField.style.display = "none";
//         phoneField.style.display = "none";
//       }
//     }

//     nameRadio.addEventListener("change", toggleFields);
//     phoneRadio.addEventListener("change", toggleFields);
//     mobileRadio.addEventListener("change", toggleFields);
//   });


   document.addEventListener("DOMContentLoaded", () => {
      const radios = document.querySelectorAll('input[name="user[preference]"]');
      const fields = document.querySelectorAll('#name_field, #phone_field, #mobile_field');

      function toggleFields(event) {
        // Hide all fields first
        fields.forEach(field => field.classList.add("hidden"));

        // Show the selected field
        const targetId = event.target.dataset.target;
        const targetField = document.getElementById(targetId);
        if (targetField) targetField.classList.remove("hidden");
        if (targetField) targetField.parentNode.style.visibility = 'visible';
      }

      // Attach one listener to each radio
      radios.forEach(radio => radio.addEventListener("change", toggleFields));
    });