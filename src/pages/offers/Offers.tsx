import SavedOffers from '@/features/offers';
import SearchPanel from '@/features/search/SearchPanel';
import SearchResults from '@/features/search/SearchResults';

function Offers() {
  return (
    <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
      <div>
        <SavedOffers />
        <SearchPanel />
      </div>

      <div>
        <SearchResults />
      </div>
    </div>
  );
}

export default Offers;
