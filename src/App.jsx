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
import MissingRoute from "./components/MissingRoute";

function App() {
  const user = useContext(UserContext);
  const [topic, setTopic] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <Grid
        templateAreas={{
          base: ` "header" "nav" "main"`,
          lg: ` "header" "nav" "main"`,
        }}
        bg="white"
      >
        <GridItem area="header" bg="white">
          <Header user={user} />
        </GridItem>
        <GridItem area="nav" bg="white">
          <NavBar
            onSelectTopic={(topic) => {
              setTopic(topic);
            }}
            setSearchParams={setSearchParams}
          />
        </GridItem>
        <GridItem area="main" bg="white">
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
            <Route path="*" element={<MissingRoute />} />
            {/* <Route path="/users" element={<UsersPage />} /> */}
          </Routes>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
