import styled from "styled-components"
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
`
const Title = styled.div`
    font-family: 'Raleway';
    font-size: 23px;
    color: #126BA5;
    font-weight: 400;

    padding-top: 100px;
    padding-left: 20px;
`
const Message = styled.div`
    padding-left: 20px;
    margin-top: 10px;
    font-family: 'Raleway';
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
        font-size: 50px;
    }
`
const TitleHabito = styled.div`
    font-family: 'Raleway';
    font-size: 23px;
    color: #666666;
    font-weight: 400;
    margin: 5px 0

`
const Subtitle = styled.div`
    font-family: 'Raleway';
    color: #666666;
    font-size: 13px;
    font-weight: 500;

`
const Sequencia = styled.span`
    color: ${props => props.done ? "#E05256" : "#666666"}; 
`;

const Recorde = styled.span`
    color: ${props => props.recorde ? "#E05256" : "#666666"}; 
`


const Check = styled.div`
    width: 69px;
    height: 69px;
    min-width: 69px;
    max-height: 69px;
    border-radius: 50px;
    font-size: 44px;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.feito ? "#E05256" : "#F3BABC"};
    transition: 300ms;
`;

export{
    Container,
    Title,
    Message,
    ContainerHabitoToday,
    TitleHabito,
    Subtitle,
    Sequencia,
    Recorde,
    Check
}