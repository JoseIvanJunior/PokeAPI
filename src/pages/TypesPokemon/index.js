import React, { useState, useEffect } from 'react'

import api from '../../services/api'

export default function TypesPokemon() {
    const [pokemon, setPokemon] = useState([]) 

    useEffect(() => {
        api.get('type', {
        }).then(response => {
          setPokemon(response.data.results)
        })
      })

    return (
        <div className="container">
            <h1>Types of Pokemon</h1>

            <ul>
                {pokemon.map(p => (
                    <li key={p.url}>
                        <strong>Type:</strong>
                        <p>{p.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
