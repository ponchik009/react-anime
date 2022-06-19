import React from "react";

export const useFetch = (fetchFunction) => {
  const [isLoading, setIsLoading] = React.useState(false);

  function fetchData(direction) {
    setIsLoading(true);
    return fetchFunction(direction)
      .then((data) => {
        return data;
      })
      .finally(() => setIsLoading(false));
  }

  return [fetchData, isLoading];
};
