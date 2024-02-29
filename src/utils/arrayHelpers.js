export const isItemInArray = (array, item) => {
  return array.some((entry) => entry.id === item.id);
};

export const addItemToArray = (array, item) => {
  return [...array, item];
};

export const deleteItemInArray = (array, item) => {
  return array.filter((entry) => entry.id !== item.id);
};
