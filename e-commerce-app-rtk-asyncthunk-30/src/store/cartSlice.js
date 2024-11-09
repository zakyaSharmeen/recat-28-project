import {createSlice} from "@reduxjs/toolkit";

// This function checks if there’s any cart data saved in localStorage. If there is, it returns the data as an array or object. If not, it returns an empty array []
const fetchFormLocalStore = () =>{
    let cart = localStorage.getItem("cart")
    if(cart){
        return JSON.parse(localStorage.getItem("cart"))
    }else{
        return[]
    }
}
// This function saves the data you provide (such as cart items) to localStorage in JSON format. This way, it’s available even after a page refresh.
// Convert the data into a JSON string format using JSON.stringify(). JSON is a format that localStorage can save as text.
const storeInLocalStorage = (data) =>{
    localStorage.setItem("cart", JSON.stringify(data))

}





const initialState = {
    // carts: [],
    carts: fetchFormLocalStore(),
    itemsCount: 0,
    totalAmount: 0,
    isCartMessageOn: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isItemInCart = state.carts.find(item => item.id === action.payload.id);

            if(isItemInCart){
                const tempCart = state.carts.map(item => {
                    if(item.id === action.payload.id){
                        let tempQty = item.quantity + action.payload.quantity;
                        let tempTotalPrice = tempQty * item.price;

                        return {
                            ...item, quantity: tempQty, totalPrice: tempTotalPrice
                        }
                    } else {
                        return item;
                    }
                });

                state.carts = tempCart;
                storeInLocalStorage(state.carts)
               
            } else {
                state.carts.push(action.payload);
                storeInLocalStorage(state.carts)
              
            }
        },
        removeFromCart: (state, action) => {
            const tempCart = state.carts.filter(item => item.id !== action.payload);
            state.carts = tempCart;
            storeInLocalStorage(state.carts);
        },

        clearCart: (state) => {
            state.carts = [];
            storeInLocalStorage(state.carts);
        },

        getCartTotal: (state) => {
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                return cartTotal + cartItem.totalPrice;
            }, 0);
        
            // Update itemsCount to reflect the total quantity of items in the cart
            state.itemsCount = state.carts.reduce((count, cartItem) => {
                return count + cartItem.quantity;
            }, 0);
        },
        

        toggleCartQty: (state, action) => {
            const tempCart = state.carts.map(item => {
                if(item.id === action.payload.id){
                    let tempQty = item.quantity;
                    let tempTotalPrice = item.totalPrice;

                    if(action.payload.type === "INC"){
                        tempQty++;
                        if(tempQty === item.stock) tempQty = item.stock;
                        tempTotalPrice = tempQty * item.discountedPrice;
                    }

                    if(action.payload.type === "DEC"){
                        tempQty--;
                        if(tempQty < 1) tempQty = 1;
                        tempTotalPrice = tempQty * item.discountedPrice;
                    }

                    return {...item, quantity: tempQty, totalPrice: tempTotalPrice};
                } else {
                    return item;
                }
            });

            state.carts = tempCart;
            storeInLocalStorage(state.carts);
        },


        setCartMessageOn: (state) =>{
            state.isCartMessageOn = true;

        },
        setCartMessageOff: (state) =>{
            state.isCartMessageOn = true;
        }

      
    }
});

export const {addToCart,getCartTotal, setCartMessageOn, setCartMessageOff, removeFromCart,clearCart,toggleCartQty} = cartSlice.actions;
export const getAllCarts = (state) => state.cart.carts;
export const getCartItemsCount = (state) => state.cart.itemsCount;
export const getCartMessageStatus = (state) => state.cart.isCartMessageOn




export default cartSlice.reducer;