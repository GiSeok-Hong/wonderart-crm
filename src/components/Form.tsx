'use client';

import { SubmitErrorHandler, useForm } from 'react-hook-form';
import { ArtActivity, ReasonForChoosing, Sex } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { DAY_OPTION } from '@/consts/day-option';
import { TIME_OPTION } from '@/consts/time-option';
import { REASON_OPTION } from '@/consts/reason-option';
import { GUARDIANS_INTERESTING_OPTION } from '@/consts/guardians-interesting-option';
import { FlexColumnItem, FlexRow, FlexRowItem, Input, InputRadio, Label, Select, Option } from './FormCustomTag';

const BUTTON_CLASS = 'px-10 py-5 border-2 text-xl font-bold rounded-2xl text-white hover:opacity-50 mb-5 ';
const LABEL_CLASS = 'text-lg font-normal block ';

type StudentForm = {
  entranceDate: Date;
  day: number[];
  time: number[];
  name: string;
  phone?: string;
  birthDate: Date;
  sex: Sex;
  guardianName: string;
  guardianPhone: string;
  address: string;
  school?: string;
  experience?: string;
  reason: ReasonForChoosing;
  importantActivity: ArtActivity;
  interestingActivity: ArtActivity;
  caution?: string;
  isCopyrightAgree: string;
};

