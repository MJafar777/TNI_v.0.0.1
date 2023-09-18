import { styled } from "styled-components";
import { mainBack } from "../../../../assets/images";

export const MainSectionWrapper = styled.nav`
  width: 100%;
  height: 100vh;
  min-height: 793px;
  display: flex;
  flex-direction: column;

  background-image: url(${mainBack});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
