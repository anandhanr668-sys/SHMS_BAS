// src/modules/master-data/master.service.js

import * as masterModel from "./master.model.js";

export const createMasterData = async (payload) => {
  if (!payload.category || !payload.key) {
    throw new Error("Category and key are required");
  }
  return masterModel.createMasterData(payload);
};

export const getMasterData = async (category) => {
  if (category) {
    return masterModel.getMasterDataByCategory(category);
  }
  return masterModel.getAllMasterData();
};

export const deleteMasterData = async (id) => {
  await masterModel.deleteMasterData(id);
};
