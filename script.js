// Newsletter Subscription Form
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const subscribeButton = document.querySelector('#subscribe');

form.addEventListener('submit', (e) => {
e.preventDefault();
// alert(Thanks for subscribing, ${emailInput.value}!);
emailInput.value = '';
});

// Scroll to Top Button
const scrollTopButton = document.querySelector('#scroll-top');

window.addEventListener('scroll', () => {
if (window.pageYOffset > 100) {
scrollTopButton.classList.add('show');
} else {
scrollTopButton.classList.remove('show');
}
});

scrollTopButton.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});

// shop page js

// Cart Functionality

// Selecting the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.product-card button');

// Adding a click event listener to each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Selecting the product card element for the current button
    const productCard = button.parentElement;

    // Getting the product name and price from the product card
    const productName = productCard.querySelector('h3').innerText;
    const productPrice = productCard.querySelector('.price').innerText;

    // Creating a new cart item element
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    // Populating the cart item element with the product name, price, and a remove button
    cartItem.innerHTML = `
      <p>${productName}</p>
      <p>${productPrice}</p>
      <button class="remove-button">Remove</button>
    `;

    // Selecting the cart element and appending the new cart item element to it
    const cart = document.querySelector('.cart');
    cart.appendChild(cartItem);

    // Adding a click event listener to the remove button on the new cart item element
    const removeButton = cartItem.querySelector('.remove-button');
    removeButton.addEventListener('click', () => {
      cartItem.remove();
    });
  });
});
//  about us
// Smooth Scrolling
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
// contact
// Form Functionality

// Selecting the contact form element
const contactForm = document.querySelector('form');

// Adding a submit event listener to the form
contactForm.addEventListener('submit', (event));
