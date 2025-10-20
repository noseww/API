import PayamentMethod from "../models/payament_method.model.js";

class PayamentMethodService {

    async save({ type }) {
        const payamentMethod = await PayamentMethod.findOne({ where: { type } });
        if (!payamentMethod) throw new Error("Metodo de pago ya existe");
        const payamentMethodCreate = await PayamentMethod.create({ id_payament_method: type });
        return { id: payamentMethod.id, type: payamentMethodCreate.type };
    }

    async update({ id, type }) {
        const payamentMethod = await PayamentMethod.findByPk(id);
        if (!payamentMethod) throw new Error("Metodo de pago no encontrado");
        const payamentMethodUpdate = await PayamentMethod.update({ type: type }, { where: { id_payament_method: id } });
        return { id: payamentMethodUpdate.id_payament_method, type: payamentMethodUpdate.type };
    }
    
    async listPayamentMethods() {
        return await PayamentMethod.findAll({ attributes: ["id_payament_method", "name", "description", "createdAt"] })
    }
}

export default PayamentMethodService();