
import { httpClient } from "@src/infrastructure/http/http-client";
import { searchAtom } from "@src/store/atoms/search-atom";
import { selector } from "recoil";

type TPokemons = {
    type: "empty" | "list" | "single";
    result?: any[];
};

export const searchPokemonsInformationSelector = selector({
    key: "searchPokemonsInformationSelector",
    get: async ({ get }) => {
        const search = get(searchAtom)

        let pokemons: TPokemons = {
            type: "empty"
        }

        try {
            const response = await httpClient({}).get("http://pokeapi.co/api/v2/pokemon/" + search);


            if (response.status == 304) {
                pokemons.type = "list";
                pokemons = response.data
                return pokemons
            }

            if (!response?.data?.result) {
                pokemons.type = "single";
                pokemons.result = [response?.data]
                return pokemons
            }
        } catch (err) { /* empty */ }

        return pokemons
    },
})