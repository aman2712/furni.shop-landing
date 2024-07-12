import jwt from "jsonwebtoken";
import { sendError } from "../helpers/helper.js";
import { UNAUTHORIZED } from "../utils/key.js";

export const checkToken = async (req, res, next) => {
  let token = req.get("authorization");

  if (token) {
    try {
      token = token.split(" ")[1];

      const user = jwt.verify(token, process.env.JWT_SECRET);
      req.user = user;

      next();
    } catch (error) {
      return sendError(res, UNAUTHORIZED, "token failed! unauthorized!");
    }
  } else {
    return sendError(res, UNAUTHORIZED, "No token found!");
  }
};

export const checkAdmin = async (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    sendError(res, UNAUTHORIZED, "User is not an admin!");
  }
};
