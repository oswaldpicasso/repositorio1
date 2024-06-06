const productos = document.querySelectorAll('.producto');

productos.forEach(producto => {
    producto.addEventListener('click', () => {
        // Handle product click event
        console.log('Producto clicked!');
    });
});