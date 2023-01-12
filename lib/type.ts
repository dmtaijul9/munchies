export interface state {
  cart: cart;
}

export interface cart {
  cartTotalAmount: number;
  cartTotalQuantity: number;
  items: items[];
}

export interface items {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  quantity_available: number;
  vat: number;
  addons: addons[];
}

export interface addons {
  id: number;
  is_default?: boolean;
  name: string;
  price: number;
}

export interface objAddonItems {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  quantity_available: number;
  vat: number;
  addons: addons;
}
