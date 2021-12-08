// import Header from "./Components/page2/header";
// import Footer from "./Components/page2/footer";
// import Search from "./Components/page2/search";
// import Sql_container from "./Components/page2/sql";
// import Output_container from "./Components/page2/output";
import Page2 from "./Page2";
import Landing from "./Components/landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { useState } from "react";

const App = () => {
  // const [result, setResult] = useState();
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/Page2">
            <Page2 />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
