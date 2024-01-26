const {Product} = require('../models/productModel');

const addProduct = async (req, res)=> {
    const productData = req.body;
    // const productImage = req.file;
    console.log("Product data are:", productData);
    // console.log("Product Image are:", productImage);

    const product = new Product({
        name: productData.name,
        // image: productImage ? productImage.filename : null,
        price: productData.price,
        quantity: productData.quantity,
    });

    console.log("Product is:", product)

    try{
        const newProduct = await product.save();
        res.status(201).send({
            "message": "Product added successfully",
            "product": newProduct
        });
    } catch(err){
        return res.status(404).send("Something went wrong");
    }
}

const getProducts = async(req, res)=> {
    try{
        const products = await Product.find();
        res.json(products);
    } catch(error){
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const updateProduct = async(req, res)=> {
    const { id } = req.params;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteProduct = async(req, res)=> {
    const { id } = req.params;
    console.log("Id is:", id)
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully', deletedProduct });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct,

}