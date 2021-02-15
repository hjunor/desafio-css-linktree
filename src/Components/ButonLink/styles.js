import styled from "styled-components";


export const GetLink = styled.a`
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  border-radius: 16px;
  display: flex;
  align-items:center;
  margin-top: 8px;
  justify-content: center;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "45px")};
  text-decoration: none;
  font-weight: bold;
  font-family: 'Nunito', sans-serif;
    &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
    }
  @media screen and (max-width: 600px) {
    width: ${(props)=>(props.min_width)};
  }
  :hover{
    padding: 3px;
    color:#664492 ;
    background-color:#ffffff ;
    border-style: solid;
  }
`;
