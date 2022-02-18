import styled from 'styled-components'
import {Fragment} from "react";

const Header = styled.div`
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  background: rgb(2, 0, 36);
  background: linear-gradient(166deg, rgba(2, 0, 36, 1) 0%, rgba(7, 64, 97, 1) 0%, rgba(9, 89, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
`

const LeftMenuBar = styled.div`
  color: white;
`

const Logo = styled.div`
  color: white;
`
const RightMenuBar = styled.div``

const Hero = styled.div`
  
`

export default function OtherStyledComponentsPage() {
  return (
    <Fragment>
      <Header>
        <LeftMenuBar><h1>Nobu</h1></LeftMenuBar>
        <Logo>Hallo</Logo>
        <RightMenuBar>Sign In</RightMenuBar>
      </Header>

    </Fragment>
  )
}