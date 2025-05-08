import { RootLayout } from '@/ui/Layout';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/config/tanStackQuery';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import About from '@/pages/about';
import Contact from '@/pages/contact';
import Offers from '@/pages/offers';
import NewOffer from '@/pages/offers/new';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<Navigate to='offers' replace />} />
            <Route path='offers' element={<Offers />} />
            <Route path='offers/new' element={<NewOffer />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
