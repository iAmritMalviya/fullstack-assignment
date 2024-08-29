import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SiAbstract } from "react-icons/si";
import '../styles/headerFooter.css';

const Header = () => {
    const navigate = useNavigate();

    const handleRequestClick = () => {
        navigate('/addrequest');
    }

    return (
        <header className="header">
            <div className="logo" onClick={() => navigate('/') } >
                <SiAbstract /> <b>Abstract</b> |
                <span>Help Center</span>
            </div>
            <button className="submit-request" onClick={handleRequestClick}>
                Submit a request
            </button>
        </header>
    );
}

export default Header;
