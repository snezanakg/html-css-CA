# HTML & CSS Course Assignment

## Brief

You must deliver a properly functioning, responsive website for the assignment brief you chose in Design 1.

The site needs to have every page listed in the site architecture on your chosen brief. Certain functionality requiring JavaScript can be mimicked; for example, a login page could link across from the ‘Sign in’ button.

- The HTML should be semantic and neat.
- The CSS should follow the DRY principle and be easy to read.
- The website should be responsive and look good at every screen size with no horizontal scrollbars. Use Flexbox and CSS Grids where appropriate. Please do not use a CSS framework like Bootstrap; we want to see that you can build responsive sites without the help of a framework.
- The site should be WCAG compliant, and accessibility should be taken into account.
- Each page should have a unique <meta name="description">, <title>, and <h1>.
- You should not use copied code in your submission. All code submitted must be written by yourself. You may use external sources to show you how to achieve specific effects, which should be included in your report.

## Process

1. Look at your prototype and consider how the elements will move across the different devices. Which elements move where on different devices?
2. Write your HTML and CSS, ensuring your HTML is semantic and bug-free and your CSS follows DRY principles.
3. Use media queries, flex or grid to make your website responsive across screen sizes.
4. Test your website using your developer tools and also test on major browsers and various devices.
5. Validate your code using the Markup Validation Service
6. Use the WAVE Web Accessibility Evaluation Tools to test that your site matches best practices for accessibility
7. When your site is ready, post it on the Teams peer review channel.
8. Look at the work of your peers and write a review for them.
9. Make adjustments based on the feedback you gather from peers and teachers.
10. Submit here on Teams.

## Delivery

- Please include a link to your live site, deployed on Netlify or GitHub Pages in your submission.
- Please include a link to your public GitHub repo containing your code in your submission.
- There is no reflection for this CA.


JAVA SCRIPT 1 - Course Assignment
Due January 26, 2025 11:59 PM (Extended)
Instructions
Brief
Using your new skills writing JavaScript, create an interactive online store to display product from an API endpoint. Use one of the three provided API urls to display products in HTML and allow users to create a basket of items.

You may use your existing cross course project code as a starting point, or start a fresh project if this is not available. We recommend using an existing project as styling will not be graded, but is nice to have in the final submission.

User Stories
- As a user, I want to view a list of products on the homepage.
- As a user, I want to filter products by category, gender or genre.
- As a user, I want to view a single product page with more detail.
- As a user, I want to add a product to my basket.
- As a user, I want to remove a product from my basket.
- As a user, I want to view a summary of my cart on the checkout page.
- As a user, I want to view an order-confirmation screen after checking out.

Required Pages
The following pages are required to complete this assignment.

- Home Page containing product list `/index.html`
- Product Page showing all details of a specific product `/product/index.html`
- Checkout Page showing all items in the basket `/checkout/index.html`
- Confirmation Page showing a thank you message `/checkout/confirmation/index.html`

Optional Pages
The following pages are not required to complete this assignment, but help to improve the realism for those with extra time.

- Category Pages (e.g. Male/Female Clothing, Movie Genres)
- Terms and Conditions page (this may be AI generated)
- Privacy Policy (this may be AI generated)
- My Profile

Process
Decide if you will use your existing project, or a fresh project.
Open your project in GitHub Desktop and VS Code.
Select one of the three provided endpoints from the list below.
Checkout the API documentation for your chosen endpoint.
Work through the requirements in JavaScript one by one.
Test your work thoroughly and ask for peer review.
Offer to review two other student's work.
Make any final changes, and submit for delivery.

Resources
You have been provided with three options to choose from:
Rainy Days API - Outdoor clothing
GameHub API - Video games
Square Eyes API - Movies
The documentation website for each endpoint explains which options are available on the provided objects. These properties should be used and displayed to the user in your application. You are only required to select one of the endpoints but if you wish to implement more than one that will be accepted.

Important Features
This list is a non-exhaustive list of important things to keep in mind before delivery:
Errors should be handled for the user, such that they are alerted when something goes wrong like an API call.
A loading indicator should be shown to the user whenever they are waiting for an asynchronous action to finish.
There should be no hardcoded product data in your final submission.
Although the focus on marking is on JavaScript, the site still needs to be accessible and usable for the user. If we cannot access functionality that has been coded, it will be marked as if the coding was not done.
Use `async` instead of `then` syntax for asynchronous actions.
Remove all console.log statements before delivery.

Delivery
GitHub repository with JavaScript code in the default (main/master) branch
Written reflection on the CA process
