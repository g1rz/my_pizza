import * as firebase from 'firebase';

export const fetchProducts = () => (dispatch) => {
    dispatch(setLoaded(false));

    var database = firebase.database();
    database.ref('pizzas').on('value', (snapshot) => {
        dispatch(setProducts(snapshot.val()));
    });
};

export const setProducts = (items) => ({
    type: 'SET_PRODUCTS',
    payload: items,
});

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});
