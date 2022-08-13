export const products = [
  {
    id: 111,
    emoji: String.fromCodePoint(127746),
    name: "Umbrella",
    price: 200
  },

  {
    id: 222,
    emoji: String.fromCodePoint(127850),
    name: "Cookie",
    price: 50
  },

  {
    id: 333,
    emoji: String.fromCodePoint(127936),
    name: "Basketball",
    price: 300
  },

  {
    id: 444,
    emoji: String.fromCodePoint(128142),
    name: "Diamond",
    price: 1000
  },

  {
    id: 555,
    emoji: String.fromCodePoint(127758),
    name: "Globe",
    price: 400
  }
];

export function getProductById(id) {
  return products.find((prd) => prd.id === id);
}
