import React from "react";
import { Circle, Line } from "./styled";

const Index = ({ Navbar = false }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Circle primary={Navbar ? true : false} />
      <Line primary={Navbar ? true : false} />
      {/* <p style={{ textAlign: "center" }}>Main Stream</p> */}
    </div>
  );
};

export default Index;
