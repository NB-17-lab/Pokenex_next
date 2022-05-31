import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 60%;
  margin: auto;
`

const Layout = ({children})=>{

    return(<Wrapper>
        {children}
    </Wrapper>)
}

export default Layout;
