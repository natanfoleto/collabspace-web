import { styled } from "styled-components";

export const Overview = styled.div`
  width: 75%;
`;

export const Cover = styled.img`
  width: 100%;
  height: 192px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const Avatar = styled.img`
  width: 192px;
  height: 192px;
  border-radius: 100%;
  object-fit: cover;
  margin-top: -160px;
  margin-left: 2rem;
  border: 2px solid var(--zinc-100);
`;

export const UserInfo = styled.div`
  height: 16rem;
  display: flex;
  gap: 1rem;
  background: var(--zinc-800);
  border-radius: 0 0 8px 8px;
  padding: 2rem 1rem;
`;

export const General = styled.div`
  flex: 0.7;

  h1 {
    color: var(--zinc-100);
    font-size: 1.5rem;
    font-weight: 500;
  }

  p {
    color: var(--zinc-300);
    font-size: 0.875rem;
    margin-top: 4px;
  }
`;

export const Total = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;

  span {
    color: var(--zinc-300);

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const Contact = styled.div`
  flex: 0.3;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    color: var(--zinc-300);
  }
`;
