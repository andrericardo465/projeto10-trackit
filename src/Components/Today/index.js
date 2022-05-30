import axios from "axios"
import { useEffect } from "react"
import { useState, useContext } from "react"
import UserContext from "../../Contexts/UserContext"

import dayjs from "dayjs"
import 'dayjs/locale/pt-br'

import {Container, Message, Title} from "./style"
import Menu from "../Utils/Menu"
import Topo from "../Utils/Topo"
import TodayHabits from "../TodayHabits"


export default function Today(){
    const {usuario, setnumeroDeHabitosConcluidos, setNumeroDeHabitos} = useContext(UserContext)
    const {progresso} = useContext(UserContext)
    const[habito, setHabito] = useState([])
    
    


    function getTodayHabit(){

        const config = {

            headers: {
                "Authorization": `Bearer ${usuario.token}`
            }
        }

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        promise.then(response => {
            setHabito(response.data);
            setnumeroDeHabitosConcluidos(response.data.filter(habito => habito.done).length);
            setNumeroDeHabitos(response.data.length)
            }
            )
            
    }
    useEffect((getTodayHabit), [])

    return(
        <>
            <Container>
                <Topo></Topo>
                <Title>{dayjs().locale('pt-br').format('dddd, DD/MM')}</Title>
                <Message>{progresso === 0 ? "Nenhum hábito completed ainda!" : progresso + "% dos hábitos concluídos" }</Message>
                {habito.map((habit)=>
                    <TodayHabits habit = {habit} key={habit.id}>
                    </TodayHabits>
                )
                }
                <Menu></Menu>
            </Container>
        </>
        
    )
}




