import React from 'react'
import pokemon from '../models/pokemon'

export default function Show({place}) { 
  return (
    <div>
        <h1>Gotta Catch Em All</h1>
        <br /><br />
        <h2>{pokemon[place].name}</h2>
        <br /><br />
        <img src={pokemon[place].img + ".jpg"}/>
        <br /><br />
        <a href={`/pokemon`}>Go Back</a> 
    </div>
  )
}

