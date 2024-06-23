import React, { useState, useEffect } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import './App.css';

const App = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('formData'));
        if (savedData) {
            setFormData(savedData);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    const validateStep = () => {
        let stepErrors = {};
        if (currentStep === 1) {
            if (!formData.name) stepErrors.name = "Name is required";
            if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) stepErrors.email = "Valid email is required";
            if (!formData.phone) stepErrors.phone = "Phone is required";
        }
        if (currentStep === 2) {
            if (!formData.address1) stepErrors.address1 = "Address Line 1 is required";
            if (!formData.city) stepErrors.city = "City is required";
            if (!formData.state) stepErrors.state = "State is required";
            if (!formData.zip) stepErrors.zip = "Zip Code is required";
        }
        setErrors(stepErrors);
        return Object.keys(stepErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep()) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = () => {
        if (validateStep()) {
            alert("Form submitted successfully!");
            localStorage.removeItem('formData');
            setFormData({
                name: '',
                email: '',
                phone: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                zip: ''
            });
            setCurrentStep(1);
        }
    };

    return (
        <div className="App">
            <h1>Multi-Step Form</h1>
            <div className="step-indicator">
                <div className={currentStep === 1 ? 'active' : ''}>Step 1</div>
                <div className={currentStep === 2 ? 'active' : ''}>Step 2</div>
                <div className={currentStep === 3 ? 'active' : ''}>Step 3</div>
            </div>
            <div className="form-navigation">
                <button disabled={currentStep === 1} onClick={handleBack}>Back</button>
                <button onClick={currentStep === 3 ? handleSubmit : handleNext}>
                    {currentStep === 3 ? 'Submit' : 'Next'}
                </button>
            </div>
            <div className="form-content">
                {currentStep === 1 && <Step1 formData={formData} setFormData={setFormData} errors={errors} handleNext={handleNext} />}
                {currentStep === 2 && <Step2 formData={formData} setFormData={setFormData} errors={errors} handleNext={handleNext} handleBack={handleBack} />}
                {currentStep === 3 && <Step3 formData={formData} handleBack={handleBack} handleSubmit={handleSubmit} />}
            </div>
        </div>
    );
};

export default App;
