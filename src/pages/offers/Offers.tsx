import SavedOffers from '@/features/offers';
import SearchPanel from '@/features/search/SearchPanel';
import SearchResults from '@/features/search/SearchResults';

function Offers() {
  return (
    <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-9'>
      <div className='lg:col-span-4'>
        <SavedOffers />
        <SearchPanel />
      </div>

      <div className='lg:col-span-5'>
        <SearchResults />
      </div>
    </div>
  );
}

export default Offers;
