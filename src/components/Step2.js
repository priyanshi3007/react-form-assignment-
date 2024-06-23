import React from 'react';

const Step2 = ({ formData, setFormData, errors, handleNext, handleBack }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Step 2: Address Information</h2>
            <label>
                Address Line 1:
                <input
                    type="text"
                    name="address1"
                    value={formData.address1}
                    onChange={handleChange}
                />
                {errors.address1 && <p className="error">{errors.address1}</p>}
            </label>
            <label>
                Address Line 2:
                <input
                    type="text"
                    name="address2"
                    value={formData.address2}
                    onChange={handleChange}
                />
            </label>
            <label>
                City:
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                />
                {errors.city && <p className="error">{errors.city}</p>}
            </label>
            <label>
                State:
                <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                />
                {errors.state && <p className="error">{errors.state}</p>}
            </label>
            <label>
                Zip Code:
                <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                />
                {errors.zip && <p className="error">{errors.zip}</p>}
            </label>
        </div>
    );
};

export default Step2;
