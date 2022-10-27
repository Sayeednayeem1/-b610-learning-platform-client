import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, } from 'react-icons/fa';
import Detail from '../Detail/Detail';

const Category = () => {
    const details = useLoaderData();
    console.log(details);
    return (
        <div className='category-bg'>
            <div className='category-detail'>
                {
                    details.map(detail => <Detail

                        key={detail._id}
                        detail={detail}

                    ></Detail>)
                }
            </div>
            <footer className='text-center bg-info category-footer'>
                <p><small>Alright reserved @2023</small></p>
                <div>
                    <FaFacebook className='fs-1'></FaFacebook>
                    <FaTwitter className='ms-5 fs-1'></FaTwitter>
                    <FaInstagram className='ms-5 fs-1'></FaInstagram>
                </div>
            </footer>
        </div>
    );
};

export default Category;