const DIV_CLASS = `h-[180px] border-black border-b `;

const CLASS_DAY = ['월', '화', '수', '목', '금'];
const CLASS_TIME = ['오후 2시', '오후 3시', '오후 4시', '오후 5시', '오후 6시'];

export default function DefaultStudentList() {
  return (
    <>
      {CLASS_DAY.map((day, i) => {
        return (
          <div
            key={i}
            className="w-[104px] box-boder border-r border-t  border-black"
          >
            {CLASS_TIME.map((v, i) => {
              return (
                <div
                  key={i}
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
