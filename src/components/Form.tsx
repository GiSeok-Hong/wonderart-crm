'use client';

import { useForm } from 'react-hook-form';
import { Agree, ArtActivity, ReasonForChoosing, Sex } from '../../prisma';

const DIV_CLASS = 'mb-5 ';
const LABEL_CLASS = 'text-xl font-bold inline-block min-w-label ';
const INPUT_CLASS = 'bg-gray-200 text-center text-xl ml-1 mr-6';
const TEXTAREA_CLASS = 'bg-gray-200 text-xl w-full resize-none';
const UNDERLINE_CLASS = ' block w-full mb-1';
const BUTTON_CLASS = 'px-10 py-5 border-2 text-xl font-bold rounded-2xl text-white hover:opacity-50 mb-5 ';
const SELECT_DIV_CLASS = 'text-center text-xl inline-block  border-black border-[1px]';
const SELECT_CLASS = 'bg-gray-200 px-1 py-1 ';
const DAY_OPTION = [
  {
    value: 0,
    name: '없음',
  },
  {
    value: 1,
    name: '월',
  },
  {
    value: 2,
    name: '화',
  },
  {
    value: 3,
    name: '수',
  },
  {
    value: 4,
    name: '목',
  },
  {
    value: 5,
    name: '금',
  },
];

const TIME_OPTION = [
  {
    value: 0,
    name: '없음',
  },
  {
    value: 14,
    name: '2시',
  },
  {
    value: 15,
    name: '3시',
  },
  {
    value: 16,
    name: '4시',
  },
  {
    value: 17,
    name: '5시',
  },
  {
    value: 18,
    name: '6시',
  },
];

type InputStudent = {
  entranceDate: Date;
  day1: number;
  time1: number;
  day2: number;
  time2: number;
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
  agree: Agree;
};

