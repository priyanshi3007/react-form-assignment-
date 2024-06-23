import React from 'react';

const Step1 = ({ formData, setFormData, errors, handleNext }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Step 1: Personal Information</h2>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </label>
            <label>
                Phone:
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
            </label>
        </div>
    );
};

export default Step1;
