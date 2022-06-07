import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Home from './pages/Index';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <Home/>
  );
}

export default App;
