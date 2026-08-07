import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Routes>
          <Route path="/" element={
            <div className="text-center">
              <h1 className="text-4xl font-bold text-blue-600 mb-4">BookNest</h1>
              <p className="text-xl text-gray-700">Welcome to your new React App!</p>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
