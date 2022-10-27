import React, { useEffect, useState } from 'react';
import AllLanguagesDetails from '../AllLanguagesDeatils/AllLanguagesDetails';

const Details = () => {
    const [details, setDetails] = useState([]);
    console.log(details);

    useEffect(() => {
        fetch('https://assignment-10-server-pearl.vercel.app/details')
        .then(res => res.json())
        .then(data => setDetails(data));
    }, [])

    return (
        <div>
            <div>
                {
                    details.map( detail => <AllLanguagesDetails
                    key={details._id}
                    detail={detail}
                    ></AllLanguagesDetails>)
                }
            </div>
        </div>
    );
};

export default Details;