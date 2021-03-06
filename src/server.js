const port = 3003;
const express = require("express");
const database = require("./database");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/products', (req, res, next) => {
    res.json(database.getProducts()) //convert to JSON
})

app.get('/product/:id',(req, res) => {
    let product_id = req.params.id_product;
    res.json(database.getProductById(product_id))
})

app.post('/addProduct', (req,res) => {
    res.send(database.saveProduct(req.body))
})

app.post('/deleteProduct', (req, res) => {
    res.send(database.deleteProduct(req.body.idProduct))
})

app.listen(port, () => {
    console.log(`Server is runnig in port: ${port}`)    
})