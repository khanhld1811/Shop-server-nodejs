var Product = require('../../model/product.model');

module.exports.index = async function(req, res){
    var products = await Product.find();
    res.json(products);
};

module.exports.create = async function(req,res){
    var product = await Product.create(req.body);
    res.json(product);
};

module.exports.delete = async function(req, res){
    var product = await Product.delete(req.body);
    res.json(req.body)
}