const COLUMN_CLASS = `h-[180px] flex items-center justify-center border-black  border-t`;
const CLASS_TIME = ['오후 2시', '오후 3시', '오후 4시', '오후 5시', '오후 6시'];

export default function TableTimeColumn() {
  return (
    <div className="schedule-table-time-column w-[80px]  border-black border-x border-b">
      {CLASS_TIME.map((time, index) => {
        return (
          <div
            key={index}
            className={COLUMN_CLASS + `${index % 2 === 0 ? '' : ` bg-gray-100`}`}
          >
            {time}
          </div>
        );
      })}
    </div>
  );
}
