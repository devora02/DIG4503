import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {

    let result = {"error": "Could not find type."};

    let pokemon = getPokemon.getPokemonByType(req.query.type);

    if(pokemon !== null) {
        result = pokemon;
    }

    res.json(result);

}