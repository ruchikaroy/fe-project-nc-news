import Header from "./components/Header";
import { Grid, GridItem } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ArticlesList from "./components/ArticlesList";
import ArticleDetailPage from "./components/ArticleDetailPage";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

function App() {
  const user = useContext(UserContext);
  return (
    <>
      <Header user={user} />
      <Grid templateAreas={`"nav nav" " main main"`} padding="10px">
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="main" bg="">
          <Routes>
            <Route path="/" element={<ArticlesList />} />
            <Route
              path="article/:id"
              element={<ArticleDetailPage user={user} />}
            />

            {/* <Route path="/users" element={<UsersPage />} />
            <Route path="/topics" element={<TopicsPage />} /> */}
          </Routes>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
