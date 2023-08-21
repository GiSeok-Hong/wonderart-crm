"use client";

import RadioBtn from "@/components/RadioBtn";
import { useState } from "react";

const DIV_CLASS = "mb-5 ";
const LABEL_CLASS = "text-xl font-bold inline-block min-w-label ";
const INPUT_CLASS = "bg-gray-200 text-center text-xl ml-1 mr-6";
const TEXTAREA_CLASS = "bg-gray-200 text-xl w-full resize-none";
const UNDERLINE_CLASS = " block w-full mb-1";
const BUTTON_CLASS =
  "px-10 py-5 border-2 text-xl font-bold rounded-2xl text-white hover:opacity-50 mb-5 ";

export default function Form() {
  const [registrationData, setRegistrationData] = useState({
    entranceDate: "",
    numberOfClass: "",
    studentName: "",
    studentPhone: "",
    birthDate: "",
    sex: "",
    guardianName: "",
    guardianPhone: "",
    address: "",
    school: "",
    experience: "",
    reason: "",
    importantActivity: "",
    interestingActivity: "",
    caution: "",
    agree: "",
  });

  const onChangeRegistrationData = (e: {
    target: { value: string; name: string };
  }) => {
    const { value, name } = e.target;
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });

    console.log(registrationData);
  };

  return (
    <form action="" className="w-full  border-4 p-5 overflow-hidden">
      <h1 className="text-4xl text-center mb-5">입학원서</h1>
      <div className={DIV_CLASS}>
        <label htmlFor="entranceDate" className={LABEL_CLASS}>
          입학일자
        </label>
        <input
          type="text"
          id="entranceDate"
          name="entranceDate"
          required
          className={INPUT_CLASS}
          placeholder="2023.01.01"
          size={10}
          maxLength={10}
        />
        <label htmlFor="numberOfClass" className={LABEL_CLASS}>
          수업 횟수
        </label>
        <RadioBtn
          name="numberOfClass"
          value="1"
          onChange={onChangeRegistrationData}
        >
          주 1회
        </RadioBtn>
        <RadioBtn
          name="numberOfClass"
          value="2"
          onChange={onChangeRegistrationData}
        >
          주 2회
        </RadioBtn>
      </div>
      <div className={DIV_CLASS}>
        <label htmlFor="studentName" className={LABEL_CLASS}>
          학생명
        </label>
        <input
          type="text"
          id="studentName"
          name="studentName"
          required
          className={INPUT_CLASS}
          placeholder="홍길동"
          size={10}
        />
        <label htmlFor="studentPhone" className={LABEL_CLASS}>
          학생 연락처
        </label>
        <input
          type="text"
          id="studentPhone"
          name="studentPhone"
          className={INPUT_CLASS}
          placeholder="010-1234-1234"
          size={15}
        />
      </div>
      <div className={DIV_CLASS}>
        <label htmlFor="birthDate" className={LABEL_CLASS}>
          생년월일
        </label>
        <input
          type="text"
          id="birthDate"
          name="birthDate"
          required
          className={INPUT_CLASS}
          placeholder="2023.01.01"
          size={10}
        />
        <label htmlFor="sex" className={LABEL_CLASS}>
          성별
        </label>
        <RadioBtn name="sex" value="m" onChange={onChangeRegistrationData}>
          남
        </RadioBtn>
        <RadioBtn name="sex" value="y" onChange={onChangeRegistrationData}>
          여
        </RadioBtn>
      </div>
      <div className={DIV_CLASS}>
        <label htmlFor="guardianName" className={LABEL_CLASS}>
          보호자명
        </label>
        <input
          type="text"
          id="guardianName"
          name="guardianName"
          required
          className={INPUT_CLASS}
          placeholder="홍길동"
          size={10}
        />
        <label htmlFor="guardianPhone" className={LABEL_CLASS}>
          보호자 연락처
        </label>
        <input
          type="text"
          id="guardianPhone"
          name="guardianPhone"
          required
          className={INPUT_CLASS}
          placeholder="010-1234-1234"
          size={15}
        />
      </div>
      <div className={DIV_CLASS}>
        <label htmlFor="address" className={LABEL_CLASS}>
          주소
        </label>
        <input
          type="text"
          id="address"
          name="address"
          required
          className={INPUT_CLASS + " w-3/4"}
          placeholder="경기도 가나시 나나1로 12 동글아파트 111동 1234호"
        />
      </div>
      <div className={DIV_CLASS}>
        <label htmlFor="school" className={LABEL_CLASS}>
          학교 / 유치원
        </label>
        <input
          type="text"
          id="school"
          name="school"
          className={INPUT_CLASS}
          placeholder="동글초등학교"
        />
      </div>
      <div className={DIV_CLASS}>
        <label htmlFor="experience" className={LABEL_CLASS + UNDERLINE_CLASS}>
          원더아트 스튜디오에 등록하기 전 미술활동 경험이 있나요?
        </label>
        <textarea
          id="experience"
          name="experience"
          className={TEXTAREA_CLASS}
        ></textarea>
      </div>
      <div className={DIV_CLASS}>
        <label htmlFor="reason" className={LABEL_CLASS + UNDERLINE_CLASS}>
          원더아트 스튜디오를 선택하신 이유는 무엇인가요?
        </label>
        <RadioBtn
          name="reason"
          value="recommended"
          onChange={onChangeRegistrationData}
        >
          지인추천
        </RadioBtn>
        <RadioBtn
          name="reason"
          value="location"
          onChange={onChangeRegistrationData}
        >
          위치
        </RadioBtn>
        <RadioBtn
          name="reason"
          value="gossip"
          onChange={onChangeRegistrationData}
        >
          주변소문
        </RadioBtn>
        <RadioBtn
          name="reason"
          value="searched"
          onChange={onChangeRegistrationData}
        >
          검색
        </RadioBtn>
        <RadioBtn name="reason" value="etc" onChange={onChangeRegistrationData}>
          기타
        </RadioBtn>
      </div>
      <div className={DIV_CLASS}>
        <label
          htmlFor="importantActivity"
          className={LABEL_CLASS + UNDERLINE_CLASS}
        >
          평소에 학부모님께서 가장 중요하다고 생각하신 미술활동은 무엇인가요?
        </label>
        <RadioBtn
          name="importantActivity"
          value="drawing"
          onChange={onChangeRegistrationData}
        >
          그리기
        </RadioBtn>
        <RadioBtn
          name="importantActivity"
          value="materialClass"
          onChange={onChangeRegistrationData}
        >
          다양한 재료 수업
        </RadioBtn>
        <RadioBtn
          name="importantActivity"
          value="MasterpieceClass"
          onChange={onChangeRegistrationData}
        >
          명화 수업
        </RadioBtn>
        <RadioBtn
          name="importantActivity"
          value="techniqueClass"
          onChange={onChangeRegistrationData}
        >
          기법 수업
        </RadioBtn>
        <RadioBtn
          name="importantActivity"
          value="etc"
          onChange={onChangeRegistrationData}
        >
          기타
        </RadioBtn>
      </div>
      <div className={DIV_CLASS}>
        <label
          htmlFor="interestingActivity"
          className={LABEL_CLASS + UNDERLINE_CLASS}
        >
          평소에 학생이 가장 흥미있어 하는 미술활동은 무엇인가요?
        </label>
        <RadioBtn
          name="interestingActivity"
          value="drawing"
          onChange={onChangeRegistrationData}
        >
          그리기
        </RadioBtn>
        <RadioBtn
          name="interestingActivity"
          value="materialClass"
          onChange={onChangeRegistrationData}
        >
          다양한 재료 수업
        </RadioBtn>
        <RadioBtn
          name="interestingActivity"
          value="MasterpieceClass"
          onChange={onChangeRegistrationData}
        >
          명화 수업
        </RadioBtn>
        <RadioBtn
          name="interestingActivity"
          value="techniqueClass"
          onChange={onChangeRegistrationData}
        >
          기법 수업
        </RadioBtn>
        <RadioBtn
          name="interestingActivity"
          value="etc"
          onChange={onChangeRegistrationData}
        >
          기타
        </RadioBtn>
      </div>
      <div className={DIV_CLASS}>
        <label htmlFor="caution" className={LABEL_CLASS + UNDERLINE_CLASS}>
          교사가 학생에 대해 특별히 알아야 하거나, 주의해야 할 점을 적어주세요
        </label>
        <textarea
          id="caution"
          name="caution"
          className={TEXTAREA_CLASS}
        ></textarea>
      </div>
      <div className={DIV_CLASS}>
        <label htmlFor="agree" className={LABEL_CLASS + UNDERLINE_CLASS}>
          원더아트 스튜디오에서 작업한 모든 작품과 사진의 저작권은 <br />
          원더아트 스튜디오에 있음에 동의하십니까?
        </label>
        <RadioBtn name="agree" value="yes" onChange={onChangeRegistrationData}>
          예
        </RadioBtn>
        <RadioBtn name="agree" value="no" onChange={onChangeRegistrationData}>
          아니오
        </RadioBtn>
      </div>
      <div className="flex gap-20 justify-center">
        <button
          className={BUTTON_CLASS + " border-primary-color bg-primary-color"}
        >
          등록
        </button>
        <button className={BUTTON_CLASS + "border-red-400 bg-red-400"}>
          취소
        </button>
      </div>
    </form>
  );
}
