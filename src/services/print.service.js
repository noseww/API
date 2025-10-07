import Print from "../models/print.model";

class PrintService {
    async save({ type_print, type_paper, price }) {
        const exists = await Print.findOne({ where: type_print });
        if (exists) throw new Error("Impresion ya existe");
        const print = Print.create({ type_print: type_print, type_paper: type_paper, price: price });
        return { type_print: print.type_print, type_paper: print.type_paper, price: print.price }
    }

    async update({ id, type_print, type_paper, price }) {
        const item = Print.findByPk(id);
        if (item === null) throw new Error("Impresion no encontrada");
        const printUpdate = await Print.update({ type_print: type_print, type_paper: type_paper, price: price }, {
            where: {
                id: id
            }
        });
        return { id: printUpdate.id, type_print: printUpdate.type_print, type_paper: printUpdate.type_paper, price: printUpdate.price };
    }

    async listPrints() {
        return await Print.findAll({ attributes: ["id", "type_print", "type_paper", "price"] });
    }
}

export default new PrintService();