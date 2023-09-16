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
};
export default function StudentDetailForm({
  studentData,
}: {
  studentData: Student & { guardian: { name: string; phone: string } };
}) {
  const { register, handleSubmit, setValue, watch } = useForm<UpdateStudentForm>({
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
    },
  });
  const [editMode, setEditMode] = useState(false);

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
    const { entranceDate, birthDate, day, time, ...rest } = data;
    const body = {
      ...rest,
      entranceDate: moment(entranceDate, 'YYYY.MM.DD').toDate(),
      birthDate: moment(birthDate, 'YYYY.MM.DD').toDate(),
      day: day.map(Number).filter(Boolean),
      time: time.map(Number).filter(Boolean),
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
    if (errors.importantActivity) {
      alert('학부모님이 가장 중요하다고 생각하는 미술활동을 선택해주세요.');
    }
    if (errors.interestingActivity) {
      alert('학생이 가장 흥미있어 하는 미술활동을 선택해주세요.');
    }
    if (errors.experience) {
      alert('원더아트 스튜디오에 등록하기 전 미술활동 경험을 입력해주세요.');
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
          </FlexRowItem>
        </FlexRow>
        <FlexRow>
          <FlexRowItem>
            <Label>학생명</Label>
            <Input
              disabled={!editMode}
              {...register('name', { required: true })}
            />
          </FlexRowItem>
          <FlexRowItem>
            <Label>학생 연락처</Label>
            <Input
              disabled={!editMode}
              {...(register('phone'),
              {
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
            <Select
              disabled={!editMode}
              {...register('sex', { required: true })}
            >
              <Option value={Sex.MALE}>남</Option>
              <Option value={Sex.FEMALE}>여</Option>
            </Select>
          </FlexRowItem>
        </FlexRow>
        <FlexRow>
          <FlexRowItem>
            <Label>보호자명</Label>
            <Input
              disabled={!editMode}
              {...register('guardianName')}
            />
          </FlexRowItem>
          <FlexRowItem>
            <Label>보호자 연락처</Label>
            <Input
              disabled={!editMode}
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
              {...register('address', { required: true })}
            />
          </FlexRowItem>
        </FlexRow>
        <FlexRow>
          <FlexRowItem>
            <Label>학교 / 유치원</Label>
            <Input
              disabled={!editMode}
              {...register('school')}
            />
          </FlexRowItem>
          <FlexRowItem>
            <Label>등록 여부</Label>
          </FlexRowItem>
        </FlexRow>
        <div>
          <p className="text-lg font-normal">원더아트 스튜디오에 등록하기 전 미술활동 경험</p>
          <Input
            disabled={!editMode}
            style={{ width: '100%', padding: '10px' }}
            {...register('experience', { required: true })}
          />
        </div>
        <div>
          <p className="text-lg font-normal">원더아트 스튜디오를 선택한 이유</p>
          <Select
            disabled={!editMode}
            {...register('reason', { required: true })}
          >
            {Object.entries(REASON_OPTION).map(([key, value]) => {
              return (
                <Option
                  key={key}
                  value={key}
                >
                  {value}
                </Option>
              );
            })}
          </Select>
        </div>
        <div>
          <p className="text-lg font-normal">학부모님이 가장 중요하다고 생각하는 미술활동</p>
          <Select
            disabled={!editMode}
            {...register('importantActivity', { required: true })}
          >
            {Object.entries(GUARDIANS_INTERESTING_OPTION).map(([key, value]) => {
              return (
                <Option
                  key={key}
                  value={key}
                >
                  {value}
                </Option>
              );
            })}
          </Select>
        </div>
        <div>
          <p className="text-lg font-normal">학생이 가장 흥미있어 하는 미술활동</p>
          <Select
            disabled={!editMode}
            {...register('interestingActivity', { required: true })}
          >
            {Object.entries(GUARDIANS_INTERESTING_OPTION).map(([key, value]) => {
              return (
                <Option
                  key={key}
                  value={key}
                >
                  {value}
                </Option>
              );
            })}
          </Select>
        </div>
        <div>
          <p className="text-lg font-normal">학생에 대해 특별히 알아야 하거나, 주의해야 할 점</p>
          <Input
            style={{ width: '100%', padding: '10px' }}
            {...register('caution')}
            disabled={!editMode}
          />
        </div>
        <div>
          <p className="text-lg font-normal">선생님 메모</p>
          <Input
            style={{ width: '100%', padding: '10px' }}
            {...register('teacherMemo')}
            disabled={!editMode}
          />
        </div>
      </div>
      <div className="flex gap-20 justify-center">
        {editMode ? <SubmitButton /> : <EditButton onClick={handleClick} />}
        <button className={BUTTON_CLASS + 'border-red-400 bg-red-400'}>{`${!editMode ? '뒤로' : '취소'}`}</button>
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

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {}
const FlexRow = ({ children, ...props }: DivProps) => {
  return (
    <div
      className="flex justify-between gap-4"
      {...props}
    >
      {children}
    </div>
  );
};

const FlexRowItem = ({ children, ...props }: DivProps) => {
  return (
    <div
      className="flex gap-3 items-center w-full"
      {...props}
    >
      {children}
    </div>
  );
};

const FlexColumnItem = ({ children, ...props }: DivProps) => {
  return (
    <div
      className="flex items-center gap-2"
      {...props}
    >
      {children}
    </div>
  );
};

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}
const Label = ({ children, ...props }: LabelProps) => {
  return (
    <label
      className="w-28 text-black text-lg font-normal"
      {...props}
    >
      {children}
    </label>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  return (
    <input
      ref={ref}
      className="flex h-11 bg-[#eee] py-2 flex-1 p-2"
      {...props}
    />
  );
});
Input.displayName = 'Input';

const Select = forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>, ref) => {
    return (
      <select
        ref={ref}
        {...props}
      >
        {children}
      </select>
    );
  },
);
Select.displayName = 'Select';

const Option = ({ children, ...props }: React.OptionHTMLAttributes<HTMLOptionElement>) => {
  return <option {...props}>{children}</option>;
};
