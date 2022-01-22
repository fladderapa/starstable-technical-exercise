import React from "react";
import "./App.css";
import { CreateTodoForm } from "./components/create-todo-form";
import { Titlebar } from "./components/titlebar";
import { TodoList } from "./components/todo-list";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 8rem auto 0;
  align-items: flex-start;
`;

function App() {
  return (
    <div className="App">
      <Titlebar />
      <FlexContainer>
        <TodoList />
        <CreateTodoForm />
      </FlexContainer>
    </div>
  );
}

export default App;
