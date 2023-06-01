import { inputTextAtom } from "@src/store/atoms/input-text-atom";
import { selector } from "recoil";

export const inputTextSelector = selector({
    key: "inputTextSelector",
    get: ({ get }) => {
        return get(inputTextAtom)
    },
})

