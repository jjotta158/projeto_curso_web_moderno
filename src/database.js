const sequence = {
    _id:1,
    get id() {return this._id++}
}

const products = {

}

function saveProduct(product) {
    if (!product.id) {
        product.id = sequence.id
        products[product.id]  = product
        return product;
    }    
}

function getProductById(product) {
    return products[id] || {};
}

function getProducts() {
    return products
}


module.exports = {saveProduct, getProductById, getProducts}