import { styled } from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 5rem;
  background: var(--zinc-800);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  position: fixed;
  z-index: 999;

  svg {
    cursor: pointer;
  }

  color: white;
`;

export const Navbar = styled.nav``;

export const Aside = styled.aside``;

export const AsideButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--zinc-700);
  border: 0;
  outline: 0;
  border-radius: 100%;
  padding: 0.75rem;
  transition: all 0.15s;

  cursor: pointer;

  svg {
    color: var(--zinc-200);
  }

  &:hover {
    background: var(--zinc-600);
  }
`;
