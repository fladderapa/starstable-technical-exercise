import React, { useState } from "react";
import { Container, Header, Button, ErrorrText } from "./styled";
import { useQueryClient, useMutation } from "react-query";

interface ITodo {
  text?: string;
  done: boolean;
}

export const CreateTodoForm = () => {
  const [showError, setShowError] = useState(false);

  const queryClient = useQueryClient();

  const createTodo = async (todo: ITodo) => {
    await fetch("/todos/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(todo),
    });
  };

  const createMutation = useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const handleSubmit = (e: React.SyntheticEvent<Element, Event>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      todo: { value: string };
    };

    const todoText = target.todo.value;

    todoText === ""
      ? setShowError(!showError)
      : createMutation.mutate({
          text: todoText,
          done: false,
        });
  };

  return (
    <Container>
      <Header>Create todo</Header>
      {showError && <ErrorrText>Cannot create empty todo!</ErrorrText>}
      <form onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}>
        <div>
          <textarea
            style={{ resize: "none" }}
            id="w3review"
            name="todo"
            rows={4}
            cols={35}
          ></textarea>
        </div>
        <Button value="Create todo" />
      </form>
    </Container>
  );
};
