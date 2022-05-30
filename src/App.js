import {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from "./Components/LoginPage"
import SignUpPage from "./Components/SignUp"
import Today from "./Components/Today"
import HistoryPage from "./Components/HistoryPage";
import HabitsPage from "./Components/HabitsPage"

import UserContext from "./Contexts/UserContext";


export default function App(){
    const[usuario, setUsuario]=useState()
    const[numeroDeHabitos, setNumeroDeHabitos] = useState(0);
    const[numeroDeHabitosConcluidos, setnumeroDeHabitosConcluidos] = useState(0);
    const[progresso, setProgresso] = useState(0)
    
    
    return(
        <UserContext.Provider value={{
            usuario, setUsuario, 
            numeroDeHabitos, setNumeroDeHabitos, 
            numeroDeHabitosConcluidos, setnumeroDeHabitosConcluidos,
            progresso, setProgresso,
            }}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<SignUpPage />}  />
                <Route path="/hoje" element={<Today />} />
                <Route path="/historico" element={<HistoryPage />}/>
                <Route path="/habitos" element={<HabitsPage />}/>
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>
    )
}