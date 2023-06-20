import React from "react";
import { useState, useEffect } from "react";
import { AllCountry } from "src/Services/Country.Service";

export const useCountry = () => {
  const [country, setCountry] = useState<any>();
  const fetcher = async () => {
    const { data } = await AllCountry();
    const sort = data?.sort(function (a: any, b: any) {
      if (a?.name?.common < b?.name?.common) {
        return -1;
      }
      if (a?.name?.common > b?.name?.common) {
        return 1;
      }
      return 0;
    });
    const main = sort?.map((dat: any) => {
      return {
        label: dat?.name?.common,
        value: dat?.name?.common.toLowerCase(),
        flags: dat?.flags?.svg,
      };
    });
    setCountry(main);
    console.log(sort);
  };
  useEffect(() => {
    fetcher();
  }, []);
  useEffect(() => {
    window.addEventListener("error", (e) => {
      if (e.message === "ResizeObserver loop limit exceeded") {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });
  }, []);
  return {
    country,
  };
};

export default useCountry;
