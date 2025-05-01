import { HiOutlineHeart } from 'react-icons/hi2';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';

function SearchResults() {
  return (
    <section className='bg-base-100 rounded-sm p-4 shadow-lg'>
      <div className='p-4 pb-0'>
        <h2 className='border-accent-content mb-2 border-b-1 pb-2 text-sm font-semibold tracking-widest uppercase'>
          Search Results
        </h2>
      </div>

      <ul className='list'>
        <li className='list-row'>
          <div>
            <img
              className='size-10 rounded-sm'
              src='https://placehold.co/100x100'
            />
          </div>
          <div>
            <div>Frontend Developer</div>
            <div className='text-xs font-semibold uppercase opacity-60'>
              Google | IT | Warsaw | Remote
            </div>
          </div>
          <div>
            <button className='btn btn-square btn-ghost'>
              <IoChevronForwardCircleOutline className='h-full w-3/5' />
            </button>
            <button className='btn btn-square btn-ghost'>
              <HiOutlineHeart className='stroke-accent-content h-full w-3/5' />
            </button>
          </div>
        </li>
        <li className='list-row'>
          <div>
            <img
              className='size-10 rounded-sm'
              src='https://placehold.co/100x100'
            />
          </div>
          <div>
            <div>Frontend Developer</div>
            <div className='text-xs font-semibold uppercase opacity-60'>
              Google | IT | Warsaw | Remote
            </div>
          </div>
          <div>
            <button className='btn btn-square btn-ghost'>
              <IoChevronForwardCircleOutline className='h-full w-3/5' />
            </button>
            <button className='btn btn-square btn-ghost'>
              <HiOutlineHeart className='stroke-accent-content h-full w-3/5' />
            </button>
          </div>
        </li>
        <li className='list-row'>
          <div>
            <img
              className='size-10 rounded-sm'
              src='https://placehold.co/100x100'
            />
          </div>
          <div>
            <div>Frontend Developer</div>
            <div className='text-xs font-semibold uppercase opacity-60'>
              Google | IT | Warsaw | Remote
            </div>
          </div>
          <div>
            <button className='btn btn-square btn-ghost'>
              <IoChevronForwardCircleOutline className='h-full w-3/5' />
            </button>
            <button className='btn btn-square btn-ghost'>
              <HiOutlineHeart className='stroke-accent-content h-full w-3/5' />
            </button>
          </div>
        </li>
        <li className='list-row'>
          <div>
            <img
              className='size-10 rounded-sm'
              src='https://placehold.co/100x100'
            />
          </div>
          <div>
            <div>Frontend Developer</div>
            <div className='text-xs font-semibold uppercase opacity-60'>
              Google | IT | Warsaw | Remote
            </div>
          </div>
          <div>
            <button className='btn btn-square btn-ghost'>
              <IoChevronForwardCircleOutline className='h-full w-3/5' />
            </button>
            <button className='btn btn-square btn-ghost'>
              <HiOutlineHeart className='stroke-accent-content h-full w-3/5' />
            </button>
          </div>
        </li>
      </ul>

      <div className='text-center'>
        <div className='join border-none'>
          <button className='bg-base-100 hover:bg-accent/50 join-item btn btn-sm'>
            1
          </button>
          <button className='bg-base-100 hover:bg-accent/50 join-item btn btn-sm'>
            2
          </button>
          <button className='bg-base-100 hover:bg-accent/50 join-item btn btn-sm btn-disabled'>
            ...
          </button>
          <button className='bg-base-100 hover:bg-accent/50 join-item btn btn-sm'>
            99
          </button>
          <button className='bg-base-100 hover:bg-accent/50 join-item btn btn-sm'>
            100
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchResults;
