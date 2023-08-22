import './App.css';
import { Navbar } from './components';
import { Home } from './pages';
import WorkerContextProvider from './context/ContextProvider';
import DialogFavorites from './components/Navbar/DialogFavorites';
function App() {
  return (
    <WorkerContextProvider>
      <DialogFavorites />
      <Navbar />
      <Home />
    </WorkerContextProvider>
  );
}

export default App;
