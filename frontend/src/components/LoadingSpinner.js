import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner'; // Adjust the import path

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call with a delay
    setTimeout(() => {
      // After fetching data, set loading to false
      setData('Fetched data');
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? <LoadingSpinner /> : <p>{data}</p>}
    </div>
  );
};

export default DataFetchingComponent;
