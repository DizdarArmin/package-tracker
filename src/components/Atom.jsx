import translations from "../lang/translations.json";
import { atom } from "recoil";
export const language = atom({
  key: "language",
  default: translations.en,
  dangerouslyAllowMutability: true,
});
