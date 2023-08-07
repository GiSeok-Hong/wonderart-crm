import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

type NavigateAction = "PREV" | "NEXT" | "TODAY" | "DATE";

export default function WeeklyCalendarToolbar(props: {
  onNavigate: (navigate: NavigateAction, date?: Date) => void;
  date: Date;
}) {
  const { date, onNavigate } = props;

  const navigate = (action: NavigateAction) => {
    onNavigate(action);
  };

  // const now = date; // Mon Aug 07 2023 18:24:15 GMT+0900 (한국 표준시) {}
  // const nowDayOfWeek = now.getDay(); // 1 월요일
  // const nowDay = now.getDate(); // 7 일
  // const nowMonth = now.getMonth() + 1; //8 월
  // const nowYear = now.getFullYear(); // 2023
  // const startDate = new Date(
  //   nowYear,
  //   nowMonth,
  //   nowDay - nowDayOfWeek
  // ).getDate();
  // const endDate = new Date(
  //   nowYear,
  //   nowMonth,
  //   nowDay + (6 - nowDayOfWeek)
  // ).getDate();

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={navigate.bind(null, "PREV")}>
          <BsFillCaretLeftFill />
        </button>
      </span>
      <span className="rbc-toolbar-label">{`${date.getMonth() + 1}월`}</span>
      <span className="rbc-btn-group">
        <button type="button" onClick={navigate.bind(null, "NEXT")}>
          <BsFillCaretRightFill />
        </button>
      </span>
    </div>
  );
}
