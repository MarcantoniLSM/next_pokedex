'use client'
import Card from '../Card/Card'
import './Screen.css'
import axios from 'axios'
import React, { createElement, useState } from 'react'
import ReactDOM from 'react-dom';

export default function Screen(){
    
    const [searchName, setSearchName] = useState('')
    const [pokemonData, setPokemonData] = useState([]);

    const getPokemon = (string) =>{

        let imgLink
        let pokemonName

        const url = `https://pokeapi.co/api/v2/pokemon/${string}`
        axios.get(url)
            .then(response => {
                const resp = response.data;
                const newPokemonData = {
                    name: resp.name,
                    img: resp.sprites.front_default,
                };

                const area = document.getElementById('content')
                const card = createElement(Card, {"name":pokemonName, "img":imgLink})
                setPokemonData(prevData => [...prevData, newPokemonData]);
            
                 console.log(newPokemonData.type)
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
            });  
    }

    const handleClick = _ =>{
        getPokemon(searchName)
    }

    const handleOnChange = e =>{
        setSearchName(e.target.value)
    }

    return(
        <div className='screen'>
            <img className='image' width={'200px'} src='https://corporate.pokemon.com/hero-pokeball-3430739968171e9fe85357e4739be704.png'/>
            <div className='search'>
                <span>Search: </span>
                    <button onClick={handleClick}>botão</button>
                    <input type='text' onChange={handleOnChange} value={searchName}/>
            </div>
            <div id='content' className='content'>
                {pokemonData.map((data, index) => (
                    <Card key={index} name={data.name} img={data.img} />
                ))}
            </div>
        </div>
    )
}