import { objAddonItems } from "../lib/type";

export const getSubTotal = (items: objAddonItems[]) => {
  return items
    .map((item: objAddonItems) => item.addons.price * item.quantity)
    .reduce((total, price) => {
      return total + price;
    }, 0);
};

export const getVat = (items: objAddonItems[]) => {
  return items
    .map((item) => ((item.addons.price * item.quantity) / 100) * item.vat)
    .reduce((total, item) => {
      return total + item;
    }, 0);
};
