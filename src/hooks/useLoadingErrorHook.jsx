import { useState, useEffect } from "react";

function useLoadingErrorHook(getFunction, options = {}) {
  const { dependencies = [], params = {} } = options;
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await getFunction(params);
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, dependencies);

  return { data, isLoading, error };
}

export { useLoadingErrorHook };
