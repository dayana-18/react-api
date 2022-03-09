import React, { useState, useEffect }  from 'react';

const Favoris = () =>{
  
  const [facts, setfacts] = useState([]);
  const [id, setId] = useState(JSON.parse(localStorage.getItem("fact")));
  console.log(id);
  
  useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((res) => res.json())
      .then((data) => {
        setfacts(data);
      });
  }, []);

  return facts.map((fact, index) => {
    for (let i = 0; i < id.length; i++) {
      if (id[i] === fact.id) {
        return (
          <div key={i}>
            <div>
              <p> {id.text} </p>
            </div>
          </div>
        );
      }
    }
  });
}
export default Favoris;