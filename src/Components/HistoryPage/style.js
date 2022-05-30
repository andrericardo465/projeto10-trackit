import styled from "styled-components"

const Title = styled.div`
    font-size: 23px;
    color: #000;
    font-weight: 400;

    padding-top: 100px;
    padding-left: 20px;
`
const Message = styled.div`
    padding-left: 20px;
    margin-top: 25px;
    font-size: 18px;
    font-weight: 400;
    color: #666666;


`
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
`
export{
    Title,
    Message,
    Container
}