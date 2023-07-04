const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    let product = new Product(req.body);
    await product.save();
    res.status(200).json({ message: "Product created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    setTimeout(()=> res.json(products), 3000)
    
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}

exports.updateProduct = async (req, res) => {
  try {
    const { name, category, location, price } = req.body;
    let product = await Product.findById(req.params.id);

    if(!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    product.name = name;
    product.category = category;
    product.location = location;
    product.price = price;

    product = await Product.findOneAndUpdate({ _id: req.params.id }, product, { new:true } );
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}

exports.getProduct = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if(!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}

exports.deleteProduct = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if(!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    product = await Product.findOneAndRemove({ _id: req.params.id })
    res.json({message: "Product deleted"});
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}