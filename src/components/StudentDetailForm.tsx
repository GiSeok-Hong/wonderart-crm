'use client';

import moment from 'moment';
import { useState } from 'react';
import RadioBtn from './RadioBtn';

import { useForm } from 'react-hook-form';
import { DAY_OPTION } from '@/consts/day-option';
import { TIME_OPTION } from '@/consts/time-option';
import StudentDetailEditForm from './StudentDetailEditForm';
import { type ArtActivity, type ReasonForChoosing, type Sex, type Student } from '@prisma/client';

const BUTTON_CLASS = 'px-10 py-5 border-2 text-xl font-bold rounded-2xl text-white hover:opacity-50 mb-5 ';

type UpdateStudentForm = {
  name: string;
  phone: string | null;
  birthDate: Date;
  time: number[];
  day: number[];
  guardianName: string;
  guardianPhone: string;
  address: string;
  school?: string | null;
  sex: Sex;
  experience: string | null;
  reason: ReasonForChoosing;
  importantActivity: ArtActivity;
  interestingActivity: ArtActivity;
  caution: string | null;
};

export default function StudentDetailForm({
  studentData,
}: {
  studentData: Student & { guardian: { name: string; phone: string } };
}) {
  const {
    address,
    birthDate,
    caution,
    experience,
    guardian,
    importantActivity,
    interestingActivity,
    day,
    time,
    phone,
    school,
    entranceDate,
    sex,
    name,
    reason,
    teacherMemo,
  } = studentData;
  const { register, handleSubmit } = useForm<UpdateStudentForm>({
    defaultValues: {
      address,
      birthDate,
      caution,
      experience,
      guardianName: guardian.name,
      guardianPhone: guardian.phone,
      importantActivity,
      interestingActivity,
      name,
      phone,
      reason,
      school,
    },
  });

  const [student, setStudentData] = useState(studentData);
  const [editMode, setEditMode] = useState(false);

  const now = moment();
  const age = now.diff(moment(studentData.birthDate, 'YYYY.MM.DD'), 'years');

  const onChangeStudentData = (e: { target: { value: string; name: string } }) => {
    const { value, name } = e.target;
    setStudentData({
      ...student,
      [name]: value,
    });
  };

  const onClickEditMode = (e: any) => {
    setEditMode(!editMode);

    e.preventDefault();
  };

  const classTimes = student.time.map((time, index) => {
    return {
      time,
      day: student.day[index],
    };
  });

  return (
    <form
      action={`/students`}
      className="w-full border-4 p-5 "
    >
      <h1 className="text-4xl text-center mb-5">{`${student?.name} (만 ${age}세)`}</h1>
      <StudentDetailEditForm
        student={studentData}
        disabled={!editMode}
      />
      <div className="flex gap-20 justify-center">
        <button
          className={BUTTON_CLASS + ' border-primary-color bg-primary-color'}
          onClick={onClickEditMode}
        >
          {`${!editMode ? '수정하기' : '수정완료'}`}
        </button>
        <button className={BUTTON_CLASS + 'border-red-400 bg-red-400'}>{`${!editMode ? '뒤로' : '취소'}`}</button>
      </div>
    </form>
  );
}
