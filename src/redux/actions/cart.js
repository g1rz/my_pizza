export const addProduct = (item) => ({
    type: 'ADD_PRODUCT',
    payload: item,
});

export const plusProduct = (itemID) => ({
    type: 'PLUS_PRODUCT',
    payload: itemID,
});

export const minusProduct = (itemID) => ({
    type: 'MINUS_PRODUCT',
    payload: itemID,
});

export const deleteProduct = (itemID) => ({
    type: 'DELETE_PRODUCT',
    payload: itemID,
});
