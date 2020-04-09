import styled, { css } from "styled-components";

const Button = styled.button`
  color: white;
  background: ${(p) => (p.secondary ? "black" : "pink")};
  font-weight: bold;
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  ${(p) =>
    p.large
      ? css`
          border-radius: 5px;
          font-size: 1.5em;
          padding: 10px;
        `
      : css`
          border-radius: 4px;
          font-size: 1em;
          padding: 8px;
        `}

  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export { Button };
