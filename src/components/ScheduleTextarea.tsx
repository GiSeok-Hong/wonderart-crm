const TEXTAREA_CLASS =
  'bg-gray-EEE p-2 outline-primary-color resize-none w-full h-[180px] block border-[1px] border-white';

export default function ScheduleTextarea() {
  return (
    <textarea
      name=""
      id=""
      cols={30}
      rows={7}
      className={TEXTAREA_CLASS + ' '}
      placeholder="노트"
    ></textarea>
  );
}
