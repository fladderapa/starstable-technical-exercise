import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 67px;
  background-color: #231e1e;
  box-shadow: 0 4px 12px rgb(0 0 0 / 50%);
  position: fixed;
  top: 0;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 90px;
  height: 67px;
`;

export const Title = styled.h2`
  margin: 0 0 0 1rem;
  color: white;
`;
