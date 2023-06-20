import { useState, useCallback } from "react";

export const useResume = () => {
  const [url, setUrl] = useState("");
  const [files, setFile] = useState<any>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: any = e.target.files;
    setFile(files);
    return files.length > 0 && setUrl(URL.createObjectURL(files[0]));
  };
  const clearFile = useCallback(() => {
    setFile(null);
    setUrl("");
  }, []);

  return {
    handleChange,
    url,
    clearFile,
    files,
  };
};
