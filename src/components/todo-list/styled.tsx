import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  min-width: 400px;
`;
export const ListContainer = styled.div`
  margin: 0 auto;
  min-height: 400px;
  max-height: 660px;
  overflow-y: scroll;
`;

export const FilterContainer = styled.div`
  padding: 0.5rem 1rem 1rem 1rem;
  border-radius: 8px;
  background-color: #fafafa;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InnerFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const Header = styled.h3`
  color: #ea4c89;
`;

export const Checkbox = styled.input.attrs({
  type: "checkbox",
})`
  width: 25px;
  height: 25px;
`;

export const TextInput = styled.input.attrs({
  type: "text",
})`
  padding: 0.5rem;
  border-radius: 6px;
`;
