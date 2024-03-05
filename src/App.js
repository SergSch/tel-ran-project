import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState({});

  async function fetchCategories() {
    try {
      const response = await fetch('http://localhost:3000/categories/all');

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const categories = await response.json();
      setData(cat);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);
  return <div>Hello</div>;
}

export default App;
