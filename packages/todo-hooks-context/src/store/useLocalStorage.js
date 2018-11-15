import React from "react";
import localforage from "localforage";

export function useDehydrated() {
  const [loading, setLoading] = React.useState(true);
  const [dehydratedState, setHydratedState] = React.useState();

  /**
   * Dehydrate state from localstorage
   * only first time when component mount
   */
  React.useEffect(() => {
    localforage.getItem("todoState").then(state => {
      if (state) {
        console.log("dehydrated state...");
        setHydratedState(state);
      }
      setLoading(false);
    });
  }, []);


  return {
    loading,
    dehydratedState
  };
}

export function useHydrated(todoAppState) {
  React.useEffect(
    () => {
      if (!todoAppState) {
        return;
      }
      console.log("hydrated state...");
      localforage.setItem("todoState", todoAppState);
    },
    [todoAppState]
  );
}
