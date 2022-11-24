import './App.css';
import Header from './components/pages/Header/Header';
import TrackCrypto from './components/pages/1TrackCrypto/TrackCrypto';
import { useEffect } from 'react';
import { useAppDispatch } from './redux/hooks';
import { getMarkets } from './redux/slices/marketsSlice';

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMarkets())
  }, [])

  return (
    <div className="App">
      <Header />
      <TrackCrypto />
    </div>
  );
}

export default App;
