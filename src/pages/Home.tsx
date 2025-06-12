import React from 'react'
import { useGetPokemonByNameQuery } from '../app/pokemon'

const Home = () => {

  const {data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  return (
    <div>
      { error ? (
        <>There was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>Data Fetched!</h3>
        </>
      ) : null }
    </div>
  )
}

export default Home