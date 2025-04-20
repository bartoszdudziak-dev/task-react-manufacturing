import Header from '@/components/Header';
import SearchPanel from '@/features/search/SearchPanel';
import Container from '@/ui/Container';

function App() {
  return (
    <>
      <Header />
      <div className='mt-6 p-4 lg:p-6'>
        <Container>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7'>
            <SearchPanel />
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
