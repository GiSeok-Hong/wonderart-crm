import { forwardRef } from 'react';

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {}
export const FlexRow = ({ children, ...props }: DivProps) => {
  return (
    <div
      className="flex gap-4"
      {...props}
    >
      {children}
    </div>
  );
};

export const FlexRowItem = ({ children, ...props }: DivProps) => {
  return (
    <div
      className="flex gap-2 items-center"
      {...props}
    >
      {children}
    </div>
  );
};

export const FlexColumnItem = ({ children, ...props }: DivProps) => {
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
export const Label = ({ children, ...props }: LabelProps) => {
  return (
    <label
      className="w-[120px] text-black text-lg font-normal"
      {...props}
    >
      {children}
    </label>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  return (
    <input
      ref={ref}
      className="flex h-11 bg-[#eee] py-2 flex-1 p-2"
      {...props}
    />
  );
});
Input.displayName = 'Input';

export const InputRadio = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  return (
    <input
      type="radio"
      className="mr-2"
      ref={ref}
      {...props}
    />
  );
});
InputRadio.displayName = 'InputRadio';

export const Select = forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
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

export const Option = ({ children, ...props }: React.OptionHTMLAttributes<HTMLOptionElement>) => {
  return <option {...props}>{children}</option>;
};
