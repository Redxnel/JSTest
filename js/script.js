const goods = [];
const removeElementsCount = 1;

const addItem = (name, quantity) => {
  const product = { name, quantity, sold: false };
  goods.push(product);
  return goods;
};

const removeItem = (index) => goods.splice(index, removeElementsCount);

const reorderList = (array) => array.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});

const findItemIndex = (name) => goods.findIndex(element => element.name === name);

const soldItem = (index) => goods[index].sold = true;