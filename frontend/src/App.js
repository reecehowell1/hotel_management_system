import axios from 'axios';
import { useEffect, useState } from 'react';

  

function App() {
  const[message,setMessage] = useState('');
  useEffect(() => {
    axios.get('http://localhost:3001')
    .then(response  => setMessage(response.data))
    .catch(error => console.error('Error in fetching data'));



  });
  return (
    <div className="App">
      <div>{message}</div>
    </div>
  );
}

export default App;
