import React, { useState, useEffect }  from 'react';
import { FaStar,FaTrash } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const Icon = styled(FaStar)`
  color: rgb(84, 123, 175);
  @media screen and (height: 480px; ) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    cursor: pointer;
  }
  &:hover {
    color: rgb(192, 132, 142)
  }
  width: 200px;
`;

const Accueil = () => {
  const [error, setError] = useState(null);
      const [isLoaded, setIsLoaded] = useState(false);
      const [facts, setfacts] = useState([]);
      const favorites = [];
      function addToFavorites(fac)
      {
        favorites = fact
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
                    <td><button onClick={() => addToFavorites(fact)}></button></td>
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