import Header from './components/Header';
import { useMediaQuery } from 'react-responsive';

function App() {
  const name = 'Ethan';
  const x = false;
  const isDesktop = useMediaQuery({ minWidth: 1224 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1224 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="container">
        <Header />
      <h1>Hello from React</h1>
      <h2>Hello {name}</h2>
      <h2>Hello {x ? 'Yes' : 'No'}</h2>
    </div>
  );
}

export default App;
