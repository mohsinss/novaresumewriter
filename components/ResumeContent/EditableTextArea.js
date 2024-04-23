import React from 'react';

export default function EditableTextArea({ isEditing, value, onChange, className, onClick }) {
  if (isEditing) {
    return (
      <textarea
        className={className}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
  return <span className={className} onClick={onClick}>{value}</span>;
}