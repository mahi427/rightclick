import React, { useState, useEffect } from 'react';
import api from '../services/api';

const TestBackend = () => {
  const [status, setStatus] = useState('Testing...');
  const [error, setError] = useState(null);

  useEffect(() => {
    testConnection();
  }, []);

  const testConnection = async () => {
    try {
      console.log('Testing backend connection...');
      const response = await api.get('/health');
      console.log('Backend response:', response.data);
      setStatus('✅ Connected to backend!');
    } catch (err) {
      console.error('Connection failed:', err);
      setStatus('❌ Cannot connect to backend');
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Backend Connection Test</h1>
        <div className="mb-4">
          <p className="font-semibold">Status:</p>
          <p className={`text-lg ${status.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </p>
        </div>
        {error && (
          <div className="mb-4 p-3 bg-red-100 rounded">
            <p className="text-red-700 font-medium">Error:</p>
            <p className="text-red-600">{error}</p>
          </div>
        )}
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <p className="font-medium">Debug Info:</p>
          <p>Backend URL: http://localhost:5000/api</p>
          <p>Try opening: <a href="http://localhost:5000/api/health" target="_blank" className="text-blue-600 underline">http://localhost:5000/api/health</a></p>
        </div>
        <button
          onClick={testConnection}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Test Again
        </button>
      </div>
    </div>
  );
};

export default TestBackend;