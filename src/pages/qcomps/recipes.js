export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

export default function RecipeList() {
  const listItems = recipes.map(recipe => {
    const ingredients = [...recipe.ingredients].map((ingredient, index) =>
      <li key={index}>{ingredient}</li>)
    return (<li key={recipe.id}> 
        <h1>{recipe.name}</h1>
        <ul>{ingredients}</ul></li>);
  })
  return (
    <div>
      <h1>Recipes</h1>
      <ul>{listItems}</ul>
    </div>
  );
}