import React from 'react';
const Card = ({name, story, id}) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadows-5">
            {/* backtics(`) is used below as a template literal */}
            <img src={`https://robohash.org/${id}?size=200x200`} alt='robots' />
            <div>
                <h2>{name}</h2>
                <p>{story}</p>
            </div>
        </div>
    )
}

export default Card;