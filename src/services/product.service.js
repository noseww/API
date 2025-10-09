import Product from "../models/product.model.js";
import Print from "../models/print.model.js";
import Item from "../models/item.model.js";

class ProductService {
    async save({ id, type, description, price, name, mount, type_print, type_paper }) {
        const existsPrint = await Print.findOne({ where: { type_print } });
        const existsItem = await Item.findOne({ where: { name } });
        if (existsPrint) throw new Error("Ya existe una impresion con el mismo tipo");
        if (existsItem) throw new Error("Ya existe un producto con el mismo nombre");
        const product = await Product.create({ id_product: id, type: type, description: description, price: price });
        if (type === "item") {
            const item = await Item.create({ id_item: product.id_product, name: name, mount: mount });
            return { id_item: product.id_product, name: item.name, mount: item.mount, type: product.type, description: product.description, price: product.price }
        } else {
            const print = await Print.create({ id_item: product.id_product, type_print: type_print, type_paper: type_paper });
            return { id_item: product.id_product, type_print: print.type_print, type_paper: print.type_paper, type: product.type, description: product.description, price: product.price }
        }
    }

    async update({ id, type, description, price, name, mount, type_print, type_paper }) {
        const product = await Product.findByPk(id);
        if (product === null) throw new Error("El producto no existe")
        const productUpdate = await Product.update({ name: name, mount: mount, description: description, price: price }, { where: { id_product: id } })
        if (type === "item") {
            const itemUpdate = await Item.update({ id_item: productUpdate.id_product, name: name, mount: mount }, { where: { id_item: id } });
            return { id_item: productUpdate.id_product, name: itemUpdate.name, mount: itemUpdate.mount, type: productUpdate.type, description: productUpdate.description, price: productUpdate.price }
        } else {
            const printUpdate = await Print.create({ id_item: productUpdate.id_product, type_print: type_print, type_paper: type_paper });
            return { id_item: productUpdate.id_product, type_print: printUpdate.type_print, type_paper: printUpdate.type_paper, type: productUpdate.type, description: productUpdate.description, price: productUpdate.price }
        }
    }

    async listProducts(){
        return await Product.findAll()
    }
}

export default ProductService;