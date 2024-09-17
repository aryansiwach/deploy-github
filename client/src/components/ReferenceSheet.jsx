import React from 'react';

const ReferenceSheet = () => {
  const handleClick = () => {
    window.open('reference_sheet.xlsx', '_blank');
  };

  return (
    <div>
      <button onClick={handleClick}>Reference Sheet</button>
    </div>
  );
};

export default ReferenceSheet;