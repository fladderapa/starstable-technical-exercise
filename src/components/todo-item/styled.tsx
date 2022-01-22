import styled from "styled-components";

interface IProps {
  readonly isDone: boolean;
}

export const Container = styled.div<IProps>`
  background-color: ${(props) => (props.isDone ? "#afafaf" : "#fafafa")};
  border-radius: 8px;
  margin: 1rem 0 0 0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledIcon = styled.i`
  cursor: pointer;
  &:hover {
    opacity: 0.55;
  }
`;

export const StyledParagraph = styled.p<IProps>`
  text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
`;
