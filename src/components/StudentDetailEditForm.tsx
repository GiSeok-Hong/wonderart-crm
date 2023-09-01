'use client';
import { DAY_OPTION } from '@/consts/day-option';
import { REASON_OPTION } from '@/consts/reason-option';
import { TIME_OPTION } from '@/consts/time-option';
import { Student } from '@prisma/client';
import { type ReactNode } from 'react';

export default function StudentDetailEditForm({ student }: { student: Student }) {
  return (
    <div className="flex flex-col w-full gap-2">
      <FlexRow>
        <FlexRowItem>
          <Label>입학날짜</Label>
          <Input />
        </FlexRowItem>
        <FlexRowItem>
          <Label>수업 시간</Label>
          <FlexColumnItem>
            <Select>
              {DAY_OPTION.map((day) => {
                return <Option key={day.value}>{day.name}</Option>;
              })}
            </Select>
            <Select>
              {TIME_OPTION.map((time) => {
                return <Option key={time.value}>{time.name}</Option>;
              })}
            </Select>
          </FlexColumnItem>
          <FlexColumnItem>
            <Select>
              {DAY_OPTION.map((day) => {
                return <Option key={day.value}>{day.name}</Option>;
              })}
            </Select>
            <Select>
              {TIME_OPTION.map((time) => {
                return <Option key={time.value}>{time.name}</Option>;
              })}
            </Select>
          </FlexColumnItem>
        </FlexRowItem>
      </FlexRow>
      <FlexRow>
        <FlexRowItem>
          <Label>학생명</Label>
          <Input />
        </FlexRowItem>
        <FlexRowItem>
          <Label>학생 연락처</Label>
          <Input />
        </FlexRowItem>
      </FlexRow>
      <FlexRow>
        <FlexRowItem>
          <Label>생년월일</Label>
          <Input />
        </FlexRowItem>
        <FlexRowItem>
          <Label>성별</Label>
          <Input />
        </FlexRowItem>
      </FlexRow>
      <FlexRow>
        <FlexRowItem>
          <Label>보호자명</Label>
          <Input />
        </FlexRowItem>
        <FlexRowItem>
          <Label>보호자 연락처</Label>
          <Input />
        </FlexRowItem>
      </FlexRow>
      <FlexRow>
        <FlexRowItem style={{ flex: 1 }}>
          <Label>주소</Label>
          <Input style={{ flex: 1 }} />
        </FlexRowItem>
      </FlexRow>
      <FlexRow>
        <FlexRowItem>
          <Label>학교 / 유치원</Label>
          <Input />
        </FlexRowItem>
        <FlexRowItem>
          <Label>등록 여부</Label>
        </FlexRowItem>
      </FlexRow>
      <div>
        <p className="text-lg font-normal">원더아트 스튜디오에 등록하기 전 미술활동 경험</p>
        <Input style={{ width: '100%', padding: '10px' }} />
      </div>
      <div>
        <p className="text-lg font-normal">원더아트 스튜디오에 등록하기 전 미술활동 경험</p>
        <Select>
          {Object.entries(REASON_OPTION).map(([key, value]) => {
            return <Option key={key}>{value}</Option>;
          })}
        </Select>
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
      className="flex gap-3 items-center"
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
const Input = (props: InputProps) => {
  return (
    <input
      className="flex h-11 bg-[#eee] py-2"
      {...props}
    />
  );
};

const Select = ({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) => {
  return <select {...props}>{children}</select>;
};

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
