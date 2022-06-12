import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Home from './pages/Index';

function App() {
  const { data, isLoading } = useFeaturedBanners();

  return (
    <>
      {!isLoading ? <Home banners={data.results} /> : <p>Loading...</p>}
    </>
  );
}

export default App;
