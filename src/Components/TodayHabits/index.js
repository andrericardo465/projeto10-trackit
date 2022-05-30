import axios from "axios"
import { useState, useContext } from "react"
import UserContext from "../../Contexts/UserContext"

import {ContainerHabitoToday, TitleHabito, Subtitle,Sequencia, Recorde,Check} from "./style"


export default function TodayHabits({habit}){
    const[completed, setCompleted]=useState(habit.done)
    const {users, numberOfHabits, completedHabits, setCompletedHabits, setProgress,} = useContext(UserContext)


    function checkHabits(){
        
        const config = {

            headers: {
                "Authorization": `Bearer ${users.token}`
            }
        }
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`, " ", config)
        promise.then(()=>{
            setCompleted(!completed);
            setCompletedHabits(completedHabits + 1);
                    habit.currentSequence++;
                    habit.highestSequence++;
        }
        )
        promise.catch(erro => alert(erro))
    }

    function habitoUncheck(){
        
        const config = {

            headers: {
                "Authorization": `Bearer ${users.token}`
            }
        }
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`, "" ,config)
        promise.then(()=>{
            setCompleted(!completed);
            setCompletedHabits(completedHabits - 1);
            habit.currentSequence--;
            habit.highestSequence--;

        })
        promise.catch(erro => alert(erro))

        setProgress(Math.round((completedHabits / numberOfHabits) * 100));
}
    return(

        <ContainerHabitoToday>
                        <div>
                            <TitleHabito>{habit.name}</TitleHabito>
                            <Subtitle>Sequencia atual:
                                {habit.currentSequence === 1 ?
                                    <Sequencia done={completed}> {habit.currentSequence} dia</Sequencia>
                                    :
                                    <Sequencia done={completed}> {habit.currentSequence} dias</Sequencia>
                                } 
                            </Subtitle>
                            <Subtitle>Seu recorde: 
                                {habit.highestSequence === 1 ?
                                    <Recorde recorde={habit.highestSequence === habit.currentSequence && habit.currentSequence === 1}> {habit.highestSequence} dia</Recorde>
                                    :
                                    <Recorde recorde={habit.highestSequence === habit.currentSequence && habit.currentSequence > 0}> {habit.highestSequence} dias</Recorde>
                                }
                            </Subtitle>
                        </div>
                        <Check  onClick={completed ? ()=>habitoUncheck() : ()=>checkHabits()} feito={completed}>
                            <ion-icon name="checkmark-outline" ></ion-icon>
                        </Check>
                    </ContainerHabitoToday>                            
    )
}