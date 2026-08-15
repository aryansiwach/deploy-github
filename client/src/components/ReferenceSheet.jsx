// Opens reference_sheet.xlsx in a new tab. Early/stub component -- the
// file is not currently present in client/public/, so this button 404s
// until that file is added.
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