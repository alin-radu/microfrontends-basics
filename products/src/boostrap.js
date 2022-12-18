console.log('%c-> developmentConsole: Products | index.js ', 'color:#77dcfd');

import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// context #1, development
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-remote-products');

  // assuming our container doesn't have an element with id "dev-remote-products"
  if (el) {
    mount(el);
  }
}

// context #2, development/production using container
export { mount };
