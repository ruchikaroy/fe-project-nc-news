import Header from "./components/Header";
import { Grid, GridItem } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ArticlesList from "./components/ArticlesList";
import ArticleDetailPage from "./components/ArticleDetailPage";
import CommentsPage from "./components/CommentsPage";

function App() {
  return (
    <>
      <Header />
      <Grid templateAreas={`"nav nav" " main main"`} padding="10px">
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="main" bg="">
          <Routes>
            <Route path="/" element={<ArticlesList />} />
            <Route path="article/:id" element={<ArticleDetailPage />} />

            {/* <Route path="/users" element={<UsersPage />} />
            <Route path="/topics" element={<TopicsPage />} /> */}
          </Routes>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
