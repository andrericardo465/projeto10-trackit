import axios from "axios"
import {useState, useContext, useEffect} from "react"
import UserContext from "../../Contexts/UserContext"

import styled from "styled-components"
import {Title, Message, ContainerTitle, Add, Titlehabits, Habits, CriarHabito} from "./style"
import Menu from "../Utils/Menu"
import Topo from "../Utils/Topo"
import Input from "../Utils/Input";
import Loading from "../Utils/Loading";



export default function HabitsPage(){
    const[habits, setHabits] = useState([])
    const[addHabits, setAddHabits] = useState(false);
    const[habitsName, setHabitsName]=useState()
    const {numberOfHabits, setNumberOfHabits} = useContext(UserContext)
    const {users} = useContext(UserContext)

    const [day0, setDay0] = useState(false);
    const [day1, setDay1] = useState(false);
    const [day2, setDay2] = useState(false);
    const [day3, setDay3] = useState(false);
    const [day4, setDay4] = useState(false);
    const [day5, setDay5] = useState(false);
    const [day6, setDay6] = useState(false);
    const [button, setButton] = useState(true);
    const selectedDays = [];

    const weekdays = [
        {
            id: 0,
            name: "D",
            day: day0,
            setDay: setDay0
        },
        {
            id: 1,
            name: "S",
            day: day1,
            setDay: setDay1
        },
        {
            id: 2,
            name: "T",
            day: day2,
            setDay: setDay2
        },
        {
            id: 3,
            name: "Q",
            day: day3,
            setDay: setDay3
        },
        {
            id: 4,
            name: "Q",
            day: day4,
            setDay: setDay4
        },
        {
            id: 5,
            name: "S",
            day: day5,
            setDay: setDay5
        },
        {
            id: 6,
            name: "S",
            day: day6,
            setDay: setDay6
        }
    ]

    weekdays.map((weekday)=>weekday.day ? selectedDays.push(weekday.id) : "")


    function postHabit(){
        setButton(false);
        const body = {
            name: habitsName,
            days: selectedDays
        }
        const config = {
            headers: {
                "Authorization": `Bearer ${users.token}`
            }
        }

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
        promise.then(()=>{setButton(true);
            setAddHabits(false);
            setHabitsName("");
            setNumberOfHabits(numberOfHabits + 1);
            getHabits()
            

        })
        promise.catch(()=>{
            alert('erro');
            setHabitsName("");
            setButton(true)


        })
    }

    function deleteHabits(id){
        if(!window.confirm("Deseja deletar a tarefa?")) return;
        const config = {
            headers: {
                "Authorization": `Bearer ${users.token}`
            }
        };
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
            promise.then(() => {
                setNumberOfHabits(numberOfHabits - 1);
                getHabits();
            })
            promise.catch(() => alert("Erro"));
    }

    function getHabits(){
            const config = {
                headers: {
                    "Authorization": `Bearer ${users.token}`
                }
            }

            const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
            promise.then((response)=>
            setHabits(response.data)
            );
            promise.catch(()=>alert("Erro"));
    }

    useEffect((getHabits))

    
    return(
        <>
            <Topo></Topo>
                <ContainerTitle>
                    <Title>Meus Hábitos</Title>
                    <Add onClick={()=> setAddHabits(true) }>+</Add>
                </ContainerTitle>
                    {addHabits ?
                    
                        <CriarHabito>
                            <Input placeholder="Nome do hábito" value={habitsName} onChange={(e)=>setHabitsName(e.target.value)} disabled={!button} ></Input>
                            <Weekdays>
                                {weekdays.map((weekday, i)=>
                                button ?
                                <Weekday isSelected={weekday.day} onClick={()=>weekday.setDay(!weekday.day)} key={i} >
                                    {weekday.name}
                                </Weekday>
                                :
                                <Weekday isSelected={weekday.day} key={i} > 
                                    {weekday.name}
                                </Weekday>
                                )}
                            </Weekdays>

                            <ContainerButtons>
                                <StyledButton fontSize={15} width={85} height={35} theme="#fff" onClick={()=>setAddHabits(false)}>
                                        Cancelar
                                </StyledButton>
                                {button ?
                                    <StyledButton fontSize={16} width={85} height={35} onClick={postHabit}>
                                        Salvar
                                    </StyledButton>
                                    :
                                    <StyledButton width={84} eight={35}>
                                    <Loading/>
                                    </StyledButton>
                                }



                            </ContainerButtons>
                        </CriarHabito>

                    :
                    ""
                    }
                    {habits.length > 0 ?
                        habits.map((habits, i)=> 
                        <Habits>
                            <div className="headerBox">
                                <Titlehabits>{habits.name}</Titlehabits>
                                <ion-icon className="lixo" name="trash-outline" onClick={()=>deleteHabits(habits.id)}></ion-icon>
                            </div>
                            <Weekdays>
                                {weekdays.map((weekday, i)=>
                                    <Weekday
                                    isSelected={habits.days.includes(weekday.id)}
                                    key={i}
                                    > {weekday.name}
                                    </Weekday>
                                )}
                            </Weekdays>
                        </Habits>
                        )
                        :
                        <Message>Você não tem nenhum hábito cadastrado ainda!</Message>
                }  
            <Menu></Menu>
        </>

    )
}

const Weekday = styled.div`
    height: 28px;
    width: 28px;
    border-radius: 10px;
    border: 1px solid ${"#ED979A"};
    background-color: ${props => props.isSelected ? "#E56B6F" : "#FFF"};
    color: ${props => props.isSelected ? "#FFF" : "#ED979A"};
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Weekdays = styled.div`
    height: 35px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin: 10px 0;
`;

const ContainerButtons = styled.div`
    display: flex;
    margin: 10px 50px;
    gap: 10px;
`;

const StyledButton = styled.button`
    background-color: ${props => props.theme === "#fff" ? "#ED979A" : "#E56B6F"};
    width: ${props => props.width ? `${props.width}px` : "100%"};
    height: ${props => props.height ? `${props.height}px` : "50px"};
    border: none;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.fontSize ? `${props.fontSize}px` : "20rem"};
    color: ${props => props.theme === "#FFF" ? "FFF" : "#FFF"};
    margin: 10px;
    opacity: ${props => props.loading ? 0.5 : 1.0};
`;



