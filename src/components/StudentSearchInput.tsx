import { BiSearch } from 'react-icons/bi';
export default function StudentSearchInput() {
  return (
    <div className="flex justify-end items-center gap-2">
      <BiSearch className="w-8 h-8" />
      <input
        className="pl-4 w-32 h-8 bg-gray-EEE"
        placeholder="이름 검색"
        type="text"
      />
    </div>
  );
}
