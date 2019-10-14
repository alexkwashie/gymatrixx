//Utility function allow us to keep our files clean
//and organize function that we may need in multiple files in one location

export const addItemToCart = (cartItems, cartItemToAdd) =>{
    //get the cart item and check if it is already available
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    //existinCartItem will return true/false
    if(existingCartItem){
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity +1}
            : cartItem
            )
            /*the quantity propert gets attached the first time around since
            this 'if block code' wont run when its a new item */
    };

    return [...cartItems, {...cartItemToAdd, quantity: 1}];


}