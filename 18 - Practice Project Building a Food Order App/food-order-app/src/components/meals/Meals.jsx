import MealItem from "./MealItem";
import useHttp from "../../hooks/useHttp";
import Error from "../Error";

const requestConfig = {};
function Meals() {
  const {
    data: availableMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) return <p className="center">Fetching Meals....</p>;

  if (error)
    return (
      <div className="flex justify-center rounded-md">
        <Error title="Failed to fetch meals" message={error} />
      </div>
    );
  return (
    <div>
      <ul id="meals">
        {availableMeals?.map((meal) => (
          <MealItem meal={meal} key={meal.id} />
        ))}
      </ul>
    </div>
  );
}

export default Meals;
