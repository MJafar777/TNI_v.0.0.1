import styled from "styled-components";

interface PropsImg {
  src: string;
  alt: string;
}

export const CurdReviewWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  background: #fff;
  border-radius: 16px;
  border: 1px solid #f4f4f4;
`;

export const TopProfile = styled.div`
  width: 100%;
  padding-bottom: 15px;
  border-bottom: 1px solid #f4f4f4;

  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const Logo = styled.img<PropsImg>``;
