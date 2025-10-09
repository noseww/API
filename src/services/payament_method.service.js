import PayamentMethod from "../models/payament_method.model";

class PayamentMethodService {
    async listPayamentMethods() {
        return await PayamentMethod.findAll({ attributes: [] })
    }
}

export default PayamentMethodService();