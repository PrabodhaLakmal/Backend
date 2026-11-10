import Product from "../models/product.js";

export function getProducts(req, res){
    Product.find().then(
        (data) =>{
            res.json(data);
        }
    )
}

export function saveProducts(req, res) {

    console.log(req.body);

    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    });

    product.save().then(() => {
        res.json({
            message: "Product data saved successfully."
        });
    }).catch(() => {
        res.json({
            message: "Error saving product data."
        });
    });       
}    