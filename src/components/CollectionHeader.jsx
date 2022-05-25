import React from 'react';

const CollectionHeader = ({title, para}) => {
    return (
        <header>
            <div className="collection__container">
                <h1 className="collection__title">{title}</h1>
                <p className="collection__para">{para}</p>
            </div>
        </header>
    );
}

export default CollectionHeader;
