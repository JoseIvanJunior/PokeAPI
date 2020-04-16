import React from 'react'

import './styles.css'

import logoImg from '../../assets/logo.png'
import pokemonImg from '../../assets/pokemon.png'

export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} style={{ width: 500 }} alt="Pokemon" />

                <form>
                    <h1>Faça seu Login</h1>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        //value={this.state.email}
                        //onChange={this.handleChange}
                        //required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        //value={this.state.password}
                        //onChange={this.handleChange}
                        //required
                    />
                    <button className="button" type="submit">Login</button>
                </form>

            </section>
            <img src={pokemonImg} style={{ width: 364 }} alt="Pokemon" />

        </div>
    )
}
