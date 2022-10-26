import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='text-secondary text-center mt-5 mb-5'>
                <h2>This is blog section</h2>
                <h4>All the question answers are provided below</h4>
            </div>
            <div className='ms-5 '>
                <h3>Q-1: What is cors?</h3>
                <p className='ms-4'>Ans: CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</p>
                <br/>
                <h3>Q-2: Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p className='ms-4'>Ans: Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                <br/>
                <h3>Q-3:  How does the private route work?</h3>
                <p className='ms-4'>Ans: The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>
                <br/>
                <h3>Q-4: What is Node? How does Node work?</h3>
                <p className='ms-4'>Ans: 1. Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.</p>
                <p className='ms-4'>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.</p>
            </div>
        </div>
    );
};

export default Blog;