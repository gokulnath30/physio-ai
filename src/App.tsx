import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './sign';
import Home from './home';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>


    </>

  )
}

export default App
