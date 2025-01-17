import React from "react";
import arrowUpDown from "../../../../icons/PolygonUpDown.png";
import arrowDown from "../../../../icons/PolygonDown.png";
import arrowUp from "../../../../icons/PolygonUp.png";

const downIcon = arrowDown;
const upIcon = arrowUp;
const noneIcon = arrowUpDown;

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
  // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
  return up; // исправить
};

const SuperSort: React.FC<SuperSortPropsType> = ({ sort, value, onChange, id = "hw15" }) => {
  const up = "0" + value;
  const down = "1" + value;

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up));
  };

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

  return (
    <span
      id={id + "-sort-" + value}
      onClick={onChangeCallback}
      style={{ position: "relative", display: "inline-block", width: "20px", height: "20px", cursor: 'pointer' }}
    >
      <img
        id={id + "-icon-" + sort}
        src={icon}
        style={{ transform: "scale(0.25)", position: "absolute", top: "-16px", left: "-16px" }}
      />
      {/*сделать иконку*/}
      {/*<img*/}
      {/*    id={id + '-icon-' + sort}*/}
      {/*    src={icon}*/}
      {/*/>*/}
    </span>
  );
};

export default SuperSort;
