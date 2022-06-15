import React from "react";

export const useFetch = (fetchFunction) => {
  const [isLoading, setIsLoading] = React.useState(false);

  function fetchData() {
    setIsLoading(true);
    return fetchFunction()
      .then((data) => data)

      .finally(() => setIsLoading(false));
  }

  return [fetchData, isLoading];
};
