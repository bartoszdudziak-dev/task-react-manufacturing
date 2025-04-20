import Checkbox from '@/ui/Checkbox';
import { SearchFiltersProps } from './types';

function SearchFilters({ filters }: SearchFiltersProps) {
  return (
    <div className='flex w-full flex-col justify-between gap-4 lg:flex-row'>
      {filters.map(({ id, label, items }) => (
        <fieldset
          key={id}
          className='fieldset bg-base-100 border-base-300 w-full rounded-md border p-4'
        >
          <legend className='fieldset-legend'>{label}</legend>
          {items.map(({ label, value }) => (
            <Checkbox
              key={value}
              label={label}
              value={value}
              name={`${label}_${value}`}
            />
          ))}
        </fieldset>
      ))}
    </div>
  );
}

export default SearchFilters;
