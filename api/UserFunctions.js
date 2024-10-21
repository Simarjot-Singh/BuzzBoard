import jwt from "jsonwebtoken";
import User from "./models/User.js";

const secret = 'secret21';

export function getUserFromToken(token) {
  const userInfo = jwt.verify(token, secret);
  return User.findById(userInfo.id);
}