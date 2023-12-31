import { DAY_OPTION } from '@/consts/day-option';
import { TIME_OPTION } from '@/consts/time-option';

const DIV_CLASS = `h-[180px] border-black border-b `;

export default function DefaultStudentList() {
  return (
    <>
      {DAY_OPTION.map((day) => {
        return (
          <div
            key={day.value}
            className="w-[104px] box-boder border-r border-t  border-black"
          >
            {TIME_OPTION.map((time, i) => {
              return (
                <div
                  key={time.value}
                  className={DIV_CLASS + `${i % 2 === 0 ? '' : ` bg-gray-100`}`}
                ></div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
