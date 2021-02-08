import { OPEN, CURRENT_ID } from "../constants/actionTypes";

export const open = () => {
  return {
    type: OPEN,
  };
};

export const currentId = () => {
  return {
    type: CURRENT_ID,
  };
};
