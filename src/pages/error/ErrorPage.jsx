import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            you got an error <Link to="/">back home</Link>
        </div>
    );
};

export default ErrorPage;