import React from 'react';
import { Link } from 'react-router-dom';
import Sneaker from './Sneaker';

const Collection = ({ sneakers, setSneakers }) => {
    return (
        <div className="sneakers">
            {
                sneakers.map(item => <Sneaker key={item.id} sneaker={item} />)
            }
        </div>
    );
}

export default Collection;
