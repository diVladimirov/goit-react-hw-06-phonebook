import ContactsForm from './Form/ContactsForm';
import ContactsList from './List/ContactsList';
import Filter from './Filter/Filter';

import { Container, FisrtTitle, SecondTitle } from './App.styled';
import GlobalStyle from '../constants/GlobalStyle';

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <FisrtTitle>Phonebook</FisrtTitle>
      <ContactsForm />
      <SecondTitle>Contacts</SecondTitle>
      <Filter />
      <ContactsList />
    </Container>
  );
};

export default App;
