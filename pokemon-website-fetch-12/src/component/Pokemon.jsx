import React, { useEffect, useState } from 'react'
import PokemonCards from './PokemonCards';

function Pokemon() {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState("")





    const API = "https://pokeapi.co/api/v2/pokemon?limit=100";

    const fetchPokemon = async () => {
        try {

            const res = await fetch(API)
            const data = await res.json()
            // the complete object --- {count, next, results[]}
            // console.log(data);

            const detailedPokemonData = data.results.map(async (currPokemon) => {

                // console.log(currPokemon.url);


                // individual  items of result array get
                const resdetails = await fetch(currPokemon.url);
                const datadetails = await resdetails.json();
                // console.log(datadetails);    
                return datadetails;


            });

            // getting  - all 24 the promises all together in 1 array
            console.log(detailedPokemonData);

            // getting the individual object of the array result
            const detailedResponses = await Promise.all(detailedPokemonData)
            
            console.log(detailedResponses);
            setPokemon(detailedResponses)
            setLoading(false)




        } catch (error) {
            console.log(error);
            setLoading(false)
            setError(error)


        }
    }

    useEffect(() => {
        fetchPokemon()

    },[])

    // search
    const searchData = pokemon.filter((pokSearch) =>(
        pokSearch.name.toLowerCase().includes(search.toLowerCase())

    ))





    if(loading) {
        return <h1>Loading...........</h1>
    }

    if(error) {
        return <h1>{error.message}</h1>
    }



    




    return (
        <>
           <section className="container">
        <header>
          <h1> Lets Catch Pokémon</h1>
        </header>

        
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <ul className="cards">
            {
                searchData.map((curPokemon) =>{
                    return(
                        // <li key={curPokemon.id}>
                        //     {curPokemon.height}
                        // </li>
                        <PokemonCards key={curPokemon.id} pokemonData={curPokemon}/>
                    )
                       
                    
                })
            }

           
          </ul>
        </div>
      </section>


        </>
    )
}

export default Pokemon