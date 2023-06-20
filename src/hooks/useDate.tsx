import { useState, useEffect } from "react";
export const useDate = () => {
  const [year, setYear] = useState<any>();
  const [month, setMonth] = useState<any>();
  const years = () => {
    const now = new Date().getUTCFullYear();
    const main = Array(now - (now - 500))
      .fill("")
      .map((v, idx) => {
        return {
          label: now - idx,
          value: now - idx,
        };
      });
    setYear(main);
  };
  const months = () => {
    const monthData = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    setMonth(
      monthData.map((mont) => {
        return {
          label: mont,
          value: mont,
        };
      })
    );
  };
  useEffect(() => {
    years();
    months();
  }, []);
  return {
    month,
    year,
  };
};
