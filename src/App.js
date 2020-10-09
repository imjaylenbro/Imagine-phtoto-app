import React from "react";
import Filter from "./filter/filter.js";
import Gallery from "../src/gallery/Gallery";
import Preview from "./preview/Preview";
// import AppStyles from "./mainStyles/AppStyles";

function App() {
  return (
    <div className="App">
      <Preview />
      <Gallery />
      <Filter />
      {/* <AppStyles /> */}
    </div>
  );
}
export default App;
