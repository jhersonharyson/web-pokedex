import { httpClient } from "@src/infrastructure/http/http-client";
import { useEffect, useState } from "react"

export const useDefaultPokemons = () => {
    const [allPokemons, setAllPokemons] = useState([])
    useEffect(() => {
        const fetch = async () => {
            const response = await httpClient({}).get("http://pokeapi.co/api/v2/pokemon");
            console.log(response.data)
            response.data.results = await Promise.all(response.data.results.map(async (pokemon: { url: any; }) => {
                const { url } = pokemon;
                const response = await httpClient({}).get(url);
                const { name, sprites } = response.data
                return { name, sprites }
            }))
            setAllPokemons(response.data.results);
        }
        fetch()
    }, [])

    return [allPokemons]
}