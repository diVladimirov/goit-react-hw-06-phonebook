import styled from 'styled-components';

export const ContactListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const ContactsListButton = styled.button`
  background-color: #008cba;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 10px;
  transition: all 400ms linear;
  :hover {
    background-color: white;
    color: #008cba;
  }
`;
