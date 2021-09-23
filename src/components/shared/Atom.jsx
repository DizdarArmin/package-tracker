import en from "../../lang/en.json";
import { atom } from "recoil";
export const language = atom({
  key: "language",
  default: en,
  dangerouslyAllowMutability: true,
});
