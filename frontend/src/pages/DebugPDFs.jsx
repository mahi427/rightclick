import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DebugPDFs = () => {
  const { className = '9th' } = useParams();
  const [pdfs, setPdfs] = useState([]);
  const [checking, setChecking] = useState(true);

  const chapters = [
    { number: 1, name: 'Number Systems', fileName: 'chapter-1-number-systems.pdf' },
    { number: 2, name: 'Polynomials', fileName: 'chapter-2-polynomials.pdf' },
    { number: 3, name: 'Coordinate Geometry', fileName: 'chapter-3-coordinate-geometry.pdf' },
    { number: 4, name: 'Linear Equation in Two Variables', fileName: 'chapter-4-linear-equations.pdf' },
    { number: 5, name: 'Introduction to Euclids Geometry', fileName: 'chapter-5-euclids-geometry.pdf' },
    { number: 6, name: 'Lines and Angles', fileName: 'chapter-6-lines-and-angles.pdf' },
    { number: 7, name: 'Triangles', fileName: 'chapter-7-triangles.pdf' },
    { number: 8, name: 'Quadrilaterals', fileName: 'chapter-8-quadrilaterals.pdf' },
    { number: 9, name: 'Circle', fileName: 'chapter-9-circle.pdf' },
    { number: 10, name: "Heron's Formula", fileName: 'chapter-10-herons-formula.pdf' },
    { number: 11, name: 'Surface Areas and Volumes', fileName: 'chapter-11-surface-areas-volumes.pdf' },
    { number: 12, name: 'Statistics', fileName: 'chapter-12-statistics.pdf' }
  ];

  useEffect(() => {
    const checkPDFs = async () => {
      const results = [];
      for (const chapter of chapters) {
        const url = `/pdfs/${className}/${chapter.fileName}`;
        try {
          const response = await fetch(url, { method: 'HEAD' });
          results.push({
            ...chapter,
            url,
            exists: response.ok,
            status: response.status
          });
        } catch (error) {
          results.push({
            ...chapter,
            url,
            exists: false,
            error: error.message
          });
        }
      }
      setPdfs(results);
      setChecking(false);
    };

    checkPDFs();
  }, [className]);

  if (checking) {
    return <div className="p-8 text-center">Checking PDFs...</div>;
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">📄 PDF Debugger - Class {className}</h1>
        
        <div className="mb-4 p-4 bg-blue-50 rounded">
          <p className="font-semibold">PDF Folder Path:</p>
          <p className="text-sm">D:\rightclick\frontend\public\pdfs\{className}\</p>
        </div>

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
            {pdfs.map((pdf) => (
              <tr key={pdf.number} className="border-b hover:bg-gray-50">
                <td className="p-3">Ch {pdf.number}</td>
                <td className="p-3 font-mono text-sm">{pdf.fileName}</td>
                <td className="p-3 font-mono text-xs text-gray-600">{pdf.url}</td>
                <td className="p-3">
                  {pdf.exists ? (
                    <span className="text-green-600 font-semibold">✅ Found</span>
                  ) : (
                    <span className="text-red-600 font-semibold">❌ Not Found</span>
                  )}
                </td>
                <td className="p-3">
                  {pdf.exists ? (
                    <a 
                      href={pdf.url} 
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

export default DebugPDFs;