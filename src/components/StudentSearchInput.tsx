'use client';
import { useForm } from 'react-hook-form';
import { BiSearch } from 'react-icons/bi';

type StudentSearchInputProps = {
  onChangeInput: (keyword: string) => void;
};

export default function StudentSearchInput({ onChangeInput }: StudentSearchInputProps) {
  const { register } = useForm<{ keyword: string }>({
    defaultValues: {
      keyword: '',
    },
  });

  const { onChange, ...rest } = register('keyword');
  return (
    <div className="flex justify-end items-center gap-2">
      <BiSearch className="w-8 h-8" />
      <input
        className="pl-4 w-32 h-8 bg-gray-EEE"
        placeholder="이름 검색"
        type="text"
        onChange={(e) => {
          onChangeInput(e.target.value);
        }}
        {...rest}
      />
    </div>
  );
}
