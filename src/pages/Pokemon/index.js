import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import './styles.css'

import Pagination from '../../Pagination'
import api from '../../services/api'

export default function Pokemon() {
    const [pokemon, setPokemon] = useState([])
    const [currentPageUrl, SetCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPage, setNextPage] = useState()
    const [prevPage, setPrevPage] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        //let cancel
        api.get(currentPageUrl, {
            //cancelToken: new api.CancelToken(c => cancel = c)
        }).then(response => {
            setLoading(false)
            setNextPage(response.data.next)
            setPrevPage(response.data.previous)
            setPokemon(response.data.results)
        })
        
        //return () => cancel()
    }, [currentPageUrl])

    function ToNextPage() {
        SetCurrentPageUrl(nextPage)
    }

    function ToPrevPage() {
        SetCurrentPageUrl(prevPage)
    }

    if (loading) return `Loading...`

    return (
        <div className="container">
            <h1>List of Pokemon</h1>

            <ul>
                {pokemon.map(p => (
                    <li key={p.url}>
                        {/* <img src={p.sprites.front_default} alt=''/> */}
                        
                        <strong>Pokemon:</strong>
                        <p>{p.name}</p>

                        <Link className="link" >
                            <FiArrowRight size={20} />
                        </Link>
                    </li>
                ))}
            </ul>
            <Pagination
                ToNextPage={nextPage ? ToNextPage : null}
                ToPrevPage={prevPage ? ToPrevPage : null}
             />
        </div>
    )
}
