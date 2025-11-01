import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React CI/CD Pipeline with GitHub Actions</h1>
        <p>
          This is a demo React application with automated CI/CD pipeline.
        </p>
        <div className="features">
          <h2>Pipeline Features:</h2>
          <ul>
            <li>✅ Automated Testing on every push</li>
            <li>✅ Automated Building</li>
            <li>✅ Code Quality Checks</li>
            <li>✅ Ready for Deployment</li>
          </ul>
        </div>
        <div className="info">
          <p>
            Every push to the <code>main</code> branch triggers the GitHub Actions workflow.
          </p>
          <p>
            Check the <strong>Actions</strong> tab to see the workflow runs!
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
