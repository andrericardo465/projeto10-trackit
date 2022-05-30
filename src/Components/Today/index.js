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
    const {users, setCompletedHabits, setNumberOfHabits} = useContext(UserContext)
    const {progress} = useContext(UserContext)
    const[habits, setHabits] = useState([])

    function getTodayHabit(){

        const config = {

            headers: {
                "Authorization": `Bearer ${users.token}`
            }
        }

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        promise.then(response => {
            setHabits(response.data);
            setCompletedHabits(response.data.filter(habits => habits.done).length);
            setNumberOfHabits(response.data.length)
            }
            )
            
    }
    useEffect((getTodayHabit))

    return(
        <>
            <Container>
                <Topo></Topo>
                <Title>{dayjs().locale('pt-br').format('dddd, DD/MM')}</Title>
                <Message>{progress === 0 ? "Nenhum hábito completed ainda!" : progress + "% dos hábitos concluídos" }</Message>
                {habits.map((habit)=>
                    <TodayHabits habit = {habit} key={habit.id}>
                    </TodayHabits>
                )
                }
                <Menu max-width={300}></Menu>
            </Container>
        </>
        
    )
}




