import PayamentMethodService from "../services/payament_method.service.js";

export const savePayamentMethod = async (req, res, next) => {
    try {
        const payamentMethod = await PayamentMethodService.save(req.body);
        return res.status(201).json(payamentMethod);
    } catch (error) {
        next(error);
    }
}

export const updatePayamentMethod = async (req, res, next) => {
    try {
        const payamentMethod = await PayamentMethodService.update(req.body);
        return res.json(payamentMethod);
    } catch (error) {
        next(error);
    }
}

export const listPayamentMethods = async (req, res, next) => {
    try {
        const payamentMethods = await PayamentMethodService.listPayamentMethods();
        return res.json(payamentMethods);
    } catch (error) {
        next(error);
    }
}
