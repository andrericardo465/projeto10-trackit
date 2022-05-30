import styled from "styled-components"

const Title = styled.div`
    font-size: 35px;
    color: #FF7497;
    margin: 50px 0 0 30px;
`
const Message = styled.div`
    margin: 25px 0 0 0;
    font-size: 18px;
    color: #666666;
`
const ContainerTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Add = styled.div`
    background-color: #E56B6F;
    width: 50px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 27px;
    color: #fff;
    margin: 100px 20px;
    border-radius: 100%;

`
const Titlehabits = styled.div`
    font-family: 'Raleway';
    font-weight: 300;
    font-size: 30px;
    color: #555358;
    align-text: left;
    margin: 5px 100px 2px 0;

`
const Habits = styled.div`
    width: 70%;
    heigth: fit-content;
    margin-right: 10px;
    display: flex;
    flex-direction: column;

    .headerBox{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    ion-icon{
        color: #ED979A;
        font-size: 20px;
    }

`

const CriarHabito = styled.div`
input{
    border: 1px solid #E56B6F;
  }
  
  input::placeholder{
    color: #ED979A;
  }
`


export{
    Title,
    Message,
    ContainerTitle,
    Add,
    Titlehabits,
    Habits,
    CriarHabito
}