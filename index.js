// Generación dinámica de una página de ventas de combustible
const app = document.createElement('div');
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.backgroundColor = '#f4f4f4';
document.body.style.color = '#333';

document.title = 'FuelMax - Venta de Combustible';

// Crear encabezado
const header = document.createElement('header');
header.style.backgroundColor = '#004aad';
header.style.color = '#fff';
header.style.padding = '1rem';
header.style.textAlign = 'center';
const title = document.createElement('h1');
title.innerText = 'FuelMax - Venta de Combustible';
header.appendChild(title);
app.appendChild(header);

// Crear sección principal
const main = document.createElement('main');
main.style.padding = '2rem';

// Crear formulario para calcular costos
const section = document.createElement('section');
section.style.backgroundColor = '#fff';
section.style.padding = '1.5rem';
section.style.borderRadius = '8px';
section.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
section.style.marginBottom = '2rem';

const h2 = document.createElement('h2');
h2.innerText = 'Compra tu Combustible';
section.appendChild(h2);

const label1 = document.createElement('label');
label1.innerText = 'Precio por litro ($):';
label1.style.display = 'block';
label1.style.marginBottom = '0.5rem';
section.appendChild(label1);

const priceInput = document.createElement('input');
priceInput.type = 'number';
priceInput.placeholder = 'Precio por litro';
priceInput.style.width = 'calc(100% - 2rem)';
priceInput.style.padding = '0.5rem';
priceInput.style.marginBottom = '1rem';
section.appendChild(priceInput);

const label2 = document.createElement('label');
label2.innerText = 'Cantidad en litros:';
label2.style.display = 'block';
label2.style.marginBottom = '0.5rem';
section.appendChild(label2);

const quantityInput = document.createElement('input');
quantityInput.type = 'number';
quantityInput.placeholder = 'Litros a comprar';
quantityInput.style.width = 'calc(100% - 2rem)';
quantityInput.style.padding = '0.5rem';
quantityInput.style.marginBottom = '1rem';
section.appendChild(quantityInput);

const button = document.createElement('button');
button.innerText = 'Calcular Costo';
button.style.padding = '0.5rem 1rem';
button.style.backgroundColor = '#004aad';
button.style.color = '#fff';
button.style.border = 'none';
button.style.borderRadius = '4px';
button.style.cursor = 'pointer';
section.appendChild(button);

const result = document.createElement('p');
result.style.marginTop = '1rem';
result.style.fontWeight = 'bold';
section.appendChild(result);

main.appendChild(section);
app.appendChild(main);

document.body.appendChild(app);

// Agregar funcionalidad al botón
button.addEventListener('click', () => {
    const price = parseFloat(priceInput.value);
    const quantity = parseFloat(quantityInput.value);

    if (!price || !quantity || price <= 0 || quantity <= 0) {
        result.innerText = 'Por favor, ingresa valores válidos para calcular el costo.';
        result.style.color = 'red';
    } else {
        const total = price * quantity;
        result.innerText = `El costo total es: $${total.toFixed(2)}`;
        result.style.color = 'green';
    }
});
