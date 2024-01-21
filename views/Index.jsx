import React from 'react'
import pokemon from '../models/pokemon'

export default function Index () { 
  return (
    <div>
        <h1>See all pokemon</h1>
        <ul>
            {pokemon.map((pokemon, index) => (
                <li key={index}>
                    <a href={`/pokemon/${index}`}>
                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                    </a>
                </li>  
              
            ))}
        </ul>
    </div>
  )
}

