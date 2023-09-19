import { ReactNode } from "react";

import { PageContainerWrapper } from "./pageContainer";

interface ContainerProps {
  childrens: ReactNode;
}

const PageContainer: React.FC<ContainerProps> = ({ childrens }) => {
  return <PageContainerWrapper>{childrens}</PageContainerWrapper>;
};

export default PageContainer;
