import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getChaptersForClass } from '../data/chapters';

const DebugPDFPaths = () => {
  const { className = '9th' } = useParams();
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkPDFs();
  }, [className]);

  const checkPDFs = async () => {
    setLoading(true);
    const chapters = getChaptersForClass(className);
    const results = [];
    
    for (const chapter of chapters) {
      const url = `/pdfs/${className}/${encodeURIComponent(chapter.fileName)}`;
      try {
        const response = await fetch(url, { method: 'HEAD' });
        results.push({
          number: chapter.number,
          name: chapter.name,
          fileName: chapter.fileName,
          url,
          exists: response.ok,
          status: response.status
        });
      } catch (err) {
        results.push({
          number: chapter.number,
          name: chapter.name,
          fileName: chapter.fileName,
          url,
          exists: false,
          error: err.message
        });
      }
    }
    
    setFiles(results);
    setLoading(false);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">📄 PDF Debugger - Class {className}</h1>
        
        <div className="mb-6 p-4 bg-blue-50 rounded">
          <p className="font-semibold">PDF Folder Path:</p>
          <p className="text-sm font-mono">D:\rightclick\frontend\public\pdfs\{className}\</p>
        </div>

        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 text-left">Chapter</th>
                <th className="p-3 text-left">File Name</th>
                <th className="p-3 text-left">URL</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr key={file.number} className="border-b hover:bg-gray-50">
                  <td className="p-3">Ch {file.number}</td>
                  <td className="p-3 font-mono text-sm">{file.fileName}</td>
                  <td className="p-3 font-mono text-xs text-gray-600">{file.url}</td>
                  <td className="p-3">
                    {file.exists ? (
                      <span className="text-green-600 font-semibold">✅ Found</span>
                    ) : (
                      <span className="text-red-600 font-semibold">❌ Not Found</span>
                    )}
                  </td>
                  <td className="p-3">
                    {file.exists ? (
                      <a 
                        href={file.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Open
                      </a>
                    ) : (
                      <span className="text-gray-400">N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="mt-6 p-4 bg-yellow-50 rounded">
          <h3 className="font-bold mb-2">🔧 Troubleshooting Steps:</h3>
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li>Make sure files are in: <code className="bg-gray-200 px-1">D:\rightclick\frontend\public\pdfs\{className}\</code></li>
            <li>Check if file names match exactly (case-sensitive)</li>
            <li>Try opening the URL directly in browser</li>
            <li>Check if the server is running (should be on port 5173)</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default DebugPDFPaths;