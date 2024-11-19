import React, { useState } from "react";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import { restoreState } from "../hw06/localStorage/localStorage";
import s from "./Clock.module.css";

/*
* 1 - в файле Clock.tsx дописать функции stop, start, onMouseEnter, onMouseLeave
DONE * 2 - в файле Clock.tsx из переменной date вычислить значения stringTime, stringDate, stringDay, stringMonth
DONE * 3 - в файле Clock.tsx дизэйблить кнопки стоп / старт если таймер не запущен / запущен соответственно
* 4 - сделать стили в соответствии с дизайном
* */

function Clock() {
  const [timerId, setTimerId] = useState<number | undefined>(undefined);
  // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
  const [date, setDate] = useState<Date>(new Date(restoreState("hw9-date", Date.now())));
  const [show, setShow] = useState<boolean>(false);

  const start = () => {
    // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
    // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
    let timer = setInterval(() => {
      setDate(new Date(Date.now()));
    }, 1000);
    setTimerId(Number(timer));
  };

  const stop = () => {
    // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
    clearInterval(timerId);
    setTimerId(undefined);
  };

  const onMouseEnter = () => {
    // пишут студенты // показать дату если наведена мышка
    setShow(true);
  };
  const onMouseLeave = () => {
    // пишут студенты // спрятать дату если мышка не наведена
    setShow(false);
  };
  let formatChanger = (num: number) => {
    if (num < 10) {
      return `0${num}`;
    }
    return String(num);
  };
  let formatterDay = new Intl.DateTimeFormat("en", {
    weekday: "long",
  });
  let formatterMonth = new Intl.DateTimeFormat("en", {
    month: "long",
  });

  const stringTime = `${formatChanger(date.getHours())}:${formatChanger(date.getMinutes())}:${formatChanger(
    date.getSeconds()
  )}` || <br />; // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
  const stringDate = `${formatChanger(date.getDate())}.${date.getMonth() + 1}.${date.getFullYear()}` || <br />; // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

 

  // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
  const stringDay = `${formatterDay.format(date)}` || <br />; // пишут студенты
  const stringMonth = `${formatterMonth.format(date)}` || <br />; // пишут студенты

  return (
    <div className={s.clock}>
      <div id={"hw9-watch"} className={s.watch} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <span id={"hw9-day"}>{stringDay}</span>,{" "}
        <span id={"hw9-time"}>
          <strong>{stringTime}</strong>
        </span>
      </div>

      <div id={"hw9-more"}>
        <div className={s.more}>
          {show ? (
            <>
              <span id={"hw9-month"}>{stringMonth}</span>, <span id={"hw9-date"}>{stringDate}</span>
            </>
          ) : (
            <>
              <br />
            </>
          )}
        </div>
      </div>

      <div className={s.buttonsContainer}>
        <SuperButton
          id={"hw9-button-start"}
          disabled={timerId !== undefined} // пишут студенты // задизэйблить если таймер запущен
          onClick={start}
          xType="default"
        >
          Start
        </SuperButton>
        <SuperButton
          id={"hw9-button-stop"}
          disabled={timerId === undefined} // пишут студенты // задизэйблить если таймер не запущен
          onClick={stop}
          xType="default"
        >
          Stop
        </SuperButton>
      </div>
    </div>
  );
}

export default Clock;
