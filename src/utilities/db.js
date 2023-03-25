// 

const addToDb = id => {
    const qty = localStorage.getItem(id);
    if(qty){
        localStorage.setItem(id, parseInt(qty) + 1);
    } else {
        localStorage.setItem(id, 1);
    }
    
}

export {addToDb};