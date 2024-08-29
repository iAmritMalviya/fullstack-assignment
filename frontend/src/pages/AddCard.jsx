import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import '../styles/addCard.css';
import { useNavigate } from 'react-router-dom';

const AddCard = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post('/cards', { title, description });
            setTitle('');
            setDescription('');
            toast.success('Request submitted successfully')
            navigate('/')
        } catch (err) {
            setError('Error submitting request. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="add-card-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Card Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Card Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Adding...' : 'Add Card'}
            </button>
            {error && <p className="error">{error}</p>}
        </form>

    )
}

export default AddCard