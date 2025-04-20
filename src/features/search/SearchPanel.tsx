import { IoLocationSharp } from 'react-icons/io5';
import { IoSearch } from 'react-icons/io5';
import { IoFilter } from 'react-icons/io5';
import SearchFilters from './SearchFilters';
import searchFilters from '@/data/searchFilters';
import jobCategories from '@/data/jobCategories';

function SearchPanel() {
  return (
    <section className='lg:col-span-3'>
      <form className='flex flex-wrap gap-4'>
        <label className='input input-md grow rounded-md'>
          <IoSearch className='size-4' />
          <input type='search' placeholder='Job Position' name='search' />
        </label>

        <div className='flex grow gap-4'>
          <label className='input input-md grow rounded-md'>
            <input type='text' placeholder='Location' name='location' />
            <button className='hover:text-accent-content cursor-pointer transition-colors duration-200'>
              <IoLocationSharp className='size-4' />
            </button>
          </label>

          <select
            className='select grow rounded-md'
            defaultValue=''
            name='category'
          >
            <option disabled value=''>
              Select Category
            </option>
            {jobCategories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        <div className='collapse-arrow bg-base-100 border-base-content/20 collapse grow rounded-md border-2'>
          <input type='checkbox' className='!min-h-10 p-0 px-3 sm:h-10' />
          <div className='collapse-title flex !min-h-10 items-center gap-2 p-0 px-3 text-sm font-semibold'>
            <IoFilter /> <span>More Filters</span>
          </div>
          <div className='collapse-content'>
            <SearchFilters filters={searchFilters} />
          </div>
        </div>

        <div className='flex grow gap-10 sm:gap-20'>
          <button className='btn btn-sm md:btn-md btn-soft btn-outline grow rounded-md tracking-wider'>
            Clear
          </button>
          <button className='btn btn-sm md:btn-md btn-accent grow rounded-md tracking-wider'>
            Search
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchPanel;
