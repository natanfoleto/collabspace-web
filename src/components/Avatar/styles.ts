import { styled, css } from "styled-components";

interface ContainerProps {
  borderEffect?: boolean;
}

export const Container = styled.img<ContainerProps>`
  width: 56px;
  height: 56px;
  background: white;
  border-radius: 6px;

  ${({ borderEffect }) =>
    borderEffect &&
    css`
      border: 3px solid var(--zinc-800);
      box-shadow: 0px 0px 1px 2px var(--emerald-500);
    `}
`;
