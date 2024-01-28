import React from 'react';

function Button({ text, onClick, variant, disabled, className, ...rest }) {
  const baseStyles = 'px-4 py-2 rounded focus:outline-none';
  let variantStyles = '';

  switch (variant) {
    case 'primary':
      variantStyles = 'bg-indigo-950 text-white hover:bg-indigo-900';
      break;
    case 'secondary':
      variantStyles = 'bg-gray-500 text-white hover:bg-gray-600';
      break;
    default:
      variantStyles = 'bg-gray-500 text-white hover:bg-gray-600';
  }

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${disabledStyles} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {text}
    </button>
  );
}

export default Button;
