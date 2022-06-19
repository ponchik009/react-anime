import React from "react";

export const useFetch = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  function fetchData(fetchFunction, ...args) {
    setIsLoading(true);
    return fetchFunction(...args)
      .then((data) => {
        return data;
      })
      .finally(() => setIsLoading(false));
  }

  return [fetchData, isLoading];
};
