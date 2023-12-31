'use client';

import { ChangeEvent, forwardRef, useState } from 'react';
import { Sex, type Student } from '@prisma/client';
import { getAge } from '@/helper/age';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import moment from 'moment';
import { DAY_OPTION } from '@/consts/day-option';
import { REASON_OPTION } from '@/consts/reason-option';
import { GUARDIANS_INTERESTING_OPTION } from '@/consts/guardians-interesting-option';
import { TIME_OPTION } from '@/consts/time-option';
import { useRouter } from 'next/navigation';
import { FlexColumnItem, FlexRow, FlexRowItem, Input, InputRadio, Label, Select, Option } from './FormCustomTag';

const BUTTON_CLASS = 'px-10 py-5 border-2 text-xl font-bold rounded-2xl text-white hover:opacity-50 mb-5 ';

type UpdateStudentForm = {
  name: string;
  phone: string | null;
  birthDate: string;
  entranceDate: string;
  time: number[];
  day: number[];
  guardianName: string;
  guardianPhone: string;
  address: string;
  school?: string | null;
  sex: Sex;
  experience: string | null;
  reason: string;
  importantActivity: string;
  interestingActivity: string;
  teacherMemo: string | null;
  caution: string | null;
  isRegister: 'YES' | 'NO';
};
export default function StudentDetailForm({
  studentData,
}: {
  studentData: Student & { guardian: { name: string; phone: string } };
}) {
  const router = useRouter();
  const { register, handleSubmit, setValue, watch, unregister } = useForm<UpdateStudentForm>({
    defaultValues: {
      address: studentData?.address,
      birthDate: moment(studentData?.birthDate).format('YYYY.MM.DD'),
      entranceDate: moment(studentData?.entranceDate).format('YYYY.MM.DD'),
      guardianName: studentData?.guardian.name,
      guardianPhone: studentData?.guardian.phone,
      name: studentData?.name,
      phone: studentData?.phone,
      sex: studentData?.sex,
      school: studentData?.school,
      time: studentData?.time,
      day: studentData?.day,
      experience: studentData?.experience,
      reason: studentData?.reason,
      importantActivity: studentData?.importantActivity,
      interestingActivity: studentData?.interestingActivity,
      teacherMemo: studentData?.teacherMemo,
      caution: studentData?.caution,
      isRegister: studentData?.isRegister ? 'YES' : 'NO',
    },
  });
  const [editMode, setEditMode] = useState(false);

  const [addMode, setAddMode] = useState(studentData.day[1] !== undefined && studentData.time[1] !== undefined);

  const age = getAge(studentData?.birthDate);

  const handleClick = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, type: 'entranceDate' | 'birthDate') => {
    let val = e.target.value.replace(/\D/g, '');
    let length = val.length;
    let result = '';

    if (length < 6) result = val;
    else if (length < 8) {
      result += val.substring(0, 4);
      result += '.';
      result += val.substring(4);
    } else {
      result += val.substring(0, 4);
      result += '.';
      result += val.substring(4, 6);
      result += '.';
      result += val.substring(6);
    }
    setValue(type, result);
  };

  const onSubmit: SubmitHandler<UpdateStudentForm> = async (data: UpdateStudentForm) => {
    const { entranceDate, birthDate, day, time, isRegister, ...rest } = data;
    const body = {
      ...rest,
      entranceDate: moment(entranceDate, 'YYYY.MM.DD').toDate(),
      birthDate: moment(birthDate, 'YYYY.MM.DD').toDate(),
      day: day.map(Number).filter(Boolean),
      time: time.map(Number).filter(Boolean),
      isRegister: isRegister === 'YES',
    };
    try {
      await fetch(`/api/student/${studentData?.id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      alert('수정에 실패했습니다.');
    } finally {
      setEditMode(false);
    }
  };

  const onError: SubmitErrorHandler<UpdateStudentForm> = (errors) => {
    if (errors.birthDate) {
      alert('생년월일을 정확히 입력해주세요.');
    }
    if (errors.entranceDate) {
      alert('입학날짜를 정확히 입력해주세요.');
    }
    if (errors.name) {
      alert('학생명을 입력해주세요.');
    }
    if (errors.address) {
      alert('주소를 입력해주세요.');
    }
    if (errors.reason) {
      alert('원더아트 스튜디오를 선택한 이유를 선택해주세요.');
    }
    if (errors.phone?.type === 'maxLength' || errors.phone?.type === 'minLength') {
      alert('학생 연락처를 정확히 입력해주세요.');
    }
    if (errors.guardianPhone?.type === 'maxLength' || errors.guardianPhone?.type === 'minLength') {
      alert('보호자 연락처를 정확히 입력해주세요.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="w-full border-4 p-5 "
    >
      <h1 className="text-4xl text-center mb-5">{`${studentData?.name} (만 ${age}세)`}</h1>
      <div className="flex flex-col w-full gap-2 mb-7">
        <FlexRow>
          <FlexRowItem>
            <Label>입학날짜</Label>
            <Input
              disabled={!editMode}
              maxLength={10}
              style={{ width: '150px' }}
              {...register('entranceDate', {
                required: true,
                minLength: 10,
                maxLength: 10,
                validate: (value) => value.length === 10 && moment(value, 'YYYY.MM.DD').isValid(),
                onChange: (e) => handleInputChange(e, 'entranceDate'),
              })}
            />
          </FlexRowItem>
          <FlexRowItem>
            <Label>수업 시간</Label>
            <FlexColumnItem>
              <Select
                disabled={!editMode}
                {...register('day.0', { required: true })}
              >
                {DAY_OPTION.map((day) => {
                  return (
                    <Option
                      key={day.value}
                      value={day.value}
                    >
                      {day.name}
                    </Option>
                  );
                })}
              </Select>
              <Select
                disabled={!editMode}
                {...register('time.0', { required: true })}
              >
                {TIME_OPTION.map((time) => {
                  return (
                    <Option
                      key={time.value}
                      value={time.value}
                    >
                      {time.name}
                    </Option>
                  );
                })}
              </Select>
            </FlexColumnItem>

            {addMode ? (
              <FlexColumnItem>
                <Select
                  disabled={!editMode}
                  {...register('day.1')}
                >
                  {DAY_OPTION.map((day) => {
                    return (
                      <Option
                        key={day.value}
                        value={day.value}
                      >
                        {day.name}
                      </Option>
                    );
                  })}
                </Select>
                <Select
                  disabled={!editMode}
                  {...register('time.1')}
                >
                  {TIME_OPTION.map((time) => {
                    return (
                      <Option
                        key={time.value}
                        value={time.value}
                      >
                        {time.name}
                      </Option>
                    );
                  })}
                </Select>
              </FlexColumnItem>
            ) : (
              <></>
            )}
            {editMode ? (
              <button
                type="button"
                className="border px-1"
                onClick={() => {
                  if (addMode) {
                    unregister('time.1');
                    unregister('day.1');
                  }
                  setAddMode(!addMode);
                }}
              >
                {!addMode ? '추가' : '삭제'}
              </button>
            ) : (
              <></>
            )}
          </FlexRowItem>
        </FlexRow>
        <FlexRow>
          <FlexRowItem>
            <Label>학생명</Label>
            <Input
              disabled={!editMode}
              style={{ width: '150px' }}
              {...register('name', { required: true, maxLength: 5 })}
            />
          </FlexRowItem>
          <FlexRowItem>
            <Label>학생 연락처</Label>
            <Input
              disabled={!editMode}
              style={{ width: '150px' }}
              {...register('phone', {
                minLength: 11,
                maxLength: 11,
              })}
            />
          </FlexRowItem>
        </FlexRow>
        <FlexRow>
          <FlexRowItem>
            <Label>생년월일</Label>
            <Input
              disabled={!editMode}
              maxLength={10}
              style={{ width: '150px' }}
              {...register('birthDate', {
                required: true,
                minLength: 10,
                maxLength: 10,
                validate: (value) => value.length === 10 && moment(value, 'YYYY.MM.DD').isValid(),
                onChange: (e) => handleInputChange(e, 'birthDate'),
              })}
            />
          </FlexRowItem>
          <FlexRowItem>
            <Label>성별</Label>
            <label className="mr-5">
              <InputRadio
                disabled={!editMode}
                value={Sex.MALE}
                {...register('sex', { required: true })}
              />
              남
            </label>
            <label className="mr-5">
              <InputRadio
                disabled={!editMode}
                value={Sex.FEMALE}
                {...register('sex', { required: true })}
              />
              여
            </label>
          </FlexRowItem>
        </FlexRow>
        <FlexRow>
          <FlexRowItem>
            <Label>보호자명</Label>
            <Input
              disabled={!editMode}
              style={{ width: '150px' }}
              {...register('guardianName', { maxLength: 5 })}
            />
          </FlexRowItem>
          <FlexRowItem>
            <Label>보호자 연락처</Label>
            <Input
              disabled={!editMode}
              style={{ width: '150px' }}
              {...register('guardianPhone', {
                minLength: 11,
                maxLength: 11,
              })}
            />
          </FlexRowItem>
        </FlexRow>
        <FlexRow>
          <FlexRowItem style={{ flex: 1 }}>
            <Label>주소</Label>
            <Input
              disabled={!editMode}
              style={{ flex: 1 }}
              {...register('address', { required: true, maxLength: 100 })}
            />
          </FlexRowItem>
        </FlexRow>
        <FlexRow>
          <FlexRowItem>
            <Label>학교 / 유치원</Label>
            <Input
              disabled={!editMode}
              style={{ width: '150px' }}
              {...register('school', { maxLength: 20 })}
            />
          </FlexRowItem>
          <FlexRowItem>
            <Label>등록 여부</Label>
            <label className="mr-5">
              <InputRadio
                disabled={!editMode}
                value={'YES'}
                {...register('isRegister', { required: true })}
              />
              등록
            </label>
            <label className="mr-5">
              <InputRadio
                disabled={!editMode}
                value={'NO'}
                {...register('isRegister', { required: true })}
              />
              퇴원
            </label>
          </FlexRowItem>
        </FlexRow>
        <div>
          <p className="text-lg font-normal">원더아트 스튜디오에 등록하기 전 미술활동 경험</p>
          <Input
            disabled={!editMode}
            style={{ width: '100%', padding: '10px' }}
            {...register('experience', { maxLength: 100 })}
          />
        </div>
        <div>
          <p className="text-lg font-normal">원더아트 스튜디오를 선택한 이유</p>
          {Object.entries(REASON_OPTION).map(([key, value]) => {
            return (
              <label
                className="mr-5"
                key={key}
              >
                <InputRadio
                  disabled={!editMode}
                  value={key}
                  {...register('reason', { required: true })}
                />
                {value}
              </label>
            );
          })}
        </div>
        <div>
          <p className="text-lg font-normal">학부모님이 가장 중요하다고 생각하는 미술활동</p>
          {Object.entries(GUARDIANS_INTERESTING_OPTION).map(([key, value]) => {
            return (
              <label
                className="mr-5"
                key={key}
              >
                <InputRadio
                  disabled={!editMode}
                  value={key}
                  {...register('importantActivity', { required: true })}
                />
                {value}
              </label>
            );
          })}
        </div>
        <div>
          <p className="text-lg font-normal">학생이 가장 흥미있어 하는 미술활동</p>
          {Object.entries(GUARDIANS_INTERESTING_OPTION).map(([key, value]) => {
            return (
              <label
                className="mr-5"
                key={key}
              >
                <InputRadio
                  disabled={!editMode}
                  value={key}
                  {...register('interestingActivity', { required: true })}
                />
                {value}
              </label>
            );
          })}
        </div>
        <div>
          <p className="text-lg font-normal">학생에 대해 특별히 알아야 하거나, 주의해야 할 점</p>
          <Input
            style={{ width: '100%', padding: '10px' }}
            {...register('caution', { maxLength: 200 })}
            disabled={!editMode}
          />
        </div>
        <div>
          <p className="text-lg font-normal">선생님 메모</p>
          <Input
            style={{ width: '100%', padding: '10px' }}
            {...register('teacherMemo', { maxLength: 200 })}
            disabled={!editMode}
          />
        </div>
      </div>
      <div className="flex gap-20 justify-center">
        {editMode ? <SubmitButton /> : <EditButton onClick={handleClick} />}
        <button
          type="button"
          onClick={() => {
            if (editMode) {
              setEditMode(false);
            } else {
              router.back();
            }
          }}
          className={BUTTON_CLASS + 'border-red-400 bg-red-400'}
        >{`${!editMode ? '뒤로' : '취소'}`}</button>
      </div>
    </form>
  );
}

const EditButton = ({ onClick }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={BUTTON_CLASS + ' border-primary-color bg-primary-color'}
      onClick={onClick}
    >
      수정하기
    </button>
  );
};

const SubmitButton = () => {
  return (
    <button
      className={BUTTON_CLASS + ' border-primary-color bg-primary-color'}
      type="submit"
    >
      수정완료
    </button>
  );
};
