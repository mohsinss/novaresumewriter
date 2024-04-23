import React from 'react';

export default function EditableText({ isEditing, value, onChange, className, onClick }) {
    if (isEditing) {
    return (
      <input
        type="text"
        className={className}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
  return <span className={className} onClick={onClick}>{value}</span>;
}