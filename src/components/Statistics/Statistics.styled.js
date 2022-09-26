import styled from 'styled-components';


export const Section = styled.section`
  display: block;

`;
export const List = styled.ul`
  display: inline-flex;
  list-style: none;
  margin: 0;
  padding: 10px;
`;
export const ListItem = styled.li`
  padding: 10px;  
  border: 1px solid white;
  color:white;
  background-color: ${props =>
    props.color};
`;
export const Span = styled.span`
  display: block;
`;