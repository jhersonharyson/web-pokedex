import { httpClient } from "@src/infrastructure/http/http-client";
import { allPokemonsAtom } from "@src/store/atoms/all-pokemons-atom";
import { selector } from "recoil";

export const allPokemonsSelector = selector({
    key: "allsPokemonsSelector",
    get: async ({ get }) => {
        try {
            get(allPokemonsAtom)
           
        catch (error) {
                console.log(error);
            }
        },
    })

