import styled from "styled-components";

export const Container = styled.div`
  padding: 0.5rem 1rem 1rem 1rem;
  border-radius: 8px;
  background-color: #fafafa;
  margin: 0 0 0 2rem;
`;

export const Header = styled.h3`
  color: #ea4c89;
`;

export const Button = styled.input.attrs({
  type: "submit",
})`
  float: right;
  margin: 1rem 0 0 0;
  background-color: #ea4c89;
  border-radius: 8px;
  border-style: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  padding: 10px 16px;
  font-weight: 600;
  &:hover {
    background-color: #f082ac;
  }
`;

export const ErrorrText = styled.label`
  margin: 0;
  font-style: italic;
  font-weight: 500;
  color: #818181;
`;
