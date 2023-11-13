'use client';

import { useState } from 'react';
import { ScheduleMemo } from '@prisma/client';
import { useForm } from 'react-hook-form';

const TEXT_CLASS = `bg-gray-EEE p-2 outline-primary-color resize-none  h-[180px] w-[150px] block border-[1px] border-white`;
const BUTTON_CLASS =
  'font-bold rounded-2xl text-white hover:opacity-50 h-[30px] px-3 flex justify-center items-center ';

export default function ScheduleMemos(allMemos: ScheduleMemo) {
  const { register, handleSubmit } = useForm<ScheduleMemo>({
    defaultValues: {
      id: allMemos?.id,
      memo1: allMemos?.memo1,
      memo2: allMemos?.memo2,
      memo3: allMemos?.memo3,
      memo4: allMemos?.memo4,
      memo5: allMemos?.memo5,
      memo6: allMemos?.memo6,
    },
  });

  const [editMode, setEditMode] = useState(false);

  const clickEdit = () => {
    setEditMode(!editMode);
  };

  const onSubmit = async (data: ScheduleMemo) => {
    const { id, memo1, memo2, memo3, memo4, memo5, memo6 } = data;
    const body = {
      id,
      memo1,
      memo2,
      memo3,
      memo4,
      memo5,
      memo6,
    };
    try {
      await fetch(`/api/scheduleMemo`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      alert('메모 수정에 실패했습니다.');
    } finally {
      setEditMode(false);
    }
  };

  return (
    <form
      className="box-border overflow-hidden"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mt-[40px] flex justify-between">
        {editMode ? <SubmitButton /> : <EditButton onClick={clickEdit} />}
        {editMode ? (
          <button
            type="button"
            className={BUTTON_CLASS + `border-red-400 bg-red-400`}
            onClick={() => setEditMode(false)}
          >
            취소
          </button>
        ) : (
          <></>
        )}
      </div>
      <textarea
        className={TEXT_CLASS}
        disabled={!editMode}
        {...register('memo1', { maxLength: 1000 })}
      />
      <textarea
        className={TEXT_CLASS}
        disabled={!editMode}
        {...register('memo2', { maxLength: 1000 })}
      />
      <textarea
        className={TEXT_CLASS}
        disabled={!editMode}
        {...register('memo3', { maxLength: 1000 })}
      />
      <textarea
        className={TEXT_CLASS}
        disabled={!editMode}
        {...register('memo4', { maxLength: 1000 })}
      />
      <textarea
        className={TEXT_CLASS}
        disabled={!editMode}
        {...register('memo5', { maxLength: 1000 })}
      />
      <textarea
        className="bg-gray-EEE p-2 outline-primary-color resize-none  h-[200px] w-[500px] mt-5 absolute right-0"
        disabled={!editMode}
        {...register('memo6', { maxLength: 1000 })}
      />
    </form>
  );
}

const EditButton = ({ onClick }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={BUTTON_CLASS + ' border-primary-color bg-primary-color'}
      onClick={onClick}
    >
      메모수정
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
