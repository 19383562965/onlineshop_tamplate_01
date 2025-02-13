document.getElementById('search-bar').addEventListener('input', function (e) {
  const searchQuery = e.target.value.toLowerCase();
  const products = document.querySelectorAll('.product-container');

  products.forEach(product => {
    const productName = product.querySelector('.productsname').textContent.toLowerCase();
    if (productName.includes(searchQuery)) {
      product.style.display = 'inline-block';
    } else {
      product.style.display = 'none';
    }
  });
});