export default function Form() {
  const phoneReg = /^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputStudent>({
    mode: 'onSubmit',
    defaultValues: {
      entranceDate: new Date(),
      day1: 1,
      time1: 14,
      day2: 0,
      time2: 0,
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
      agree: 'NO',
    },
  });

  const onSubmit = async (data: InputStudent) => {
    console.log('onSubmit data ::: ' + JSON.stringify(data));
    const dayArr = [Number(data.day1)];
    if (data.day2 !== 0) dayArr.push(Number(data.day2));
    const timeArr = [Number(data.time1)];
    if (data.time2 !== 0) timeArr.push(Number(data.time2));

    const body = {
      entranceDate: data.entranceDate,
      day: dayArr,
      time: timeArr,
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
      agree: data.agree,
      guardianName: data.guardianName,
      guardianPhone: data.guardianPhone,
    };

    const res = await fetch('/registration/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());

    console.log('res 는 ??? ' + JSON.stringify(res));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full  border-4 p-5 overflow-hidden"
    >
      <h1 className="text-4xl text-center mb-5">입학원서</h1>
      <div className={DIV_CLASS}>
        <label
          htmlFor="entranceDate"
          className={LABEL_CLASS}
        >
          입학일자
        </label>
        <input
          type="date"
          id="entranceDate"
          {...register('entranceDate', {
            required: true,
          })}
          className={INPUT_CLASS}
          placeholder="2023.01.01"
        />
        <label
          htmlFor="numberOfClass"
          className={LABEL_CLASS}
        >
          수업 시간
        </label>
        <div className={SELECT_DIV_CLASS}>
          <select
            id="day1"
            className={SELECT_CLASS}
            {...register('day1')}
          >
            {DAY_OPTION.map((option) => (
              <option
                key={option.name}
                value={option.value}
              >
                {option.name}
              </option>
            ))}
          </select>
          <select
            id="time1"
            className={SELECT_CLASS}
            {...register('time1')}
          >
            {TIME_OPTION.map((option) => (
              <option
                key={option.name}
                value={option.value}
              >
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div className={SELECT_DIV_CLASS + ' ml-2'}>
          <select
            id="day2"
            className={SELECT_CLASS}
            {...register('day2')}
          >
            {DAY_OPTION.map((option) => (
              <option
                key={option.name}
                value={option.value}
              >
                {option.name}
              </option>
            ))}
          </select>
          <select
            id="time2"
            className={SELECT_CLASS}
            {...register('time2')}
          >
            {TIME_OPTION.map((option) => (
              <option
                key={option.name}
                value={option.value}
              >
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={DIV_CLASS}>
        <label
          htmlFor="name"
          className={LABEL_CLASS}
        >
          학생명
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: true, maxLength: 5 })}
          className={INPUT_CLASS}
          placeholder="홍길동"
          size={10}
          maxLength={5}
        />
        <label
          htmlFor="phone"
          className={LABEL_CLASS}
        >
          학생 연락처
        </label>
        <input
          type="text"
          id="phone"
          {...register('phone', {
            maxLength: 13,
            pattern: {
              value: phoneReg,
              message: '학생 핸드폰 형식에 맞지 않습니다.',
            },
          })}
          className={INPUT_CLASS}
          placeholder="010-1234-1234"
          size={15}
        />
      </div>
      <div className={DIV_CLASS}>
        <label
          htmlFor="birthDate"
          className={LABEL_CLASS}
        >
          생년월일
        </label>
        <input
          type="date"
          id="birthDate"
          {...register('birthDate', { required: true })}
          className={INPUT_CLASS}
          placeholder="2023.01.01"
          size={10}
        />
        <label
          htmlFor="sex"
          className={LABEL_CLASS}
        >
          성별
        </label>
        <label className="text-xl ml-1 mr-5">
          <input
            type="radio"
            className="mr-2"
            value="MALE"
            {...register('sex')}
          />
          남
        </label>
        <label className="text-xl ml-1 mr-5">
          <input
            type="radio"
            className="mr-2"
            value="FEMALE"
            {...register('sex')}
          />
          여
        </label>
      </div>
      <div className={DIV_CLASS}>
        <label
          htmlFor="guardianName"
          className={LABEL_CLASS}
        >
          보호자명
        </label>
        <input
          type="text"
          id="guardianName"
          {...register('guardianName', { required: true, maxLength: 5 })}
          className={INPUT_CLASS}
          placeholder="홍길동"
          size={10}
          maxLength={5}
        />
        <label
          htmlFor="guardianPhone"
          className={LABEL_CLASS}
        >
          보호자 연락처
        </label>
        <input
          type="text"
          id="guardianPhone"
          {...register('guardianPhone', {
            required: true,
            maxLength: 13,
            pattern: {
              value: phoneReg,
              message: '보호자 핸드폰 형식에 맞지 않습니다.',
            },
          })}
          className={INPUT_CLASS}
          placeholder="010-1234-1234"
          size={15}
        />
      </div>
      <div className={DIV_CLASS}>
        <label
          htmlFor="address"
          className={LABEL_CLASS}
        >
          주소
        </label>
        <input
          type="text"
          id="address"
          {...register('address', {
            required: true,
            maxLength: 100,
          })}
          className={INPUT_CLASS + ' w-3/4'}
          placeholder="경기도 가나시 나나1로 12 동글아파트 111동 1234호"
        />
      </div>
      <div className={DIV_CLASS}>
        <label
          htmlFor="school"
          className={LABEL_CLASS}
        >
          학교 / 유치원
        </label>
        <input
          type="text"
          id="school"
          {...register('school', { maxLength: 20 })}
          className={INPUT_CLASS}
          placeholder="동글초등학교"
        />
      </div>
      <div className={DIV_CLASS}>
        <label
          htmlFor="experience"
          className={LABEL_CLASS + UNDERLINE_CLASS}
        >
          원더아트 스튜디오에 등록하기 전 미술활동 경험이 있나요?
        </label>
        <textarea
          id="experience"
          {...register('experience', { maxLength: 100 })}
          className={TEXTAREA_CLASS}
        ></textarea>
      </div>
      <div className={DIV_CLASS}>
        <label
          htmlFor="reason"
          className={LABEL_CLASS + UNDERLINE_CLASS}
        >
          원더아트 스튜디오를 선택하신 이유는 무엇인가요?
        </label>
        <label className="text-xl ml-1 mr-5">
          <input
            type="radio"
            className="mr-2"
            value="RECOMMENDED"
            {...register('reason')}
          />
          지인추천
        </label>
        <label className="text-xl ml-1 mr-5">
          <input
            type="radio"
            className="mr-2"
            value="LOCATION"
            {...register('reason')}
          />
          위치
        </label>
        <label className="text-xl ml-1 mr-5">
          <input
            type="radio"
            className="mr-2"
            value="GOSSIP"
            {...register('reason')}
          />
          주변소문
        </label>
        <label className="text-xl ml-1 mr-5">
          <input
            type="radio"
            className="mr-2"
            value="SEARCHED"
            {...register('reason')}
          />
          검색
        </label>
        <label className="text-xl ml-1 mr-5">
          <input
            type="radio"
            className="mr-2"
            value="ETC"
            {...register('reason')}
          />
          기타
        </label>
      </div>
      <div className={DIV_CLASS}>
        <label
          htmlFor="importantActivity"
          className={LABEL_CLASS + UNDERLINE_CLASS}
        >
          평소에 학부모님께서 가장 중요하다고 생각하신 미술활동은 무엇인가요?
        </label>
        <label className="text-xl ml-1 mr-5">
          <input
            type="radio"
            className="mr-2"
            value="DRAWING"
            {...register('importantActivity')}
          />
          그리기
        </label>
        <label className="text-xl ml-1 mr-5">
          <input
            type="radio"
            className="mr-2"
            value="MATERIALCLASS"
            {...register('importantActivity')}
          />
          다양한 재료 수업
        </label>
        <label className="text-xl ml-1 mr-5">
          <input
            type="radio"
            className="mr-2"
            value="MASTERPIECECLASS"
            {...register('importantActivity')}
          />
          명화 수업
        </label>
        <label className="text-xl ml-1 mr-5">
          <input
            type="radio"
            className="mr-2"
            value="TECHNIQUECLASS"
            {...register('importantActivity')}
          />
          기법 수업
        </label>
        <label className="text-xl ml-1 mr-5">
          <input
            type="radio"
            className="mr-2"
            value="ETC"
            {...register('importantActivity')}
          />
          기타
        </label>
      </div>
      <div className={DIV_CLASS}>
        <label
          htmlFor="interestingActivity"
          className={LABEL_CLASS + UNDERLINE_CLASS}
        >
          평소에 학생이 가장 흥미있어 하는 미술활동은 무엇인가요?
        </label>
        <label className="text-xl ml-1 mr-5">
          <input
            type="radio"
            className="mr-2"
            value="DRAWING"
            {...register('interestingActivity')}
          />
          그리기
        </label>
        <label className="text-xl ml-1 mr-5">
          <input
            type="radio"
            className="mr-2"
            value="MATERIALCLASS"
            {...register('interestingActivity')}
          />
          다양한 재료 수업
        </label>
        <label className="text-xl ml-1 mr-5">
          <input
            type="radio"
            className="mr-2"
            value="MASTERPIECECLASS"
            {...register('interestingActivity')}
          />
          명화 수업
        </label>
        <label className="text-xl ml-1 mr-5">
          <input
            type="radio"
            className="mr-2"
            value="TECHNIQUECLASS"
            {...register('interestingActivity')}
          />
          기법 수업
        </label>
        <label className="text-xl ml-1 mr-5">
          <input
            type="radio"
            className="mr-2"
            value="ETC"
            {...register('interestingActivity')}
          />
          기타
        </label>
      </div>
      <div className={DIV_CLASS}>
        <label
          htmlFor="caution"
          className={LABEL_CLASS + UNDERLINE_CLASS}
        >
          교사가 학생에 대해 특별히 알아야 하거나, 주의해야 할 점을 적어주세요
        </label>
        <textarea
          id="caution"
          {...register('caution', { maxLength: 200 })}
          className={TEXTAREA_CLASS}
        ></textarea>
      </div>
      <div className={DIV_CLASS}>
        <label
          htmlFor="agree"
          className={LABEL_CLASS + UNDERLINE_CLASS}
        >
          원더아트 스튜디오에서 작업한 모든 작품과 사진의 저작권은 <br />
          원더아트 스튜디오에 있음에 동의하십니까?
        </label>
        <label className="text-xl ml-1 mr-5">
          <input
            type="radio"
            className="mr-2"
            value="YES"
            {...register('agree')}
          />
          예
        </label>
        <label className="text-xl ml-1 mr-5">
          <input
            type="radio"
            className="mr-2"
            value="NO"
            {...register('agree')}
          />
          아니오
        </label>
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
