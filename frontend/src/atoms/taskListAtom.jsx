import { atom } from "recoil";

const taskListAtom = atom({
    key: 'taskListAtom', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
  });

export default taskListAtom