export default function EditableList({ isEditing, items, onChange, className, onClick }) {
    const handleItemChange = (index, newValue) => {
      const updatedItems = [...items]; // Make a shallow copy of items
      updatedItems[index] = newValue;
      onChange(updatedItems); // Update the state in the parent component
    };
  
    if (isEditing) {
      return (
        <ul className={className}>
          {items.map((item, index) => (
            <li key={index}>
              <input
                type="text"
                value={item}
                onChange={(e) => handleItemChange(index, e.target.value)}
              />
            </li>
          ))}
        </ul>
      );
    }
  
    return (
      <ul className={className} onClick={onClick}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  