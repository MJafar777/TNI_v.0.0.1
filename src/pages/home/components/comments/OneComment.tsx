import React from "react";
import {
  ContainerOfContent,
  ContentOfComment,
  Img,
  Img2,
  OneCommentWrapper,
  StarsContainer,
  UserImg,
  UserInfo,
  UserName,
  UserTitle,
} from "./OneCommentStyles";
import StarIcon from "@mui/icons-material/Star";
import { directionOfCommit, jafar, quota } from "../../../../assets/images/components/comments";
interface AppProps {}

const OneComment: React.FC<AppProps> = () => {
  return (
    <OneCommentWrapper>
      <ContainerOfContent>
        <StarsContainer>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </StarsContainer>
        <Img src={quota} />
        <Img2 src={directionOfCommit} />
        <ContentOfComment>
          The standard webpage maximum width dimensions for desktop screens are
          1440 pixels. It's a commonThe standard webpage maximum width
          dimensions for desktop screens are 1440 pixels. It's a common
        </ContentOfComment>
      </ContainerOfContent>

      <UserInfo>
        <UserImg>
          <img src={jafar} alt="" />
        </UserImg>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <UserName>Title Here</UserName>
          <UserTitle>Your Title Here </UserTitle>
        </div>
      </UserInfo>
    </OneCommentWrapper>
  );
};

export default OneComment;
