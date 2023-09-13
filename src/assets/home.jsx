import { useEffect, useState } from 'react';

const Home = () => {
  const [allActors, setAllActors] = useState([]);
  const [selectedActors, setAllSelectedActors] = useState([]);

  useEffect(() => {
    fetch('/public/data.json')
      .then((response) => response.json())
      .then((data) => setAllActors(data))
      .catch((error) => console.log('error here', error));
  }, []);

  const handleSelectActor = (actor) => {
    setAllSelectedActors(actor);
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
    </div>
  );
};

export default Home;
