import { useContext } from "react"
import styled from "styled-components"
import UserContext from "../../../Contexts/UserContext"

export default function Topo(){

    const{users} = useContext(UserContext)

    return(
       <Header>
           <Title>TrackIt</Title>
           <Imagem src={users.image}></Imagem>
       </Header>
    )
}


const Header = styled.div`
    background-color: #FF828F;
    width: 100%;
    height: 85px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    z-index: 1;
    
`
const Title = styled.div`
    font-family: 'Raleway';
    font-weight: 500;
    font-style: italic;
    font-size: 50px;
    color: #FFF;
    margin: auto 20px;
    
`
const Imagem = styled.img`
    width: 50px;
    height: 50px;
    margin: auto 20px;
    border-radius: 40px;
`