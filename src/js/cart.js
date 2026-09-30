const cart = [
  { id: 1, name: "Item 1", price: 10 },
  { id: 2, name: "Item 2", price: 15 },
  { id: 3, name: "Item 3", price: 12 },
];

const cartElement = document.querySelector("#cart");

if (cartElement) {
  const list = document.createElement("ul");

  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price}`;
    list.appendChild(listItem);
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const totalElement = document.createElement("p");
  totalElement.textContent = `Total: $${total}`;

  cartElement.appendChild(list);
  cartElement.appendChild(totalElement);
}