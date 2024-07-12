import prisma from "../prisma/index.js";
import { sendError, sendSuccess } from "../helpers/helper.js";
import { ERROR, SUCCESS, UNACCEPTABLE } from "../utils/key.js";
import fieldValidator from "../helpers/fieldValidator.js";

/**
 * To add a product to the database
 * method: post
 * url: /api/products
 * secured: true | admin
 *
 * @returns {Object} product - created product details
 */
export const addProduct = async (req, res) => {
  try {
    const { title, price, image } = req.body;

    const check = fieldValidator({
      title,
      price,
      image,
    });
    if (check.error) {
      return sendError(res, UNACCEPTABLE, check.message);
    }

    const product = await prisma.product.create({
      data: {
        title,
        price: parseFloat(price),
        image,
      },
    });

    return sendSuccess(res, SUCCESS, "Product created successfully", product);
  } catch (error) {
    console.log(error);
    return sendError(res, ERROR, "Internal Server Error");
  }
};

/**
 * To get a list of all products
 * method: get
 * url: /api/products
 * secured: false
 *
 * @returns {Array} products - list of products
 */
export const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();

    return sendSuccess(res, SUCCESS, "List of products", products);
  } catch (error) {
    return sendError(res, ERROR, "Internal Server Error");
  }
};
