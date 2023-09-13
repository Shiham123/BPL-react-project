import { useEffect, useState } from 'react';

const Home = () => {
  const [allActors, setAllActors] = useState([]);

  useEffect(() => {
    fetch('/public/data.json')
      .then((response) => response.json())
      .then((data) => setAllActors(data));
  });

  return (
    <div>
      {allActors.map((item, index) => {
        const { id, name, age, role, image, salary, country, fbUrl, twitter } =
          item;
        return (
          <div key={index}>
            <h1>{name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
