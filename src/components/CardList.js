import React from 'react';
import Card from './card';

const CardList = ({ robots }) => {

    return (
        <React.StrictMode>
            {
            robots.map((user, i) => {
                return (
                    <Card
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        story={robots[i].story}
                        />
                );
             })
            }
        </React.StrictMode>
    );
}

export default CardList;