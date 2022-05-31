
import {useState} from 'react';
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import {css} from "@emotion/react";
import {useRouter} from "next/router";


const BaseCard = styled.figure`
  min-height: 250px;
  background-color: #ffffff;
  color: #ff0000;
  border-radius: .5rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, .1);
  overflow: hidden;
  position: relative;
`
const Caption = styled.figcaption`
  background-color: #f6f7f8;
  width: 100%;
  padding: .5rem;
`

const Badge = styled.span`
  padding: .25rem;
  border-radius: 50%;
  color: #fafaff;
  background-color: #ff0000;
  margin: auto;
  font-size: .75rem;
  position: absolute;
  right: 1rem;
`

const Ancora = styled.span`
  cursor: pointer;
  font-size: .75rem;
  color: #7d8184;
  margin: auto;
`




const Card = ({pokemon})=>{
    const [state, setState] = useState('')
    const router = useRouter();
    
    const handleClick = () => {
      router.push(`/desc/${pokemon.id}`)
    }

    return(<BaseCard>
        <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
               alt={pokemon.name}
               width="180" height="180"/>
        <Badge>#{pokemon.id}</Badge>
        <Caption>
            <h3 style={{
                textAlign: "center",
                margin: ".25rem auto"
            }}>{pokemon.name}</h3>
            <Ancora onClick={handleClick}>Ver mais</Ancora>
        </Caption>
    </BaseCard>)
}

export default Card;