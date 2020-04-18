const port = 3003;
const express = require("express");

const app = express();

app.get('/products', (req, res, next) => {
    res.send({name:"Noteboook", price:123.45}) //convert to JSON
})

app.listen(port, () => {
    console.log(`Server is runnig in port: ${port}`)    
})