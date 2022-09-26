import styled from 'styled-components';

export const Span = styled.span`
width: 20px;
height:20px;
border-radius:50%;
background-color: ${p => {
    return p.isOnline ? 'green' : 'red';
  }};
`;

export const Div = styled.div`
display:flex;
align-items:center;
gap:10px;
border: 1px solid grey;
`;