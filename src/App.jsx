import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Analytics } from '@vercel/analytics/react'; // for tracking the user interactions in the application
import appStore from './redux/appStore';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
      <Analytics />
    </>
  );
};

export default App;
