// 

const addToDb = id => {
    let shoppingCart;
    
    const storedCart = localStorage.getItem('shopping-cart');

    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    } else {
        shoppingCart = {};
    }

    const qty = shoppingCart[id];

    if(qty) {
        const newQty = qty + 1;
        shoppingCart[id] = newQty;
        
    } else {
        shoppingCart[id] = 1;
    }
    
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

export {addToDb};