const Cart = (props) => {
  const { selectedActors, totalCost, remainingCost } = props;

  return (
    <div>
      <h1>Total Actor : {selectedActors.length}</h1>
      <h2>Remaining : {remainingCost}</h2>
      <h5>{totalCost}</h5>
      {selectedActors.map((actor) => {
        const { id, name } = actor;
        return <li key={id}>{name}</li>;
      })}
    </div>
  );
};

export default Cart;
