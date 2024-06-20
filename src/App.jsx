import Header from "./components/Header";
import { Grid, GridItem } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ArticlesList from "./components/ArticlesList";
import ArticleDetailPage from "./components/ArticleDetailPage";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";
// import Topics from "./components/Topics";
import ArticleByTopic from "./components/ArticleByTopic";

function App() {
  const user = useContext(UserContext);
  const [topic, setTopic] = useState("");
  console.log(topic);
  return (
    <>
      <Header user={user} />
      <Grid templateAreas={`"nav nav" " main main"`} padding="10px">
        <GridItem area="nav">
          <NavBar
            onSelectTopic={(topic) => {
              setTopic(topic);
            }}
          />
        </GridItem>
        <GridItem area="main" bg="">
          <Routes>
            <Route path="/" element={<ArticlesList topic={topic} />} />
            <Route
              path="article/:id"
              element={<ArticleDetailPage user={user} />}
            />
            <Route
              path="/topic/:slug"
              element={<ArticleByTopic topic={topic} />}
            />
            {/* <Route path="/users" element={<UsersPage />} /> */}
          </Routes>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
