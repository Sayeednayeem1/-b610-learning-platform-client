import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Detail from '../Detail/Detail';

const Category = () => {
    const details = useLoaderData();
    console.log(details);
    return (
        <div>
            <div>
                {
                    details.map(detail => <Detail
                        key={detail.category_id
                        }
                        detail={detail}
                    ></Detail>)
                }
            </div>
        </div>
    );
};

export default Category;