<<<<<<< HEAD
import service from "../users.service.js";
=======
import service from "../../services/users.service.js";
>>>>>>> 9d9721b35ab7726089a4d3b2df33f73504cab1e6

class AuthController {
  constructor() {
    this.service = service;
  }
  register = async (req, res, next) => {
    try {
      return res.json({
        statusCode: 201,
        message: "Registered!",
      });
    } catch (error) {
      return next(error);
    }
  };
  login = async (req, res, next) => {
    try {
      return res
        .cookie("token", req.token, {
          maxAge: 60 * 60 * 24 * 7,
          httpOnly: true,
        })
        .json({
          statusCode: 200,
          message: "Logged in!",
        });
    } catch (error) {
      return next(error);
    }
  };
  signout = async (req, res, next) => {
    try {
      return res.clearCookie("token").json({
        statusCode: 200,
        message: "Signed out!",
      });
    } catch (error) {
      return next(error);
    }
  };
}

const controller = new AuthController();
const { register, login, signout } = controller;
export { register, login, signout };
