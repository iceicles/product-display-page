export interface iPokemonSpecie {
    name: string
}

export interface iPokemonAbility {
    name: string
    url: string
}

export interface iPokemonAbilities {
    ability: iPokemonAbility
}

export interface iPokemonForms {
    name: string
    url: string
}

export interface iPokemonMove {
    name: string
    url: string
}

export interface iPokemonMoves {
    move: iPokemonMove
}

export interface iPokemonSprites {
    front_shiny: string
}

export interface iPokemonData {
    id: number
    species: iPokemonSpecie
    baseExperience: number
    height: number
    is_default: number
    abilities: iPokemonAbilities
    forms: iPokemonForms
    moves: iPokemonMoves
    sprites: iPokemonSprites
}