export default function Form() {
  const router = useRouter();
  const phoneReg = /^01([0|1|6|7|8|9])([0-9]{7,8})$/;
  const [addMode, setAddMode] = useState(false);

  const {
    register,
    handleSubmit,
    unregister,
    formState: { errors },
  } = useForm<StudentForm>({
    mode: 'onSubmit',
    defaultValues: {
      entranceDate: new Date(),
      day: [1],
      time: [14],
      name: '',
      phone: '',
      birthDate: new Date(),
      sex: 'MALE',
      guardianName: '',
      guardianPhone: '',
      address: '',
      school: '',
      experience: '',
      reason: 'RECOMMENDED',
      importantActivity: 'DRAWING',
      interestingActivity: 'DRAWING',
      caution: '',
      isCopyrightAgree: 'NO',
    },
  });

  const onSubmit = async (data: StudentForm) => {
    const isCopyrightAgree = data.isCopyrightAgree === 'YES';

    if (!isCopyrightAgree) {
      return alert(`저작권 동의를 해주세요`);
    }

    const body = {
      entranceDate: data.entranceDate,
      day: data.day.map(Number).filter(Boolean),
      time: data.time.map(Number).filter(Boolean),
      name: data.name,
      phone: data.phone,
      birthDate: data.birthDate,
      sex: data.sex,
      address: data.address,
      school: data.school,
      experience: data.experience,
      reason: data.reason,
      importantActivity: data.importantActivity,
      interestingActivity: data.interestingActivity,
      caution: data.caution,
      isCopyrightAgree,
      guardianName: data.guardianName,
      guardianPhone: data.guardianPhone,
      isRegister: true,
    };

    try {
      const res = await fetch('/registration/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }).then((res) => res.json());

      alert(`${res.message}`);

      if (res?.success) {
        return router.push('/');
      }
    } catch (error) {
      console.log('학생등록 에러 ::: ' + error);
      alert('알 수 없는 에러로 학생등록에 실패했습니다.');
    }
  };

  const onError: SubmitErrorHandler<StudentForm> = (errors) => {
    if (errors.entranceDate) {
      alert('입학일자를 정확히 입력해주세요.');
    }
    if (errors.name) {
      alert('학생명을 입력해주세요.');
    }
    if (errors.phone?.type === 'maxLength' || errors.phone?.type === 'minLength') {
      alert('학생 연락처를 정확히 입력해주세요.');
    }
    if (errors.birthDate) {
      alert('생년월일을 정확히 입력해주세요.');
    }
    if (errors.sex) {
      alert('성별을 정확히 입력해주세요.');
    }
    if (errors.guardianName) {
      alert('보호자명을 정확히 입력해주세요.');
    }
    if (errors.guardianPhone) {
      alert('보호자 연락처를 정확히 입력해주세요.');
    }
    if (errors.address) {
      alert('주소를 입력해주세요.');
    }
    if (errors.reason) {
      alert('원더아트 스튜디오를 선택한 이유를 선택해주세요.');
    }
    if (errors.importantActivity) {
      alert('학부모님께서 가장 중요하다고 생각하는 미술활동을 선택해주세요.');
    }
    if (errors.interestingActivity) {
      alert('학생이 가장 흥미있어 하는 미술활동을 선택해주세요.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="w-full  border-4 p-5 overflow-hidden"
    >
      <h1 className="text-4xl text-center mb-5">입학원서</h1>
      <div className="flex flex-col w-full gap-2 mb-7">
        <FlexRow>
          <FlexRowItem>
            <Label htmlFor="entranceDate">입학일자</Label>
            <Input
              type="date"
              id="entranceDate"
              {...register('entranceDate', {
                required: true,
              })}
              style={{ width: '150px' }}
            />
          </FlexRowItem>
          <FlexRowItem>
            <Label htmlFor="numberOfClass">수업 시간</Label>
            <FlexColumnItem>
              <Select {...register('day.0', { required: true })}>
                {DAY_OPTION.map((day) => (
                  <Option
                    key={day.value}
                    value={day.value}
                  >
                    {day.name}
                  </Option>
                ))}
              </Select>
              <Select {...register('time.0', { required: true })}>
                {TIME_OPTION.map((time) => (
                  <Option
                    key={time.value}
                    value={time.value}
                  >
                    {time.name}
                  </Option>
                ))}
              </Select>
            </FlexColumnItem>
            {addMode ? (
              <FlexColumnItem>
                <Select {...register('day.1')}>
                  {DAY_OPTION.map((day) => (
                    <Option
                      key={day.value}
                      value={day.value}
                    >
                      {day.name}
                    </Option>
                  ))}
                </Select>
                <Select {...register('time.1')}>
                  {TIME_OPTION.map((time) => (
                    <Option
                      key={time.name}
                      value={time.value}
                    >
                      {time.name}
                    </Option>
                  ))}
                </Select>
              </FlexColumnItem>
            ) : (
              <></>
            )}
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
          </FlexRowItem>
        </FlexRow>

        <FlexRow>
          <FlexRowItem>
            <Label htmlFor="name">학생명</Label>
            <Input
              type="text"
              id="name"
              {...register('name', { required: true, maxLength: 5 })}
              placeholder="홍길동"
              style={{ width: '150px' }}
              maxLength={5}
            />
          </FlexRowItem>
          <FlexRowItem>
            <Label htmlFor="phone">학생 연락처</Label>
            <Input
              type="text"
              id="phone"
              {...register('phone', {
                minLength: 11,
                maxLength: 11,
                pattern: {
                  value: phoneReg,
                  message: '학생 핸드폰 형식에 맞지 않습니다.',
                },
              })}
              maxLength={11}
              placeholder="01012345678"
              style={{ width: '150px' }}
            />
          </FlexRowItem>
        </FlexRow>

        <FlexRow>
          <FlexRowItem>
            <Label htmlFor="birthDate">생년월일</Label>
            <Input
              type="date"
              id="birthDate"
              {...register('birthDate', { required: true })}
              style={{ width: '150px' }}
            />
          </FlexRowItem>
          <FlexRowItem>
            <Label htmlFor="sex">성별</Label>
            <label className="mr-5">
              <InputRadio
                value={Sex.MALE}
                {...register('sex', { required: true })}
              />
              남
            </label>
            <label className="mr-5">
              <InputRadio
                value={Sex.FEMALE}
                {...register('sex', { required: true })}
              />
              여
            </label>
          </FlexRowItem>
        </FlexRow>

        <FlexRow>
          <FlexRowItem>
            <Label htmlFor="guardianName">보호자명</Label>
            <Input
              type="text"
              id="guardianName"
              {...register('guardianName', { required: true, maxLength: 5 })}
              placeholder="홍길동"
              style={{ width: '150px' }}
              maxLength={5}
            />
          </FlexRowItem>
          <FlexRowItem>
            <Label htmlFor="guardianPhone">보호자 연락처</Label>
            <Input
              type="text"
              id="guardianPhone"
              {...register('guardianPhone', {
                required: true,
                minLength: 11,
                maxLength: 11,
                pattern: {
                  value: phoneReg,
                  message: '보호자 핸드폰 형식에 맞지 않습니다.',
                },
              })}
              placeholder="01012345678"
              maxLength={11}
              style={{ width: '150px' }}
            />
          </FlexRowItem>
        </FlexRow>

        <FlexRow>
          <FlexRowItem style={{ flex: 1 }}>
            <Label htmlFor="address">주소</Label>
            <Input
              type="text"
              id="address"
              {...register('address', {
                required: true,
                maxLength: 100,
              })}
              style={{ flex: 1 }}
              maxLength={100}
              placeholder="경기도 가나시 나나1로 12 동글아파트 111동 1234호"
            />
          </FlexRowItem>
        </FlexRow>

        <FlexRow>
          <FlexRowItem>
            <Label htmlFor="school">학교 / 유치원</Label>
            <Input
              type="text"
              id="school"
              {...register('school', { maxLength: 20 })}
              style={{ width: '150px' }}
              maxLength={20}
              placeholder="동글초등학교"
            />
          </FlexRowItem>
        </FlexRow>

        <div>
          <label
            htmlFor="experience"
            className={LABEL_CLASS}
          >
            원더아트 스튜디오에 등록하기 전 미술활동 경험이 있나요?
          </label>
          <Input
            id="experience"
            style={{ width: '100%', padding: '10px' }}
            {...register('experience', { maxLength: 100 })}
            maxLength={100}
          />
        </div>

        <div>
          <label
            htmlFor="reason"
            className={LABEL_CLASS}
          >
            원더아트 스튜디오를 선택하신 이유는 무엇인가요?
          </label>
          {Object.entries(REASON_OPTION).map(([key, value]) => {
            return (
              <label
                className="mr-5"
                key={key}
              >
                <InputRadio
                  value={key}
                  {...register('reason', { required: true })}
                />
                {value}
              </label>
            );
          })}
        </div>

        <div>
          <label
            htmlFor="importantActivity"
            className={LABEL_CLASS}
          >
            평소에 학부모님께서 가장 중요하다고 생각하신 미술활동은 무엇인가요?
          </label>
          {Object.entries(GUARDIANS_INTERESTING_OPTION).map(([key, value]) => {
            return (
              <label
                className="mr-5"
                key={key}
              >
                <InputRadio
                  value={key}
                  {...register('importantActivity', { required: true })}
                />
                {value}
              </label>
            );
          })}
        </div>

        <div>
          <label
            htmlFor="interestingActivity"
            className={LABEL_CLASS}
          >
            평소에 학생이 가장 흥미있어 하는 미술활동은 무엇인가요?
          </label>
          {Object.entries(GUARDIANS_INTERESTING_OPTION).map(([key, value]) => {
            return (
              <label
                className="mr-5"
                key={key}
              >
                <InputRadio
                  value={key}
                  {...register('interestingActivity', { required: true })}
                />
                {value}
              </label>
            );
          })}
        </div>

        <div>
          <label
            htmlFor="caution"
            className={LABEL_CLASS}
          >
            교사가 학생에 대해 특별히 알아야 하거나, 주의해야 할 점을 적어주세요
          </label>
          <Input
            id="caution"
            {...register('caution', { maxLength: 200 })}
            style={{ width: '100%', padding: '10px' }}
            maxLength={200}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="isCopyrightAgree"
            className={LABEL_CLASS}
          >
            원더아트 스튜디오에서 작업한 모든 작품과 사진의 저작권은 <br />
            원더아트 스튜디오에 있음에 동의하십니까?
          </label>
          <label className="mr-5">
            <InputRadio
              value="YES"
              {...register('isCopyrightAgree', { required: true })}
            />
            예
          </label>
          <label className="mr-5">
            <InputRadio
              value="NO"
              {...register('isCopyrightAgree', { required: true })}
            />
            아니오
          </label>
        </div>
      </div>

      <div className="flex gap-20 justify-center">
        <button className={BUTTON_CLASS + ' border-primary-color bg-primary-color'}>등록</button>
        <button
          type="reset"
          className={BUTTON_CLASS + 'border-red-400 bg-red-400'}
        >
          취소
        </button>
      </div>
    </form>
  );
}
