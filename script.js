const addButtons = document.querySelectorAll('.add-to-order');
const productSelect = document.getElementById('product-select');
const form = document.getElementById('order-form');
const message = document.getElementById('form-message');

addButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedProduct = button.dataset.product;
    productSelect.value = selectedProduct;
    message.textContent = `${selectedProduct} selected. Please fill in the rest of the form and submit.`;
    message.classList.add('success');
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const businessName = document.getElementById('business-name').value.trim();
  const contact = document.getElementById('contact').value.trim();
  const quantity = document.getElementById('quantity').value;
  const city = document.getElementById('city').value.trim();
  const product = productSelect.value;

  if (!businessName || !contact || !product || !city) {
    message.textContent = 'Please complete the required details before submitting.';
    return;
  }

  message.textContent = `Thank you ${businessName}! Your request for ${quantity} unit(s) of ${product} in ${city} has been received. Our team will contact you shortly.`;
  form.reset();
  productSelect.value = '';
});
