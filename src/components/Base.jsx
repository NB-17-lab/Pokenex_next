import Navbar from "./Navbar";
import Fotter from "./Fotter";
import Head from "next/head";
import styled from "@emotion/styled";


const BaseConteiner = styled.div`
  background-color: #f3f5f6;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: hidden;
`

const Feeder = styled.section`
  flex: 1;
`


const Base = ({children}) => {
    return (<BaseConteiner>
        <Head>
            <title>Pokenext</title>
            <link rel="shortcut icon" href="/public/img/favicon.ico"/>
        </Head>
        <Navbar/>
        <Feeder>{children}</Feeder>
        <Fotter/>
    </BaseConteiner>)
}
export default Base;