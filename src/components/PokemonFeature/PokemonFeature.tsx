import React, { useState, useMemo } from 'react'
import { useGetPokemonByNameQuery } from '../../services/ProductDetailService/pokemon.service'
import Button from '../Button/Button'
import { Pokemon } from './PokemonName.type'
import { randomPokemon } from '../../helpers/pokemonFeature/pokemonFeature.helper'
import { skipToken } from '@reduxjs/toolkit/dist/query'

/**
 * A Pokemon Feature component
 *  @return {JSX.Element} returns PokemonFeature component
 */

const PokemonFeature: React.FC = () => {
    const [pokemonName, setPokemonName] = useState(Pokemon.names[randomPokemon()])

    // gets a specific pokemon name and memoize the value
    let pokemon = useMemo(() => {
        return pokemonName
    }, [pokemonName])

    // this hook of type useQuery automatically fetches data.
    // gone are the days of having a separate action.ts file with multiple then/catch blocks 😅
    const { isLoading, isError, data, refetch } = useGetPokemonByNameQuery(pokemon ?? skipToken)

    const handleClick = () => {
        setPokemonName(Pokemon.names[randomPokemon()])
        // refetch function simply re-fetches the data in this case on button click
        // no need to dispatch actions that call our endpoints anymore! 😎
        refetch()
    }

    const queryStates = () => {
        if (isLoading) {
            return (
                <>
                    Loading...
                    <span role="img" aria-label="eyes">
                        👀
                    </span>
                </>
            )
        } else if (isError) {
            return (
                <>
                    Oh no, there was an error
                    <span role="img" aria-label="neutral face">
                        😐
                    </span>
                </>
            )
        } else {
            return null
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button label="Get a Random Pokemon 😜" onClick={handleClick}></Button>
            {queryStates()}
            {data && (
                <>
                    <h3>{data.species.name}</h3>
                    <img src={data.sprites.front_shiny} alt={data.species.name} />
                </>
            )}
        </div>
    )
}

export default PokemonFeature
