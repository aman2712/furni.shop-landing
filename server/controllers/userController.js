import prisma from "../prisma/index.js";
import { sendError, sendSuccess } from "../helpers/helper.js";
import {
  ERROR,
  NOTFOUND,
  SUCCESS,
  UNACCEPTABLE,
  UNAUTHORIZED,
} from "../utils/key.js";
import fieldValidator from "../helpers/fieldValidator.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

/**
 * To create a user and store details in database
 * method: post
 * url: /api/users
 * secured: false
 *
 * @returns {Object} user - user details and token for auth
 */
export const createUser = async (req, res) => {
  try {
    // get fields from request body
    const { name, email, password } = req.body;

    // check if all fields are valid
    const check = fieldValidator({
      name,
      email,
      password,
    });
    if (check.error) {
      return sendError(res, UNACCEPTABLE, check.message);
    }

    // generate salt and hash
    const salt = bcrypt.genSaltSync(Number(process.env.SALT_ROUNDS));
    const hash = bcrypt.hashSync(password, salt);

    // insert user in db
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hash,
      },
    });

    // generate jwt token
    const token = generateToken(user);

    // create payload
    const data = { ...user, password: undefined, token };

    // send success response and payload
    return sendSuccess(res, SUCCESS, "User created successfully", data);
  } catch (error) {
    return sendError(res, ERROR, "Internal Server Error");
  }
};

/**
 * To log in a user and generate token
 * method: post
 * url: /api/users/login
 * secured: false
 *
 * @returns {Object} user - user details and auth token
 */
export const login = async (req, res) => {
  try {
    // get data from request body
    const { email, password } = req.body;

    // validate the fields
    const check = fieldValidator({
      email,
      password,
    });
    if (check.error) {
      return sendError(res, UNACCEPTABLE, check.message);
    }

    // find user in database
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // send 404 error if user is not found
    if (!user) {
      return sendError(res, NOTFOUND, "No such user found");
    }

    // send 401 error if user password is incorrect
    if (!bcrypt.compareSync(password, user.password)) {
      return sendError(res, UNAUTHORIZED, "Password is incorrect!");
    }

    // create jwt token
    const token = generateToken(user);

    // generate payload
    const data = {
      ...user,
      password: undefined,
      token,
    };

    // send payload
    return sendSuccess(res, SUCCESS, "User logged in", data);
  } catch (error) {
    return sendError(res, ERROR, "Internal Server Error");
  }
};
