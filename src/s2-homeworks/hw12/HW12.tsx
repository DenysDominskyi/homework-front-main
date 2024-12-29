import React, { useEffect } from "react";
import s from "./HW12.module.css";
import s2 from "../../s1-main/App.module.css";
import SuperSelect from "../hw07/common/c5-SuperSelect/SuperSelect";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeId } from "./bll/themeReducer";
import { RootState } from "../hw10/bll/store";

/*
DONE * 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
DONE * 2 - получить themeId из редакса
DONE * 3 - дописать тип и логику функции change
DONE * 4 - передать пропсы в SuperSelect
* */

const themes = [
  { id: 1, value: "light" },
  { id: 2, value: "blue" },
  { id: 3, value: "dark" },
];

const HW12 = () => {
  const themeId = useSelector((store: RootState) => store.theme.themeId);
  const dispatch = useDispatch();

  const change = (id: number) => {
    dispatch(changeThemeId(id));
  };

  useEffect(() => {
    document.documentElement.dataset.theme = themeId + "";
  }, [themeId]);

  return (
    <div id={"hw12"}>
      <div id={"hw12-text"} className={s2.hwTitle}>
        Homework #12
      </div>

      <div className={s2.hw}>
        <SuperSelect
          id={"hw12-select-theme"}
          className={s.select}
          options={themes}
          onChangeOption={change}
        />
      </div>
    </div>
  );
};

export default HW12;
