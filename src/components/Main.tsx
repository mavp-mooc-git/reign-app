import React from "react";
import Card from "./Card";

interface Props {
  all: boolean
}

const Main = (props: Props) => {
  const { all } = props;
  const select = document.getElementById("select-news") as HTMLSelectElement;
  
  return (
    <div>
      {(all) ? select?.classList.add("show") : select?.classList.remove("show")}
      <select name="select-news" id="select-news" className="select-news show">
        <option value="">Select</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Main;
