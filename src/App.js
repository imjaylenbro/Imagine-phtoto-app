import React from "react";
import Filter from "./filter/filter.js";
import Gallery from "../src/gallery/Gallery";
import Preview from "./preview/Preview";

function App() {
  return (
    <div className="App">
      <Preview />
      <Gallery />
      <Filter />
    </div>
  );
}
export default App;
