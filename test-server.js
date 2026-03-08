const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Server is working!' }));
});

server.listen(5000, '0.0.0.0', () => {
  console.log('✅ Test server running on http://localhost:5000');
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error('❌ Port 5000 is already in use!');
  } else {
    console.error('❌ Server error:', err);
  }
});
