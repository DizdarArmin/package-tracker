// Atom is not a react component, thus is a .js file

import en from "../../lang/en.json";
import ba from "../../lang/ba.json";
import { atom } from "recoil";
export const language = atom({
  key: "language",
  default: en,
  dangerouslyAllowMutability: true,
});
