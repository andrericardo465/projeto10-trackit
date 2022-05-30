import { Link } from "react-router-dom"
import { useContext } from "react";
import UserContext from "../../../Contexts/UserContext";
import styled from "styled-components"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Menu(){
    const {progresso, setProgresso, numeroDeHabitos, numeroDeHabitosConcluidos } = useContext(UserContext)
    setProgresso(Math.round((numeroDeHabitosConcluidos/numeroDeHabitos)*100));
    

    return(
       <Header>
           <Option to="/habitos">Hábitos</Option>
           <Link to={'/hoje'}>
            <div style={{ width: 250, height: 250 }}>
                <CircularProgressbar  
                minValue={0}
                maxValue={100}
                value={progresso}
                text="Hoje"
                background={true}
                styles={buildStyles({
                    textsize: "18px",
                    textColor: "#fff",
                    backgroundColor: "#FDA8A0",
                    pathColor: "#FFCAA6",
                    trailColor: "#FFF",
                    })}
                    />
            </div>
            </Link>
           <Option to='/historico'>Histórico</Option>
       </Header>
    )
}

const Header = styled.div`
    width: 100%;
    height: 120px;
    background-color: #FF828F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
`
const Option = styled(Link)`
    font-size: 30px;
    color: #fff;
    margin: auto 80px;
`
