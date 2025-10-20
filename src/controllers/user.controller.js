import userService from "../services/user.service.js";

export const saveUser = async (req, res, next) => {
    try {
        const user = await userService.register(req.body);
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
};

export const updateUser = async (req, res, next) => {
    try {
        const user = await userService.update(req.body);
        res.json(user);
    } catch (err) {
        next(err);
    }
};

export const login = async (req, res, next) => {
    try {
        const token = await userService.login(req.body);
        res.json(token);
    } catch (err) {
        next(err);
    }
};

export const listUsers = async (req, res, next) => {
    try {
        const users = await userService.listUsers();
        res.json(users);
    } catch (err) {
        next(err);
    }
};
