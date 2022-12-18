console.log('%c-> developmentConsole: Cart | index.js ', 'color:#77dcfd');

import faker from 'faker';

const mount = (el) => {
  const cartText = `<div>Yo have ${faker.datatype.number()} items in your cart.</div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-remote-cart');

  // assuming our container doesn't have an element with id "dev-remote-cart"
  if (el) {
    mount(el);
  }
}

export { mount };
