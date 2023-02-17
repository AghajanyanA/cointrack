import './App.css';
import Header from './components/pages/Header/Header';
import TrackCrypto from './components/pages/1TrackCrypto/TrackCrypto';
import { useEffect } from 'react';
import { useAppDispatch } from './redux/hooks';
import { getMarkets } from './redux/slices/marketsSlice';
import Track from './components/pages/2Track/Track';
import LivePrices from './components/pages/3LivePrices/LivePrices';
import ManageCrypto from './components/pages/4ManageCrypto/ManageCrypto';
import TrustUs from './components/pages/6TrustUs/TrustUs';
import LongPage from './components/pages/5LongPage/LongPage';
import Subscription from './components/pages/7Subscription/Subscription';
import Contacts from './components/pages/8contact/Contacts';
import Footer from './components/pages/9Footer/Footer';

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMarkets())
  }, [dispatch])

  return (
    <div className="App">
      <Header />
      <TrackCrypto />
      <Track />
      <LivePrices />
      <ManageCrypto />
      <LongPage />
      <TrustUs />
      <Subscription />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
