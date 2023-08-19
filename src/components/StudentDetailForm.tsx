"use client";

import moment from "moment";
import { useState } from "react";
import { Student } from "@/types/student";
import RadioBtn from "./RadioBtn";

export default function StudentDetailForm(studentData: Student) {
  const [student, setStudentData] = useState(studentData);
  const [editMode, setEditMode] = useState(false);

  const now = moment();
  const age = now.diff(moment(studentData.birthDate, "YYYY.MM.DD"), "years");

  const DIV_CLASS = "mb-5 ";
  const CHILDREN_DIV_CLASS =
    "bg-gray-200 text-center text-xl  inline-block px-1";
  const LABEL_CLASS = "text-xl font-bold inline-block min-w-label ";
  const INPUT_CLASS = "bg-gray-200 text-center text-xl  mr-6 px-2";
  const TEXTAREA_CLASS = "bg-gray-200 text-xl w-full p-1 resize-none";
  const UNDERLINE_CLASS = " block w-full mb-1";
  const BUTTON_CLASS =
    "px-10 py-5 border-2 text-xl font-bold rounded-2xl text-white hover:opacity-50 mb-5 ";
  const DEFAULT_SHOW_CLASS = editMode ? " hidden " : "";
  const DEFAULT_HIDDEN_CLASS = editMode ? " " : " hidden";

  const DAY_OPTION = [
    {
      value: "월",
      name: "월",
    },
    {
      value: "화",
      name: "화",
    },
    {
      value: "수",
      name: "수",
    },
    {
      value: "목",
      name: "목",
    },
    {
      value: "금",
      name: "금",
    },
  ];

  const TIME_OPTION = [
    {
      value: 14,
      name: "2시",
    },
    {
      value: 15,
      name: "3시",
    },
    {
      value: 16,
      name: "4시",
    },
    {
      value: 17,
      name: "5시",
    },
    {
      value: 18,
      name: "6시",
    },
  ];

  const onChangeStudentData = (e: {
    target: { value: string; name: string };
  }) => {
    const { value, name } = e.target;
    setStudentData({
      ...student,
      [name]: value,
    });

    console.log(student);
  };

  const onClickEditMode = (e: any) => {
    setEditMode(!editMode);

    e.preventDefault();
    console.log("현재 모드는 ??? " + editMode);
  };

  return (
    <form action={`/list/${student.id}`} className="w-full  border-4 p-5">
      <h1 className="text-4xl text-center mb-5">
        {`${student.studentName} (만 ${age}세)`}
      </h1>
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
          size={10}
          maxLength={10}
          placeholder="2023.01.01"
          value={student.entranceDate}
          onChange={onChangeStudentData}
          disabled
        ></input>
        <label htmlFor="ClassTime" className={LABEL_CLASS}>
          수업 시간
        </label>
        {student.classTime.map((i) => (
          <div key={i.day} className={CHILDREN_DIV_CLASS + DEFAULT_SHOW_CLASS}>
            {`${i.day} ${i.time}시`}
          </div>
        ))}
        <div className={CHILDREN_DIV_CLASS + DEFAULT_HIDDEN_CLASS}>
          {/* TODO:  */}
          <select name="" id="">
            {DAY_OPTION.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
          <select name="" id="">
            {TIME_OPTION.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div className={CHILDREN_DIV_CLASS + DEFAULT_HIDDEN_CLASS}>
          {/* TODO:  */}
          <select name="" id="">
            {DAY_OPTION.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
          <select name="" id="">
            {TIME_OPTION.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
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
          value={student.studentName}
          onChange={onChangeStudentData}
          size={10}
          disabled={!editMode}
        />
        <label htmlFor="studentPhone" className={LABEL_CLASS}>
          학생 연락처
        </label>
        <input
          type="text"
          id="studentPhone"
          name="studentPhone"
          className={INPUT_CLASS}
          size={12}
          value={student.studentPhone}
          onChange={onChangeStudentData}
          disabled={!editMode}
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
          value={student.birthDate}
          onChange={onChangeStudentData}
          size={10}
          disabled={!editMode}
        />
        <label htmlFor="sex" className={LABEL_CLASS}>
          성별
        </label>
        <div className={CHILDREN_DIV_CLASS + DEFAULT_SHOW_CLASS}>
          {student.sex}
        </div>
        <div className={"inline-block" + DEFAULT_HIDDEN_CLASS}>
          <RadioBtn name="sex" value="남" onChange={onChangeStudentData}>
            남
          </RadioBtn>
          <RadioBtn name="sex" value="여" onChange={onChangeStudentData}>
            여
          </RadioBtn>
        </div>
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
          value={student.guardianName}
          onChange={onChangeStudentData}
          size={10}
          disabled={!editMode}
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
          size={12}
          value={student.guardianPhone}
          onChange={onChangeStudentData}
          disabled={!editMode}
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
          value={student.address}
          onChange={onChangeStudentData}
          disabled={!editMode}
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
          value={student.school}
          onChange={onChangeStudentData}
          disabled={!editMode}
        />
      </div>
      <div className={DIV_CLASS}>
        <label htmlFor="experience" className={LABEL_CLASS + UNDERLINE_CLASS}>
          원더아트 스튜디오에 등록하기 전 미술 활동 경험
        </label>
        <textarea
          id="experience"
          name="experience"
          className={TEXTAREA_CLASS}
          value={student.experience}
          onChange={onChangeStudentData}
          disabled={!editMode}
        ></textarea>
      </div>
      <div className={DIV_CLASS}>
        <label htmlFor="reason" className={LABEL_CLASS + UNDERLINE_CLASS}>
          원더아트 스튜디오를 선택하신 이유
        </label>
        <textarea
          id="reason"
          name="reason"
          className={TEXTAREA_CLASS + DEFAULT_SHOW_CLASS}
          value={student.reason}
          onChange={onChangeStudentData}
          disabled
        ></textarea>
        <div className={DEFAULT_HIDDEN_CLASS}>
          <RadioBtn
            name="reason"
            value="지인추천"
            onChange={onChangeStudentData}
          >
            지인추천
          </RadioBtn>
          <RadioBtn name="reason" value="위치" onChange={onChangeStudentData}>
            위치
          </RadioBtn>
          <RadioBtn
            name="reason"
            value="주변소문"
            onChange={onChangeStudentData}
          >
            주변소문
          </RadioBtn>
          <RadioBtn name="reason" value="검색" onChange={onChangeStudentData}>
            검색
          </RadioBtn>
          <RadioBtn name="reason" value="기타" onChange={onChangeStudentData}>
            기타
          </RadioBtn>
        </div>
      </div>
      <div className={DIV_CLASS}>
        <label
          htmlFor="importantActivity"
          className={LABEL_CLASS + UNDERLINE_CLASS}
        >
          학부모님이 가장 중요하다고 생각하는 미술 활동
        </label>
        <textarea
          id="importantActivity"
          name="importantActivity"
          className={TEXTAREA_CLASS + (editMode ? " hidden" : "")}
          value={student.importantActivity}
          onChange={onChangeStudentData}
          disabled
        ></textarea>
        <div className={DEFAULT_HIDDEN_CLASS}>
          <RadioBtn
            name="importantActivity"
            value="그리기"
            onChange={onChangeStudentData}
          >
            그리기
          </RadioBtn>
          <RadioBtn
            name="importantActivity"
            value="다양한 재료 수업"
            onChange={onChangeStudentData}
          >
            다양한 재료 수업
          </RadioBtn>
          <RadioBtn
            name="importantActivity"
            value="명화 수업"
            onChange={onChangeStudentData}
          >
            명화 수업
          </RadioBtn>
          <RadioBtn
            name="importantActivity"
            value="기법 수업"
            onChange={onChangeStudentData}
          >
            기법 수업
          </RadioBtn>
          <RadioBtn
            name="importantActivity"
            value="기타"
            onChange={onChangeStudentData}
          >
            기타
          </RadioBtn>
        </div>
      </div>
      <div className={DIV_CLASS}>
        <label
          htmlFor="interestingActivity"
          className={LABEL_CLASS + UNDERLINE_CLASS}
        >
          학생이 가장 흥미있어하는 미술 활동
        </label>
        <textarea
          id="interestingActivity"
          name="interestingActivity"
          className={TEXTAREA_CLASS + (editMode ? " hidden" : "")}
          value={student.interestingActivity}
          onChange={onChangeStudentData}
          disabled
        ></textarea>
        <div className={DEFAULT_HIDDEN_CLASS}>
          <RadioBtn
            name="interestingActivity"
            value="그리기"
            onChange={onChangeStudentData}
          >
            그리기
          </RadioBtn>
          <RadioBtn
            name="interestingActivity"
            value="다양한 재료 수업"
            onChange={onChangeStudentData}
          >
            다양한 재료 수업
          </RadioBtn>
          <RadioBtn
            name="interestingActivity"
            value="명화 수업"
            onChange={onChangeStudentData}
          >
            명화 수업
          </RadioBtn>
          <RadioBtn
            name="interestingActivity"
            value="기법 수업"
            onChange={onChangeStudentData}
          >
            기법 수업
          </RadioBtn>
          <RadioBtn
            name="interestingActivity"
            value="기타"
            onChange={onChangeStudentData}
          >
            기타
          </RadioBtn>
        </div>
      </div>
      <div className={DIV_CLASS}>
        <label htmlFor="caution" className={LABEL_CLASS + UNDERLINE_CLASS}>
          학생에 대해 특별히 알아야 하거나, 주의해야 할 점
        </label>
        <textarea
          id="caution"
          name="caution"
          className={TEXTAREA_CLASS}
          value={student.caution}
          onChange={onChangeStudentData}
          disabled={!editMode}
        ></textarea>
      </div>
      <div className={DIV_CLASS}>
        <label htmlFor="teacherMemo" className={LABEL_CLASS + UNDERLINE_CLASS}>
          선생님 메모
        </label>
        <textarea
          id="teacherMemo"
          name="teacherMemo"
          className={TEXTAREA_CLASS}
          value={student.teacherMemo}
          onChange={onChangeStudentData}
          disabled={!editMode}
        ></textarea>
      </div>
      <div className="flex gap-20 justify-center">
        <button
          className={BUTTON_CLASS + " border-primary-color bg-primary-color"}
          onClick={onClickEditMode}
        >
          {`${!editMode ? "수정하기" : "수정완료"}`}
        </button>
        <button className={BUTTON_CLASS + "border-red-400 bg-red-400"}>
          {`${!editMode ? "뒤로" : "취소"}`}
        </button>
      </div>
    </form>
  );
}
