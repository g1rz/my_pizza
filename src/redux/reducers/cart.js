const initialState = {
    items: [],
    totalCount: 0,
    totalPrice: 0,
};

const calcTotalCount = (items) => {
    return items.reduce((sum, item) => item.count + sum, 0);
};

const calcTotalPrice = (items) => {
    return items.reduce((sum, item) => item.count * item.price + sum, 0);
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT': {
            const newItems = [...state.items, action.payload];
            const totalCount = newItems.reduce((sum, obj) => obj.count + sum, 0);
            const totalPrice = newItems.reduce((sum, obj) => obj.count * obj.price + sum, 0);
            return {
                ...state,
                items: newItems,
                totalCount: totalCount,
                totalPrice: totalPrice,
            };
        }
        case 'PLUS_PRODUCT': {
            const newItems = state.items.map((item) => {
                if (item.id === action.payload) {
                    const currentCount = item.count;
                    return {
                        ...item,
                        count: currentCount + 1,
                    };
                } else {
                    return item;
                }
            });
            return {
                ...state,
                items: newItems,
                totalCount: calcTotalCount(newItems),
                totalPrice: calcTotalPrice(newItems),
            };
        }
        case 'MINUS_PRODUCT': {
            const newItems = state.items.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        count: item.count - 1,
                    };
                } else {
                    return item;
                }
            });
            return {
                ...state,
                items: newItems,
                totalCount: calcTotalCount(newItems),
                totalPrice: calcTotalPrice(newItems),
            };
        }
        case 'DELETE_PRODUCT': {
            const newItems = state.items.filter((item) => item.id !== action.payload);
            return {
                ...state,
                items: newItems,
                totalCount: calcTotalCount(newItems),
                totalPrice: calcTotalPrice(newItems),
            };
        }
        default:
            return state;
    }
};

export default cart;
