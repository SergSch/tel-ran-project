// const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   async function fetchCategories() {
//     try {
//       const response = await fetch('http://localhost:3333/categories/all');

//       if (!response.ok) {
//         throw new Error(
//           `Failed to fetch data: ${response.status} ${response.statusText}`
//         );
//       }

//       const categories = await response.json();
//       setData(categories);
//       console.log(data);
//     } catch (error) {
//       setError(error.message);
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     fetchCategories();
//   }, []);
