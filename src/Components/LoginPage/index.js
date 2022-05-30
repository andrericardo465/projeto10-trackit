import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../../Contexts/UserContext";


import logo from "../../assets/img/circular-arrow.png";
import {ContanierForm, StyledLink} from './style';
import Input from "../Utils/Input";
import Button from "../Utils/Button";
import Loading from "../Utils/Loading";



export default function LoginPage(){
    const {setUsers} = useContext(UserContext)
    const[email, setEmail]= useState('')
    const[password, setPassword] = useState('')
    const[button, setButton] = useState(true)
    const navigate = useNavigate();

    function SingUp(e){
        e.preventDefault();

        const user = {
            'email': email,
            'password': password
        }

        const promise =  axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', user);
                promise.then( response=>{
                    setUsers(response.data);
                    navigate('/hoje')
                } 
                );
                promise.catch(()=> {

                    alert('Usuário e/ou password Inválidos');
                    setButton(true);
                    setEmail("");
                    setPassword("")
                }
                );
    }

    return(
        <>
            <ContanierForm>
                <img className="logo" src={logo} alt="logo"/>
                    <form onSubmit={SingUp}>
                        <Input 
                        type='email' 
                        placeholder="Email" 
                        onChange={(e)=> setEmail(e.target.value)} 
                        value={email} 
                        required/>
                        <Input 
                        type='password' 
                        placeholder="password" 
                        onChange={(e)=> setPassword(e.target.value)} 
                        value={password}/>
                        {button ? 
                        <Button type="submit" onClick={()=>setButton(false)}>Entrar</Button>
                        : 
                        <Button Loading={true}><Loading/></Button>
                        }
                    </form>
                    <StyledLink to="/cadastro"> Não tem uma conta? cadastre-se!</StyledLink>
            </ContanierForm>
        </>
        
    );
}


