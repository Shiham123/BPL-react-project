import { useEffect, useState } from 'react';
import Cart from './cart';

const Home = () => {
  const [allActors, setAllActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [remainingCost, setRemainingCost] = useState(0);

  useEffect(() => {
    fetch('/public/data.json')
      .then((response) => response.json())
      .then((data) => setAllActors(data))
      .catch((error) => console.log('error here', error));
  }, []);

  const handleSelectActor = (actor) => {
    const exitsUser = selectedActors.find((item) => item.id == actor.id);
    let cost = actor.salary;

    if (exitsUser) {
      return alert('already added');
    } else {
      selectedActors.forEach((item) => {
        cost = cost + item.salary;
      });

      const remaining = 20000 - cost;
      if (cost > 20000) {
        return alert('bigger the budget');
      } else {
        setRemainingCost(remaining);
        setTotalCost(cost);
        setSelectedActors([...selectedActors, actor]);
      }
    }
  };

  return (
    <div>
      {allActors.map((item) => {
        const { id, name, age, role, image, salary, country, fbUrl, twitter } =
          item;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <img src={image} alt="" />
            <h2>{age}</h2>
            <p>{role}</p>
            <p>{salary}</p>
            <h3>{country}</h3>
            <p>{fbUrl}</p>
            <p>{twitter}</p>
            <button onClick={() => handleSelectActor(item)}>Select</button>
          </div>
        );
      })}
      <Cart
        selectedActors={selectedActors}
        totalCost={totalCost}
        remainingCost={remainingCost}
      />
    </div>
  );
};

export default Home;
