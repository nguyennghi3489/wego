import "./App.css";
import { useQuery } from "react-query";
import { getAllCategories, getAllFoods } from "./apis/food";

function App() {
  // Queries
  const { isLoading: isCategoriesLoading, isError: isCategoriesError } =
    useQuery("categories", getAllCategories, {
      retry: 3,
    });
  const { isLoading: isFoodsLoading, isError: isFoodsError } = useQuery(
    "foods",
    getAllFoods,
    { retry: 3 }
  );

  if (isCategoriesLoading || isFoodsLoading) return <>Loading...</>;

  if (isCategoriesError || isFoodsError) return <>Something Wrong</>;

  return (
    <div className="App">
      <header className="App-header">Food List Page</header>
    </div>
  );
}

export default App;
