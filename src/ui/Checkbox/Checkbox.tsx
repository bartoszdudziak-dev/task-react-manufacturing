import { type CheckboxProps } from './types';

function Checkbox({ label, value, name, className = '' }: CheckboxProps) {
  return (
    <label className='label'>
      <input
        type='checkbox'
        value={value}
        name={name}
        className={`checkbox checkbox-accent checkbox-sm ${className}`}
      />
      {label}
    </label>
  );
}

export default Checkbox;
