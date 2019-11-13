var Product = require('../model/product.model');

module.exports.index = async function(req, res, next){
    // var page = parseInt(req.query.page) || 1;//n
    // var perPage = 8;// x

    // var start = (page - 1) * perPage;
    // var end = page * perPage;
    
    // res.render('products/product',{
    //     products: db.get('products').value().slice(start,end)
    // });

    try{
        var proudcts = await Product.find();
        products.ff();
        res.render('products/product',{
            products: products
            });
    } catch(error){
            next(error);
    }
};