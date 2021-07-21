import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Rps } from "../pages/Rps";
import { Home } from "../pages/Home";
import { Error404 } from "../pages/Error404";
import { Pokerama } from "../pages/Pokerama";
import { Layout } from "../components/Layout";
import { TicTacToe } from "../pages/TicTacToe";
import { LoadingScreen } from "../components/LoadingScreen";
import { GlobalStyles } from "../styles/GlobalStyles";

function App() {
  return (
    <HelmetProvider context={{}}>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Suspense fallback={LoadingScreen}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/checkers" component={Home} />
              <Route exact path="/pokerama" component={Pokerama} />
              <Route exact path="/rock-paper-scissors" component={Rps} />
              <Route exact path="/tic-tac-toe" component={TicTacToe} />
              <Route path="*" component={Error404} />
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
