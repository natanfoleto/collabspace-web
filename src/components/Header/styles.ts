import { styled } from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 4rem;
  background: var(--zinc-800);

  display: flex;
  align-items: center;
  gap: 2rem;

  padding: 0 2rem;

  position: fixed;
  z-index: 999;

  svg {
    cursor: pointer;
  }

  color: white;
`;

export const Brand = styled.div`
  width: 25%;

  display: flex;
  align-items: center;
`;

export const Navbar = styled.nav`
  width: 75%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: var(--emerald-600);
  }
`;

export const Menu = styled.div`
  height: 100%;

  display: flex;
`;

export const Item = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  padding: 0 2rem;
  background: transparent;
  outline: 0;
  border: 0;

  border-bottom: 3px solid var(--emerald-600);
`;

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;
`;

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

export const Divider = styled.div`
  width: 1px;
  height: 2rem;
  background: var(--zinc-600);
  margin: 0 4px;
`;
