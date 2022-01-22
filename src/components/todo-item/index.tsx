import React from "react";
import {
  Container,
  StyledIcon,
  StyledParagraph,
  InnerContainer,
} from "./styled";
import { useQueryClient, useMutation } from "react-query";

interface ITodo {
  id: number;
  text?: string;
  done: boolean;
}

export const TodoItem = (todo: ITodo) => {
  const queryClient = useQueryClient();

  const deleteTodo = async (todoId: number) => {
    await fetch("/todos/" + todoId, {
      method: "DELETE",
    });
  };

  const updateTodo = async (todo: ITodo) => {
    await fetch("/todos/" + todo.id, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(todo),
    });
  };

  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const updateMutation = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  return (
    <Container
      isDone={todo.done}
      onClick={() =>
        updateMutation.mutate({
          id: todo.id,
          done: !todo.done,
        })
      }
    >
      <InnerContainer>
        {todo.done && <StyledIcon className="material-icons">done</StyledIcon>}
        <StyledParagraph isDone={todo.done}>{todo.text}</StyledParagraph>
      </InnerContainer>
      <StyledIcon
        onClick={() => deleteMutation.mutate(todo.id)}
        className="material-icons"
      >
        delete
      </StyledIcon>
    </Container>
  );
};
