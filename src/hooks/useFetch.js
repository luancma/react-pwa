import React, { useState, useEffect } from 'react';

export default function useFetch({ request }) {
  const [values, setValues] = useState([]);

  const [loading, setLoading] = useState(true);

  console.log(request);

  useEffect(() => {
    request().then(value => setValues(value.data));
  }, []);

  return { values, loading };
}
