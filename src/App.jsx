import Header from "./components/Header";
import { Grid, GridItem } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ArticlesList from "./components/ArticlesList";
import ArticleDetailPage from "./components/ArticleDetailPage";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";
import ArticleByTopic from "./components/ArticleByTopic";
import { useSearchParams } from "react-router-dom";

function App() {
  const user = useContext(UserContext);
  const [topic, setTopic] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <Header user={user} />
      <Grid
        templateAreas={`"nav nav" " main main"`}
        padding="10px"
        bg="#FFDAB9"
      >
        <GridItem area="nav">
          <NavBar
            onSelectTopic={(topic) => {
              setTopic(topic);
            }}
            setSearchParams={setSearchParams}
          />
        </GridItem>
        <GridItem area="main" bg="">
          <Routes>
            <Route
              path="/"
              element={
                <ArticlesList topic={topic} searchParams={searchParams} />
              }
            />
            <Route
              path="article/:id"
              element={<ArticleDetailPage user={user} />}
            />
            <Route
              path="/topic/:slug"
              element={
                <ArticleByTopic topic={topic} searchParams={searchParams} />
              }
            />
            {/* <Route path="/users" element={<UsersPage />} /> */}
          </Routes>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
