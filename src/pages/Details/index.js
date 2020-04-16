import React, { useState, useEffect } from 'react'

import api from '../../services/api'

export default function Details() {
    const [pokemon, setPokemon] = useState([]) 

    useEffect(() => {
        api.get('type', {
        }).then(response => {
          setPokemon(response.data)
        })
      })

    return (
        <div className="container">
            <h1>Description of Pokemon</h1>

            <ul>
                {pokemon.map(p => (
                    
                ))}
            </ul>
        </div>
    )
}
