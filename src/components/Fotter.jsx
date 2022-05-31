import styled from "@emotion/styled";

const Wrapper = styled.footer`
  background-color: #3d3f45;
  padding: .5rem;
  color: #eff1f5;
  border-top: solid thin #bfbfbf;
  text-align: center;
  font-size: .9rem;
`


const Fotter = () => {
    return (<Wrapper>
        <strong>PokeNext</strong>&copy; <small>2022</small>
    </Wrapper>)
}
export default Fotter;