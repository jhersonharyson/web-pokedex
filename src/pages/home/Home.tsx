import { Loadable, useRecoilState, useRecoilValueLoadable } from "recoil"

import { Form } from "antd"
import { Input } from "antd"
import { Button } from "antd"

import { inputTextAtom } from "@src/store/atoms/input-text-atom"
import { searchAtom } from "@src/store/atoms/search-atom"

import { searchPokemonsInformationSelector } from "@src/store/selectors/search-selector"

import * as S from "./styles"
import { allPokemonsSelector } from "@src/store/selectors/all-pokemons-selector"
import { useDefaultPokemons } from "@src/pages/home/hooks/useDefaultPokemons"


type TPokemons = {
  type: "empty" | "list" | "single";
  result?: any[];
};


export default function Home() {
  const [pokemon, setPokemon] = useRecoilState(inputTextAtom)
  const [search, setSearch] = useRecoilState(searchAtom)
  const [allPokemons] = useDefaultPokemons()

  const pokemons: Loadable<TPokemons> = useRecoilValueLoadable<TPokemons>(searchPokemonsInformationSelector)


  const onChange = (setState: React.Dispatch<React.SetStateAction<string>>) => (event: React.SyntheticEvent) => {
    const element = event.target as HTMLInputElement
    setState(element.value)
  }

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    setSearch(pokemon)
  }

  const notFoundMensage = (pokemons: Loadable<TPokemons>) => {
    const hasList = pokemons?.contents.result?.length > 0
    const isEmpty = pokemons.contents.type == "empty"

    if (!hasList || isEmpty) {
      return (<div>Pokemons not found for query: {search}</div>)
    }
  }

  const getPokemons = (pokemons: Loadable<TPokemons>) => {

    const isNotEmpty = ["single", "list"].includes(pokemons.contents.type)

    if (isNotEmpty) {
      return pokemons.contents.result
    }
  }

  return (
    <div>
      <Form>
        <S.SearchContainer>
          <Input
            name="pokemon"
            type="search"
            placeholder="Search by pokemon name"
            value={pokemon}
            required
            onChange={onChange(setPokemon)}
          />
          <Button type="primary" onClick={onSubmit}>Search</Button>
        </S.SearchContainer>
      </Form>
      {notFoundMensage(pokemons)}
      <Pokemon data={getPokemons(pokemons)} />
      -------------------------
      <Pokemon data={allPokemons} />
    </div>
  )
}

const Pokemon = (props: any) => {
  return (
    <S.AllPokemonsContainer key={props.key}>
      {props?.data?.map((pokemon: any) => <div key={pokemon.name}>
        <h5>{pokemon.name}</h5>
        <S.Image src={pokemon?.sprites.other["official-artwork"]?.front_default} />
      </div>)}
    </S.AllPokemonsContainer>
  )
}
