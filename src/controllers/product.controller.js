import productService from "../services/product.service.js";

export const saveProduct = async (req, res, next) => {
    try {
        const product = await productService.save(req.body);
        res.status(201).json(product);
    } catch (err) {
        next(err);
    }
};

export const updateProduct = async (req, res, next) => {
    try {
        const product = await productService.update(req.body);
        res.json(product);
    } catch (err) {
        next(err);
    }
};
export const listProducts = async (req, res, next) => {
    try {
        const products = await productService.listProducts();
        res.json(products);
    } catch (err) {
        next(err);
    }
};