import { useEffect, useState } from 'react';
import './css/app.css';

function App() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const req = await fetch('http://localhost:3000/api/blogs?perPage=8');
      const res = await req.json();
      console.log('respone => ', res);

      const result = new ArrayBuffer(res.data);
      setImage(result);
    })();
    // ;learn file managment on back with mongodb and nnodejs
  }, []);
  return (
    <div>
      <img src={`data:image/png;base64,${image}`} alt="" />
    </div>
  );
}

export default App;
