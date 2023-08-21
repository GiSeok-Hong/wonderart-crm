import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';

export default function HeaderCalendarToolbar(props: { onNavigate: Function; date: Date }) {
  const { date, onNavigate } = props;

  const navigate = (action: string) => {
    onNavigate(action);
  };

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button
          type="button"
          onClick={navigate.bind(null, 'PREV')}
        >
          <BsFillCaretLeftFill />
        </button>
        <span className="rbc-toolbar-label">{`${date.getFullYear()}년 ${date.getMonth() + 1}월`}</span>
        <button
          type="button"
          onClick={navigate.bind(null, 'NEXT')}
        >
          <BsFillCaretRightFill />
        </button>
      </span>
    </div>
  );
}
