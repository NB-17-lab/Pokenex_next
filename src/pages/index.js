import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import TituloSeccao from "../components/TituloSeccao";
import styled from "@emotion/styled";
import Card from "../components/Card";

export async function getStaticProps(){
    const endPoint = "https://pokeapi.co/api/v2/pokemon/"

    const response = await fetch(`${endPoint}?limit=${50}&offset=${0}`)
    const result = await response.json()

    result.results.map((pokemon,i) =>pokemon.id = i+1)


    return{
        props: {
            pokemons: result.results
        }
    }
}

const PokeBox = styled.section`
  display: grid;
  flex-direction: column;
  width: 100%;
  flex: 1;
`

const Conteiner = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
  overflow-y: scroll;
  max-height: 550px;
`

const Pagination = styled.section`
  padding: .5rem;
`




export default function Home({pokemons}) {

  return (
    <Layout>
        <TituloSeccao>Pokemons</TituloSeccao>
        <PokeBox>
            <Conteiner>
                {
                    pokemons.map((pokemon)=>(
                        <Card key={pokemon.id} pokemon={pokemon} />
                    ))
                }
            </Conteiner>
            <Pagination> 1/1000</Pagination>
        </PokeBox>
    </Layout>
  )
}
