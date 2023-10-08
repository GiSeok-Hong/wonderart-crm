import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export default function schedule() {
  return (
    <div className="w-[600px] box-border">
      <div className="schedule-toolbar h-[30px] mb-[10px] flex justify-between items-center">
        <div>
          <AiOutlineArrowLeft />
        </div>
        <h1 className="text-center">10월</h1>
        <div>
          <AiOutlineArrowRight />
        </div>
      </div>
      <div className="schedule-timeview">
        <div className="timeview-header  flex border-t border-black text-center h-[30px]">
          <div className="w-[80px]  border-black border-x">빈 칸</div>
          <div className="w-[104px]  border-black bg-primary-color border-r">9 월</div>
          <div className="w-[104px]  border-black bg-primary-color border-r">10 화</div>
          <div className="w-[104px]  border-black bg-primary-color border-r">11 수</div>
          <div className="w-[104px]  border-black bg-primary-color border-r">12 목</div>
          <div className="w-[104px]  border-black bg-primary-color border-r">13 금</div>
        </div>

        <div className="timeview-content flex ">
          <div className="timeview-time w-[80px]  border-black border-x border-b">
            <div className="h-[180px] flex items-center justify-center border-black  border-t">오후 2시</div>
            <div className="h-[180px] flex items-center justify-center border-black  border-t bg-gray-100">
              오후 3시
            </div>
            <div className="h-[180px] flex items-center justify-center border-black  border-t">오후 4시</div>
            <div className="h-[180px] flex items-center justify-center border-black  border-t bg-gray-100">
              오후 5시
            </div>
            <div className="h-[180px] flex items-center justify-center border-black  border-t">오후 6시</div>
          </div>

          {/* 월 */}
          <div className="studmentlist-mon w-[104px] box-boder border-r border-t  border-black">
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
