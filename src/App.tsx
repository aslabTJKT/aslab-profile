import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './Page/Main';
import NotFound from './Page/NotFound';
const App = () => {

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;