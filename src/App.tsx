import styled from "styled-components";
import Sidebar from "./templates/Sidebar";
import Cards from "./templates/Cards";
import Data from "./templates/Data";
import Header from "./components/Header";

const Main = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 176px 1fr;
  color: black;
  margin: 0;
  width: 1100px;
  margin: auto;

  .cards_data {
    display: grid;
    grid-template-columns: 205px 1fr;
    /* display: flex; */
    column-gap: 30px;
  }
  .app_side {
    padding: 25px;
    padding-right: 30px;
  }
`;
const App = () => {
  return (
    <Main className="App">
      <Sidebar />
      <div className="app_side">
        <Header />
        <main className="cards_data">
          {/* TODO: add header here */}
          <Cards />
          <Data />
        </main>
      </div>
    </Main>
  );
};

export default App;
