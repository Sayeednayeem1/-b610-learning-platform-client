import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const details = useLoaderData();
    return (
        <div>
            <h5>This is category has: {details.length}</h5>
        </div>
    );
};

export default Category;