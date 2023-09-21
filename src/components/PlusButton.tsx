'use client';

import { createPortal } from 'react-dom';
import plusIcon from '../../public/icons/plus.svg';
import Image from 'next/image';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {}
export default function PlusButton(props: Props) {
  return createPortal(
    <div className="fixed bottom-5 right-5">
      <button
        {...props}
        className="w-16 h-16 rounded-full bg-primary-color text-white flex justify-center items-center"
      >
        <Image
          src={plusIcon}
          alt="plus icon"
        />
      </button>
    </div>,
    document.body,
    'plus-button',
  ) as unknown as JSX.Element;
}
