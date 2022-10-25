import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/language-categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h4>All categories: {categories.length}</h4>
            <div>
                {
                    categories.map( c => <p key={c.id}>
                        <Link to={`/category/${c.id}`}>{c.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;