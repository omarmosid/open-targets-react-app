import { capitalize } from "lodash";

export const removeUnderscore = (str: string) => {
  return str.replace("_", " ");
};

export const formatText = (str: string) => {
  return capitalize(removeUnderscore(str));
};
