import React, { useState, useEffect }  from 'react';
import { Icon } from "./elements";

const Accueil = () => {

      const [error, setError] = useState(null);
      const [isLoaded, setIsLoaded] = useState(false);
      const [facts, setfacts] = useState([]);
      
      function addToFavorites(fact) {
        localStorage.setItem('fact', JSON.stringify(fact.id));
        var retrievedFact = localStorage.getItem('fact');
        console.log('retrievedFact: ', JSON.parse(retrievedFact));

      }

      useEffect(() => {
            fetch("https://cat-fact.herokuapp.com/facts")
              .then(res => res.json())
              .then(
                  (data) => {
                      setIsLoaded(true);
                      setfacts(data);
                  },
                  (error) => {
                      setIsLoaded(true);
                      setError(error);
                  }
              )
        }, [])
  if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>ça charge...</div>;
    } else {
        return (
          <div>
            <h3>Cat Facts !</h3>
            <div class="tbl-content">
              <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                  {facts.map(fact => (
                  <tr key={fact._id}>
                    <td>{fact.text}</td>
                    <td><Icon onClick={() => addToFavorites(fact)}></Icon></td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
        );
    }
}

export default Accueil;