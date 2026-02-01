// src/modules/users/user.service.js

import bcrypt from "bcryptjs";
import * as userModel from "./user.model.js";

export const createUser = async (payload) => {
  const existingUser = await userModel.findUserByEmail(payload.email);
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(payload.password, 10);

  return userModel.createUser({
    ...payload,
    password: hashedPassword,
  });
};

export const getAllUsers = async () => {
  return userModel.findAllUsers();
};

export const getUserById = async (id) => {
  const user = await userModel.findUserById(id);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

export const updateUser = async (id, data) => {
  const updatedUser = await userModel.updateUser(id, data);
  if (!updatedUser) {
    throw new Error("User not found");
  }
  return updatedUser;
};

export const deleteUser = async (id) => {
  await userModel.deleteUser(id);
};
