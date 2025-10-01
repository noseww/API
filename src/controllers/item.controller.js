import itemService from "../services/item.service.js";

export const save = async (req, res, next) => {
    try {
        const user = await itemService.save(req.body);
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
};

export const update = async (req, res, next) => {
    try {
        const token = await itemService.update(req.body);
        res.json(token);
    } catch (err) {
        next(err);
    }
};

export const listItems = async (req, res, next) => {
    try {
        const users = await itemService.listItems();
        res.json(users);
    } catch (err) {
        next(err);
    }
};
