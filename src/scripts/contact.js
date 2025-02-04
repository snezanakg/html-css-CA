document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("contact-form");
  
	form.addEventListener("submit", (e) => {
	  e.preventDefault();
  
	  const formData = new FormData(form);
	  const data = Object.fromEntries(formData.entries());
  
	  if (!data.name || !data.email || !data.message) {
		alert("Please fill all fields.");
		return;
	  }
  
	  alert("Thank you for contacting us! We'll get back to you soon.");
	  form.reset();
	});
  });
  