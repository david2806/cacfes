import React from 'react';

const Input = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  disabled = false,
  className = '',
  icon,
  ...props
}) => {
  return (
    <div className="input-group">
      {label && (
        <label htmlFor={name} className="input-label">
          {label} {required && <span style={{ color: 'var(--color-error)' }}>*</span>}
        </label>
      )}
      <div style={{ position: 'relative' }}>
        {icon && (
          <span style={{
            position: 'absolute',
            left: 'var(--spacing-md)',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--color-gray-medium)'
          }}>
            {icon}
          </span>
        )}
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`input ${error ? 'input-error' : ''} ${className}`}
          style={icon ? { paddingLeft: 'calc(var(--spacing-xl) + var(--spacing-md))' } : {}}
          {...props}
        />
      </div>
      {error && <div className="input-error-message">{error}</div>}
    </div>
  );
};

export default Input;
