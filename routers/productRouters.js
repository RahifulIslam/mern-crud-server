const router = require('express').Router();
const upload = require('../middlewares/productImage');

const { 
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct,
 } = require('../controllers/productControllers');

// For image upload
// upload.single('image'),

router.post('/add-product', addProduct);
router.get('/get-products', getProducts);
router.put('/update-product/:id', updateProduct);
router.delete('/delete-product/:id', deleteProduct);

module.exports = router;