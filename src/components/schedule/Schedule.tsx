import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import TableTimeColumn from './TableTimeColumn';

export default function schedule() {
  return (
    <div className="w-[600px] box-border">
      {/* 스케쥴 툴바 */}
      <div className="schedule-toolbar h-[30px] mb-[10px] flex justify-between items-center">
        <div>
          <AiOutlineArrowLeft />
        </div>
        <h1 className="text-center">10월</h1>
        <div>
          <AiOutlineArrowRight />
        </div>
      </div>

      {/* 스케쥴 테이블 */}
      <div className="schedule-table">
        {/* 테이블 헤더 */}
        <div className="schedule-table-header  flex border-t border-black text-center h-[30px]">
          <div className="w-[80px]  border-black border-x">빈 칸</div>
          <div className="w-[104px]  border-black bg-primary-color border-r">9 월</div>
          <div className="w-[104px]  border-black bg-primary-color border-r">10 화</div>
          <div className="w-[104px]  border-black bg-primary-color border-r">11 수</div>
          <div className="w-[104px]  border-black bg-primary-color border-r">12 목</div>
          <div className="w-[104px]  border-black bg-primary-color border-r">13 금</div>
        </div>

        {/* 테이블 컨텐트 */}
        <div className="schedule-table-content flex ">
          {/* table-time-column */}
          <TableTimeColumn />
          {/* 월 */}
          <div className="schedule-table-student-list-mon w-[104px] box-boder border-r border-t  border-black">
            <div className="time-14 h-[180px] border-black border-b">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>

            <div className="time-15 h-[180px] border-black border-b bg-gray-100">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>

            <div className="time-16 h-[180px] border-black border-b">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>

            <div className="time-17 h-[180px] border-black border-b bg-gray-100">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>

            <div className="time-18 h-[180px] border-black border-b">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>
          </div>
          {/* 화 */}
          <div className="studmentlist-mon w-[104px] box-boder border-r border-t  border-black">
            <div className="time-14 h-[180px] border-black border-b">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>

            <div className="time-15 h-[180px] border-black border-b">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>

            <div className="time-16 h-[180px] border-black border-b">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>

            <div className="time-17 h-[180px] border-black border-b">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>
          </div>
          {/* 수 */}
          <div className="studmentlist-mon w-[104px] box-boder border-r border-t  border-black">
            <div className="time-14 h-[180px] border-black border-b">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>

            <div className="time-15 h-[180px] border-black border-b">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>

            <div className="time-16 h-[180px] border-black border-b">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>

            <div className="time-17 h-[180px] border-black border-b">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>

            <div className="time-18 h-[180px] border-black border-b">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>
          </div>
          {/* 목 */}
          <div className="studmentlist-mon w-[104px] box-boder border-r border-t  border-black">
            <div className="time-14 h-[180px] border-black border-b">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>

            <div className="time-15 h-[180px] border-black border-b">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>

            <div className="time-16 h-[180px] border-black border-b">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>

            <div className="time-17 h-[180px] border-black border-b">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>
          </div>
          {/* 금 */}
          <div className="studmentlist-mon w-[104px] box-boder border-r border-t  border-black">
            <div className="time-14 h-[180px] border-black border-b">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>

            <div className="time-15 h-[180px] border-black border-b">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>

            <div className="time-16 h-[180px] border-black border-b">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>

            <div className="time-17 h-[180px] border-black border-b">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>

            <div className="time-18 h-[180px] border-black border-b">
              <div className="h-[30px]">학생일, 7세</div>
              <div className="h-[30px]">학생이, 7세</div>
              <div className="h-[30px]">학생삼, 7세</div>
              <div className="h-[30px]">학생사, 7세</div>
              <div className="h-[30px]">학생오, 7세</div>
              <div className="h-[30px]">학생육, 7세</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
