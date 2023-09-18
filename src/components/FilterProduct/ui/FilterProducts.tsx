import { FC, useState } from "react";
import { FilterAllProjectsWrapper, ButtonsFilter } from "./filterProducts";

type DataFilterItem = {
  id: number;
  value: string;
};

type Props = {
  marginTop: number | string;
  dataFilter?: DataFilterItem[];
};

const FilterProducts: FC<Props> = (props) => {
  const [idFilterValue, setIdFilterValue] = useState<number>(1);

  const { dataFilter, marginTop } = props;

  const FilterButtonClicked = (id: number) => {
    setIdFilterValue(id);
  };
  const activeButton = {
    border: "1px solid #27D0A5",
    backgroundColor: "#eafffa",
    color: "#27D0A5",
    // color: "linear-gradient(180deg, #27D0A5 0%, #029ECF 100%)",
    backgroundClip: "text",

    textFillColor: "transparent",
  };

  return (
    <FilterAllProjectsWrapper marginTop={marginTop ? marginTop : "0"}>
      {dataFilter &&
        dataFilter.map((item) => (
          <ButtonsFilter
            onClick={() => {
              FilterButtonClicked(item.id);
            }}
            key={item.id}
            style={idFilterValue === item.id ? activeButton : {}}
          >
            {item.value}
          </ButtonsFilter>
        ))}
    </FilterAllProjectsWrapper>
  );
};

export default FilterProducts;
