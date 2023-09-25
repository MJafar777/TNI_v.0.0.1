import styled from "styled-components";

export const ProductsWrapper = styled.div`
  margin-top: 6.2rem;

  @media only screen and (max-width: 1200px) {
    width: 95%;
    margin: 10px auto;
  }
`;

export const FlexProduct = styled.div`
  gap: 24px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 0;
    align-items: flex-start;
    margin-top: 10px;
  }

  @media only screen and (max-width: 800px) {
  }

  @media only screen and (max-width: 700px) {
  }

  @media only screen and (max-width: 600px) {
  }

  @media only screen and (max-width: 500px) {
  }
`;

export const BrLine = styled.div`
  width: 100%;
  margin-top: 32px;
  border-bottom: 1px solid #f4f4f4;

  @media only screen and (max-width: 500px) {
    margin-bottom: -40px;
  }
`;

export const MarginBottom = styled.div`
  margin-bottom: 100px;

  @media only screen and (max-width: 700px) {
    margin-bottom: 60px;
  }
  @media only screen and (max-width: 500px) {
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 400px) {
    margin-bottom: 10px;
  }
`;

export const GridsCards = styled.div`
  width: 100%;
  gap: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 17px;

  @media only screen and (max-width: 1060px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 660px) {
    gap: 20px;
    width: 90%;
    margin: 0 auto;
    margin-top: 15px;
  }
  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const RemoveContain = styled.div``;
