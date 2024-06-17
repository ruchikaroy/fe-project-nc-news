import Header from "./components/Header";
import { Grid, GridItem } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ArticlesList from "./components/ArticlesList";
function App() {
  return (
    <>
      <Header />
      <Grid templateAreas={`"nav nav" " main main"`}>
        <GridItem area="nav" bg="coral">
          <NavBar />
        </GridItem>
        <GridItem area="main">
          <Routes>
            <Route path="/" element={<ArticlesList />} />
            {/* <Route path="/users" element={<UsersPage />} />
            <Route path="/topics" element={<TopicsPage />} /> */}
          </Routes>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
