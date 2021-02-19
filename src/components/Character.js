// Write your Character component here
import React from 'react';
import styles from 'styled-components';

const CharacterCards = styles.div`
      background-color: blue;
      opacity: 80%;
      color: lightgrey;
      width: 600px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 20%;
      margin-bottom: 4%;
      padding: 2px;0
`

const Character = props => {
let {data} = props;

    return(
        <div>
            {data.map(starWars =>{
                return (
                    <CharacterCards>
            <div>
            <h3>Name: {starWars.name}</h3>
            <h3>Gender: {starWars.gender}</h3>
            <h3>Birth Year: {starWars.birth_year}</h3>
            </div>
            </CharacterCards>
                )
})}

        </div>

    )
}
export default Character; 