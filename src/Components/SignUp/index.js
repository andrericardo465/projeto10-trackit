import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import {ContanierRegister, StyledLink} from './style'
import logo from '../../assets/img/circular-arrow.png'
import Loading from "../Utils/Loading"
import Input from "../Utils/Input"
import Button from "../Utils/Button"


export default function SignUpPage(){

    const[email, setEmail]= useState('')
    const[password, setPassword] = useState('')
    const[name, setName]= useState('')
    const[image, setImage]= useState('')
    const[button, setButton] = useState(true)
    const navigate = useNavigate();

    function SingUp(e){
        e.preventDefault();

        const user = {
            'email': email,
            'name': name,
            'image': image,
            'password': password

        }

       const promisse =  axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', user)
       promisse.then(() => navigate("/")
       )
       promisse.catch(error => alert(error.response.data.message))
    }


    return(
        <>
        <ContanierRegister>
        <img src={logo} alt="logo"/>
            <form onSubmit={SingUp}>
            <Input type='email' placeholder="Email" onChange={(e)=> setEmail(e.target.value)} value={email} required/>
                <Input type='password' placeholder="Senha" onChange={(e)=> setPassword(e.target.value)} value={password}/>
                <Input type='text' placeholder="Nome" onChange={(e)=> setName(e.target.value)} value={name}/>
                <Input type='text' placeholder="Foto(URL)" onChange={(e)=> setImage(e.target.value)} value={image}/>
                {button ? 
                    <Button type="submit" onClick={()=>setButton(false)}>Cadastrar</Button> 
                    :
                    <Button Loading={true}><Loading/></Button>

                }
            </form>
            <StyledLink to="/"> Já tem uma conta? Faça login!</StyledLink>
            
        </ContanierRegister>

        </>
        
    );
}