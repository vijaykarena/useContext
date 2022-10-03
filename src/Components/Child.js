import React from "react";
import { useContext } from "react";
import { AppContext } from "./useContext";

function Child() {
  const userData = useContext(AppContext);
  return (
    <h1>
      Hello my name is {userData.name} and my age is {userData.age}
    </h1>
  );
}

export default Child;
