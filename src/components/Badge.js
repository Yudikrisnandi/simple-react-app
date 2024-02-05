import React from 'react';

function Badge({ variant, text, dotIndicator = true }) {
  console.log(text, variant)
  let badgeStyles = '';
  let dotStyles = '';

  switch (variant) {
    case 'primary':
      badgeStyles = 'bg-blue-200 text-blue-700';
      dotStyles = 'bg-blue-700';
      break;
    case 'success':
      badgeStyles = 'bg-green-200 text-green-700';
      dotStyles = 'bg-green-700';
      break;
    case 'warning':
      badgeStyles = 'bg-yellow-200 text-yellow-700';
      dotStyles = 'bg-yellow-700';
      break;
    case 'error':
      badgeStyles = 'bg-red-200 text-red-700';
      dotStyles = 'bg-red-700';
      break;
    // Add more variants as needed
    default:
      badgeStyles = 'bg-gray-200 text-gray-700';
      dotStyles = 'bg-gray-700';
  }

  return (
    <span className={`inline-flex items-center font-bold px-3 py-1 rounded-full ${badgeStyles} max-content`}>
      {dotIndicator && (
        <span className={`h-2 w-2 rounded-full mr-1 ${dotStyles}`} />
      )}
      {text}
    </span>
  );
}

export default Badge;
