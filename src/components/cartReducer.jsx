import cartItems from "./CartItems";

export const cartReducer = (state, action) => {
  const { Items } = state;

  if (action.type === "ADD_TO_CART") {
    const addedItem = cartItems.find(
      (singleItem) => singleItem.id === Number(action.payload)
    );

    if (!addedItem) {
      return state;
    }

    const itemExists = Items.some((item) => item.id === addedItem.id);

    if (itemExists) {
      return state;
    }
    return { ...state, Items: [...Items, addedItem] };
  }

  if (action.type === "REMOVE_FROM_CART") {
    const remainingItems = Items.filter(
      (removeItem) => removeItem.id !== Number(action.payload)
    );
    return { ...state, Items: remainingItems };
  }

  if (action.type === "INCREMENT_QUANTITY") {
    const updatedItems = Items.map((item) =>
      item.id === Number(action.payload.id)
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );
    return { ...state, Items: updatedItems };
  }

  if (action.type === "DECREMENT_QUANTITY") {
    const updatedItems = Items.map((item) =>
      item.id === Number(action.payload.id)
        ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) }
        : item
    );
    return { ...state, Items: updatedItems };
  }

  return state;
};
