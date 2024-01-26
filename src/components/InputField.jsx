// InputField.js
import React from 'react';

const InputField = ({ label, type, placeholder, value, onChange, className }) => {
    return (
        <div className="mb-4">
            <label className="block text-[#121d50] mb-3 text-sm font-poppins">{label}</label>
            <input
                type={type}
                className={className}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;
