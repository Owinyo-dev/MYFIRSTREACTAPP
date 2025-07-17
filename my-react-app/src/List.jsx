function List() {
  const fruits = [
    { id: 1, name: "Apple", Calories: 95 },
    { id: 2, name: "Banana", Calories: 105 },
    { id: 3, name: "Cherry", Calories: 50 },
    { id: 4, name: "Date", Calories: 28 },
  ];

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} <b>{fruit.Calories}</b>
    </li>
  ));
  return <ol>{listItems}</ol>;
}
export default List;
