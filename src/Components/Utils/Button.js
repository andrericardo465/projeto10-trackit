import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => typeof props.active !== 'boolean' || props.active ? "#52B6FF" : "#888"};
  height: 45px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-size: 21px;
  ${(props) => !props.noMargin && "margin-bottom: 10px;"}
  border-radius: 5px;
  border: none;

  cursor: pointer;
`;

export default Button;
