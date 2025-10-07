import printService from "../services/print.service.js";

export const save = async (req, res, next) => {
    try {
        const print = await printService.save(req.body);
        res.status(201).json(print);
    } catch (err) {
        next(err);
    }
}


export const update = async (req, res, next) => {
    try {
        const print = await printService.update(req.body);
        res.json(print);
    } catch (err) {
        next(err);
    }
}

export const listPrints = async () => {
    try {
        const prints = await printService.listPrints();
        res.json(prints);
    } catch (err) {
        next(err);
    }
}