import Layout from "../components/Layout";
import TituloSeccao from "../components/TituloSeccao";
import Image from "next/image";
import styled from "@emotion/styled";

const ImgWrapper = styled.section`
  margin: auto;
  max-width: fit-content;
  margin-top: 5rem;
`

const Sobre = () => {
    return (<Layout>
        <TituloSeccao>Sobre Pokenext</TituloSeccao>
        <p>É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao olhar para seu layout. O ponto de usar Lorem Ipsum é que ele tem uma distribuição mais ou menos normal de letras, ao contrário de usar 'Conteúdo aqui.</p>
        <ImgWrapper>
            <Image
                src="/img/charizard.png"
                width="250px"
                height="250px"
            />
        </ImgWrapper>
    </Layout>)
}
export default Sobre;