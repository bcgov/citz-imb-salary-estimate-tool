import { useState } from 'react';

export const useUpload = () => {
  const [csvFile, setCsvFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'text/csv') {
      setCsvFile(file);
    } else {
      // eslint-disable-next-line no-alert
      alert('Please upload a valid CSV file.');
    }
  };

  return {
    csvFile,
    handleFileChange,
  };
};

export default useUpload;
