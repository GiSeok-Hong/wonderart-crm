'use client';
import { DAY_OPTION } from '@/consts/day-option';
import { GUARDIANS_INTERESTING_OPTION } from '@/consts/guardians-interesting-option';
import { REASON_OPTION } from '@/consts/reason-option';
import { TIME_OPTION } from '@/consts/time-option';
import { Guardian, Sex, Student } from '@prisma/client';
import moment from 'moment';
import { forwardRef } from 'react';
import { useForm } from 'react-hook-form';

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

export default function StudentDetailEditForm({
  student,
  disabled,
}: {
  student: Student & { guardian: Pick<Guardian, 'name' | 'phone'> };
  disabled: boolean;
}) {
  console.log({ student });
  const { register } = useForm<UpdateStudentForm>({
    defaultValues: {
      address: student.address,
      birthDate: moment(student.birthDate).format('YYYY.MM.DD'),
      entranceDate: moment(student.entranceDate).format('YYYY.MM.DD'),
      guardianName: student.guardian.name,
      guardianPhone: student.guardian.phone,
      name: student.name,
      phone: student.phone,
      sex: student.sex,
      school: student.school,
      time: student.time,
      day: student.day,
      experience: student.experience,
      reason: student.reason,
      importantActivity: student.importantActivity,
      interestingActivity: student.interestingActivity,
      teacherMemo: student.teacherMemo,
      caution: student.caution,
    },
  });
  return (
    <div className="flex flex-col w-full gap-2 mb-7">
      <FlexRow>
        <FlexRowItem>
          <Label>입학날짜</Label>
          <Input
            disabled={disabled}
            {...register('entranceDate')}
          />
        </FlexRowItem>
        <FlexRowItem>
          <Label>수업 시간</Label>
          <FlexColumnItem>
            <Select
              disabled={disabled}
              {...register('day.0')}
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
              disabled={disabled}
              {...register('time.0')}
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
              disabled={disabled}
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
              disabled={disabled}
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
            disabled={disabled}
            {...register('name')}
          />
        </FlexRowItem>
        <FlexRowItem>
          <Label>학생 연락처</Label>
          <Input
            disabled={disabled}
            {...register('phone')}
          />
        </FlexRowItem>
      </FlexRow>
      <FlexRow>
        <FlexRowItem>
          <Label>생년월일</Label>
          <Input
            disabled={disabled}
            {...register('birthDate')}
          />
        </FlexRowItem>
        <FlexRowItem>
          <Label>성별</Label>
          <Select
            disabled={disabled}
            {...register('sex')}
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
            disabled={disabled}
            {...register('guardianName')}
          />
        </FlexRowItem>
        <FlexRowItem>
          <Label>보호자 연락처</Label>
          <Input
            disabled={disabled}
            {...register('guardianPhone')}
          />
        </FlexRowItem>
      </FlexRow>
      <FlexRow>
        <FlexRowItem style={{ flex: 1 }}>
          <Label>주소</Label>
          <Input
            disabled={disabled}
            style={{ flex: 1 }}
            {...register('address')}
          />
        </FlexRowItem>
      </FlexRow>
      <FlexRow>
        <FlexRowItem>
          <Label>학교 / 유치원</Label>
          <Input
            disabled={disabled}
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
          disabled={disabled}
          style={{ width: '100%', padding: '10px' }}
          {...register('experience')}
        />
      </div>
      <div>
        <p className="text-lg font-normal">원더아트 스튜디오를 선택한 이유</p>
        <Select
          disabled={disabled}
          {...register('reason')}
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
          disabled={disabled}
          {...register('importantActivity')}
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
          disabled={disabled}
          {...register('interestingActivity')}
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
          disabled={disabled}
        />
      </div>
      <div>
        <p className="text-lg font-normal">선생님 메모</p>
        <Input
          style={{ width: '100%', padding: '10px' }}
          {...register('teacherMemo')}
          disabled={disabled}
        />
      </div>
    </div>
  );
}

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

const RadioButton = ({ children, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type="radio"
      {...props}
    />
  );
};
