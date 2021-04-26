import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Colors from "./components/Colors";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "stuff",
    content: "lots of stuff",
  },
  {
    title: "more stuff",
    content: "lots more stuff",
  },
];

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion theItems={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/drop">
        <Colors />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
