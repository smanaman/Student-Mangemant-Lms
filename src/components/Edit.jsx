import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './Add.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { EditData } from '../feature/Creteslice';

function Edit() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    id: '',
    url: '',
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (location.state) {
      setInput(location.state);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(EditData(input));
    navigate('/view');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <h2>Edit</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="url">Website URL</label>
          <input
            type="url"
            id="url"
            name="url"
            placeholder="https://example.com"
            value={input.url}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={input.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@example.com"
            value={input.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
            value={input.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Update
        </button>
      </form>
    </div>
  );
}

export default Edit;
