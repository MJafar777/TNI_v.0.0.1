import styled from "styled-components";

export const DescriptionProductWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: start;
  justify-content: space-between;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
