document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("contactForm");
	const successMessage = document.getElementById("successMessage");

	form.addEventListener("submit", (e) => {
		e.preventDefault(); // Prevent default form submission

		// Extract form data
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());

		// Validate form fields
		if (!data["first-name"] || !data["last-name"] || !data["email"] || !data["message"]) {
			alert("Please fill out all required fields.");
			return;
		}

		// Simulate a successful submission
		successMessage.classList.remove("hidden");
		form.reset(); // Clear form
	});
});
