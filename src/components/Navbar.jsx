import styled from '@emotion/styled';
import Link from "next/link";
import Image from "next/image";

const Nav = styled.nav`
  padding: 0;
  display: flex;
  justify-content: space-around;
  box-shadow: 2px 0 8px rgba(0,0,0,.15);
  background-color: white;
`

const IconWrapper = styled.span({
    display: "flex",
    justifyContent: "start",
    gap: ".5rem",
    alignItems: 'center'
});

const NavLinksWarapper = styled.ul({
    display: "inherit",
    justifyContent: "stretch",
    flexFlow: "nowrap row",
    listStyle: "none"
})

const NavLink = styled.li`
  margin: 0 .5rem;

  a {
    color: #2f3035;
  }
`




const Navbar = () => {
    return (<Nav>
        <Link href="/">
            <a>
                <IconWrapper>
                    <Image src="/img/pokeball.png"
                           width="30"
                           height="30"
                           alt="PokeNext"/>
                    <h3>PokeNext</h3>
                </IconWrapper>
            </a>
        </Link>
        <NavLinksWarapper>
            <NavLink ><Link href="/"><a>Home</a></Link></NavLink>
            <NavLink ><Link href="/sobre/"><a>Sobre</a></Link></NavLink>
        </NavLinksWarapper>
    </Nav>)
}
export default Navbar;