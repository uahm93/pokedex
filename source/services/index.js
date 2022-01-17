/**
 *  Espacio para consumir APIS 
**/

import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

/**
 * Funcion para obtener lista pokemones
 * 
 * @return Json Lista de pokemones
 * 
 */
export const getListOfPokemon = async () => {

    try {

        const { data } = await axios.get(`${BASE_URL}/pokemon/`);
    
        return data.results;    

    } catch (error) {

        console.log(error)
        return [];

    }
    
}

/**
 * Funcion para obtener detalles de un pokemon
 * 
 * @param {String} endpoint 
 * 
 * @return Json Lista de pokemones
 */
export const detailsPokemon = async endpoint => {

    try {

        const { data } = await axios.get(endpoint);

        return data;
        
    } catch (error) {

        console.log(error);
        return [];
    }
    
}