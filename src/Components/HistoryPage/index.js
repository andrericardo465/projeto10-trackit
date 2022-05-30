import Menu from "../Utils/Menu"
import Topo from "../Utils/Topo"
import {Title, Message, Container} from "./style"

export default function HistoryPage(){
    
    return(
        <Container>
            <Topo></Topo>
            <Title>Histórico</Title>
            <Message>Em breve você poderá ver o histórico dos seus hábitos aqui!</Message>
            <Menu> 
                {/*
            <Calendar   onChange={onChange}
                            value={value}
                            locale='pt-br'
                            calendarType='US'
                            />
                            */}
            </Menu>
        </Container>
    )
}