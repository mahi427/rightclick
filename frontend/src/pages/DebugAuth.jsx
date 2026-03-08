import React, { useState } from 'react';
import api from '../services/api';

const DebugAuth = () => {
  const [backendStatus, setBackendStatus] = useState('Checking...');
  const [testResult, setTestResult] = useState(null);

  const checkBackend = async () => {
    try {
      const response = await api.get('/health');
      setBackendStatus(`✅ Connected - ${response.data.mongodb}`);
      setTestResult(response.data);
    } catch (error) {
      setBackendStatus(`❌ Failed - ${error.message}`);
    }
  };

  const testRegister = async () => {
    try {
      const testUser = {
        name: 'Test User',
        email: `test${Date.now()}@example.com`,
        password: 'password123',
        studentClass: '9th'
      };
      
      const response = await api.post('/auth/register', testUser);
      setTestResult({ success: true, data: response.data });
    } catch (error) {
      setTestResult({ 
        success: false, 
        error: error.response?.data || error.message 
      });
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">🔧 Debug Authentication</h1>
        
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded">
            <p className="font-semibold">Backend URL:</p>
            <p className="text-blue-600">http://localhost:5000/api</p>
          </div>

          <button
            onClick={checkBackend}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Check Backend Connection
          </button>

          <button
            onClick={testRegister}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 ml-2"
          >
            Test Registration
          </button>

          <div className="mt-4 p-4 border rounded">
            <p className="font-semibold">Status:</p>
            <p className={backendStatus.includes('✅') ? 'text-green-600' : 'text-red-600'}>
              {backendStatus}
            </p>
          </div>

          {testResult && (
            <div className="mt-4 p-4 border rounded bg-gray-50">
              <p className="font-semibold">Test Result:</p>
              <pre className="text-sm overflow-auto">
                {JSON.stringify(testResult, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DebugAuth;