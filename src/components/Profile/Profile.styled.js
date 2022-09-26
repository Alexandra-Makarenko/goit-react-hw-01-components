import styled from 'styled-components';

export const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 8px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;

export const UserName = styled.h2`
  margin-top: 0;
`;

export const InfoContainer = styled.div`
  display: block;
  text-align: center;
  gap: 16px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 4px;
`;

export const InfoList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  padding: 8px;
`;

export const Label = styled.p`
  margin: 0;
`;