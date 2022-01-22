import React, { useState } from "react";
import { useQuery } from "react-query";
import { TodoItem } from "../../components/todo-item";
import {
  Container,
  FilterContainer,
  Checkbox,
  TextInput,
  ListContainer,
  FlexContainer,
  Header,
  InnerFlex,
} from "./styled";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const TodoList = () => {
  const [filterDone, setFilterDone] = useState(false);
  const [searhQuery, setSearchQuery] = useState("");

  const festchTodos = async () => {
    const res = await fetch("/todos");
    return await res.json();
  };

  const { isLoading, data: todos } = useQuery("todos", () => {
    return festchTodos();
  });

  const doneFilteredTodos =
    todos && filterDone
      ? todos.filter((todo: { done: any }) => todo.done)
      : todos;

  const searchFilteredTodos =
    todos &&
    doneFilteredTodos.filter((todo: { text: string | string[] }) =>
      todo.text.includes(searhQuery)
    );

  return (
    <Container>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <FilterContainer>
            <Header>Filter todos</Header>
            <FlexContainer>
              <TextInput
                name="search"
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search todo"
              />
              <InnerFlex>
                <Checkbox
                  name="done"
                  checked={filterDone}
                  onChange={(event) => setFilterDone(event.target.checked)}
                />
                <label htmlFor="done">Filter done todos</label>
              </InnerFlex>
            </FlexContainer>
          </FilterContainer>
          <ListContainer>
            {searchFilteredTodos &&
              searchFilteredTodos
                .reverse()
                .map((t: Todo) => (
                  <TodoItem id={t.id} text={t.text} done={t.done} />
                ))}
          </ListContainer>
        </>
      )}
    </Container>
  );
};
