import { Provider } from 'react-redux';
import Body from './pages/body/Body';
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <Body></Body>
    </Provider>
  );
}

export default App;
