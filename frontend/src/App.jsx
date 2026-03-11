 import { useEffect, useState } from 'react'

 function App() {
   const [message, setMessage] = useState("Loading...");

   useEffect(() => {
     // This is the "Fetch" command. It asks the backend for data.
     fetch("http://localhost:5000/api/hello")
       .then((res) => res.json())
     .then((data) => setMessage(data.message))
       .catch((err) => setMessage("Error connecting to server")); 
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>     
      <h1>My Social App</h1>
      <p>Backend says: <strong>{message}</strong></p>
     </div>
   )
 }

export default App