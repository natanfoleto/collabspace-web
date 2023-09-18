import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  background: rgb(0, 0, 0, 0.75);
`;

export const Content = styled.div`
  min-width: 480px;
  padding: 1rem;
  background: var(--zinc-800);
  border-radius: 8px;

  margin: 2.5rem;
`;
