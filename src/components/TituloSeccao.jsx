import styled from "@emotion/styled";

const H1 = styled.h1`
  text-align: center;
  color: red;
  margin-top: 2rem;
  margin-bottom: 3rem;
`


const TituloSeccao = ({children})=>{

    return(<H1>
        {children}
    </H1>)
}

export default TituloSeccao;
