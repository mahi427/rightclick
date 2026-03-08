import http from 'http';

const testRoute = (path) => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 5000,
      path: path,
      method: 'GET'
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log(`${path}: ${res.statusCode}`);
        if (res.statusCode === 200) {
          try {
            console.log('  Response:', JSON.parse(data));
          } catch (e) {
            console.log('  Response:', data);
          }
        }
        resolve();
      });
    });

    req.on('error', (error) => {
      console.log(`${path}: Error - ${error.message}`);
      reject(error);
    });

    req.end();
  });
};

console.log('🔍 Testing Backend Routes...\n');

const routes = [
  '/api/health',
  '/test',
  '/api/auth/register', // This should return 404 for GET
  '/api/auth/login'      // This should return 404 for GET
];

Promise.all(routes.map(route => testRoute(route).catch(() => {})))
  .then(() => {
    console.log('\n✅ Route testing complete');
    console.log('\n📝 Note: POST routes will return 404 for GET requests - that\'s normal');
    console.log('   To test POST routes, use curl or Postman');
  });