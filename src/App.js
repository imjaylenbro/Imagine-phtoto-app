import React from "react";
import Filter from "./filter/filter.js";
import Gallery from "../src/gallery/Gallery";
import Preview from "./preview/Preview";

function App() {
  return (
    <div className="App">
      <Gallery />
      <Filter />
      <Preview />
    </div>
  );
}
export default App;
