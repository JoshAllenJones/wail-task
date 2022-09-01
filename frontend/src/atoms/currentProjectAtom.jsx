import { atom } from "recoil";

const currentProjectAtom = atom({
    key: 'currentProjectAtom', // unique ID (with respect to other atoms/selectors)
    default: 1, // default value (aka initial value)
  });

export default currentProjectAtom