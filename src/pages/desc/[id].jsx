import Layout from "../../components/Layout";
import TituloSeccao from "../../components/TituloSeccao";
import Image from "next/image";
import styled from "@emotion/styled";


export const getStaticProps = async (context)=>{

    const endPoint = "https://pokeapi.co/api/v2/pokemon/"

    const response = await fetch(`${endPoint}${context.params.id}`)
    const result = await response.json()

    console.log(result)
    return{
        props: { pokemon: result}
    }
}

export const getStaticPaths = async ()=>{
    const endPoint = "https://pokeapi.co/api/v2/pokemon/"

    const response = await fetch(`${endPoint}?limit=${50}&offset=${0}`)
    const result = await response.json()

    const paths = result.results.map((pokemon, i)=> {
        return{
            params: {
               id: (i+1).toString()
            }
        }
    })

    return{
        paths,
        fallback: false
    }
}


const ContentorImage = styled.figure`
  width: fit-content;
  margin: auto;
  margin-top: 1rem;
`

const AreaTipo = styled.section`
  display: flex;
  justify-content: center;
`

const Flag = styled.span`
  padding: .25rem;
  font-size: .8rem;
  color: white;
  background-color: #0070f3;
  border-radius: .25rem;
  margin: 0 .2rem;

  &.water {
    background-color: #0070f3;
  }

  &.ground {
    background-color: #cd742b;
  }
`

const Detalhes = ({pokemon}) => {

    console.log(pokemon)

    return (<Layout>
        <ContentorImage>
            <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                   alt={pokemon.name}
                   width="300" height="300"/>
            <TituloSeccao>{pokemon.name}</TituloSeccao>
            <h4>Numero:{ pokemon.order}º</h4>
            <h5>Altura:{ pokemon.height} cm</h5>
            <h5>Peso:{ pokemon.weight} kg</h5>
        </ContentorImage>
        <AreaTipo>{
            pokemon.types.map((item,i)=>(<Flag className={item.type.name} key={i}>{item.type.name}</Flag>))}
        </AreaTipo>
    </Layout>)
}
export default Detalhes;