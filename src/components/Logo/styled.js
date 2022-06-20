import styled from "styled-components";

export const Circle = styled.div`
  height: ${(props) => (props.primary ? "40" : "50")}px;
  width: ${(props) => (props.primary ? "40" : "50")}px;
  border: 2px solid ${(props) => (props.primary ? "black" : "white")};
  border-radius: 30px;
  align-self: center;
  transition: 1s ease-in-out;
`;
export const Line = styled.div`
  width: ${(props) => (props.primary ? "40" : "50")}px;
  justify-content: center;
  height: 2px;
  background-color: ${(props) => (props.primary ? "black" : "white")};
  margin: 0px 10px;
  align-self: center;
  transition: 1s ease-in-out;
`;
