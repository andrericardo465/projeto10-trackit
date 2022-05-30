import styled from "styled-components"


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
`
const Title = styled.div`
    font-size: 25px;
    color: #E05256;
    font-weight: 400;

    padding-top: 100px;
    padding-left: 20px;
`
const Message = styled.div`
    padding-left: 20px;
    margin-top: 10px;
    font-family: 'Raleway'
    font-size: 18px;
    font-weight: 400;
    color: #BABABA;


`
const ContainerHabitoToday = styled.div`
    width: 100%;
    border-radius: 5px;
    margin: 20px 0px;
    padding: 18px;
    box-sizing: border-box;
    background-color: #FFF;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;
    ion-icon {
        font-size: 70px;
    }
`
const TitleHabito = styled.div`
    font-size: 23px;
    color: #000000;
    font-weight: 400;

`
export{
    Container,
    Title,
    Message,
    ContainerHabitoToday,
    TitleHabito
}