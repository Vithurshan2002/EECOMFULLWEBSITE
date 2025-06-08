const express=require('express');
const router=express.Router();
const { userAuthenticate, Authorizeroles } = require('../middlewares/UserAuthenticatemiddleware');
const { addProduct, getSingleProduct, getAllProduct, upDateProduct, deleteProduct, getProductByName, createReview, deleteReview, getAllReview } = require('../Controllers/Productcontroller');
router.post('/product/new',addProduct);
router.post('/product/new',userAuthenticate,userAuthenticate,addProduct);
router.get('/allproducts',getAllProduct);  //two midlewares
router.get('/singleproduct/:id',getSingleProduct);
router.put('/updateproduct/:id',upDateProduct);
router.post('/findproduct',getProductByName);
router.put('/review',userAuthenticate,createReview);
router.delete('/review',deleteReview);

router.get('/getreview',getAllReview);

//for admin
router.delete('/deleteProduct/:id',userAuthenticate,Authorizeroles('admin'),deleteProduct);  // user token kidachu ..then kudipida rolea poruthian madum deleteproduct milldwarea access panni prodecta alikalm
module.exports=router;