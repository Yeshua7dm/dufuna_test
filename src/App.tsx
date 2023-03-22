import styled from "styled-components";
import Sidebar from "./templates/Sidebar";
import Cards from "./templates/Cards";
import Data from "./templates/Data";

const Main = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 176px 1fr;
  color: black;
  margin: 0;
  width: 1100px;
  margin: auto;

  .cards_data {
    padding: 25px;
    padding-right: 30px;
    display: grid;
    grid-template-columns: 205px 1fr;
    /* display: flex; */
    column-gap: 30px;
  }
`;
const App = () => {
  return (
    <Main className="App">
      <Sidebar />
      <main className="cards_data">
        {/* TODO: add header here */}
        <Cards />
        <Data />
      </main>
    </Main>
  );
};

export default App;
