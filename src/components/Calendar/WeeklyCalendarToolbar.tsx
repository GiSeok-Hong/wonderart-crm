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
