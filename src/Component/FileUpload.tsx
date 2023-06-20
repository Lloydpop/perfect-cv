import { CloudArrowUpIcon, DocumentIcon } from "@heroicons/react/24/outline";
import { truncateText } from "../Utilis/Utilis";
import Label from "./Form/Label/Label";
import { useRef, useEffect, useState } from "react";
import ButtonElement from "./Button/Button";

export const FileUpload = (props: {
  Icon?: string;
  infoText?: string;
  accept?: string;
  id?: string;
  onChange: (e?: any) => void;
  label?: string;
  file?: any;
  children?: any;
  removeFile?: any;
  url?: string;
}) => {
  const dragAndDropRef: any = useRef();
  const [isDragActive, setIsDragActive] = useState(false);
  const {
    Icon = DocumentIcon,
    infoText,
    label,
    accept,
    id,
    onChange,
    file,
    removeFile,
    children,
    url,
  } = props;

  const handleDragEnter = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    let files = [...e.dataTransfer.files];
    if (files && files.length > 0) {
      onChange({
        ...e,
        target: { files },
      });
    }
    e.dataTransfer.clearData();
    setIsDragActive(false);
  };

  useEffect(() => {
    const dropContainer: any = dragAndDropRef.current;
    if (dropContainer) {
      dropContainer.addEventListener("dragenter", handleDragEnter);
      dropContainer.addEventListener("dragleave", handleDragLeave);
      dropContainer.addEventListener("dragover", handleDragOver);
      dropContainer.addEventListener("drop", handleDrop);
    }
    return () => {
      if (dropContainer) {
        dropContainer.removeEventListener("dragenter", handleDragEnter);
        dropContainer.removeEventListener("dragleave", handleDragLeave);
        dropContainer.removeEventListener("dragover", handleDragOver);
        dropContainer.removeEventListener("drop", handleDrop);
      }
    };
  }, [dragAndDropRef]);

  const opacity = isDragActive ? "0.5" : "1";

  return (
    <>
      {label && <Label name={label} />}
      <div
        className="flex flex-col justify-center items-center rounded-md border-2 border border-gray-600 px-6 pt-5 pb-6 w-full h-full"
        ref={dragAndDropRef}
        style={{ opacity }}
      >
        <div className="space-y-1 w-full">
          <Icon className="mx-auto h-14 w-14 text-blue-500" />
          <div className="flex text-sm text-gray-600 justify-center text-center">
            <label
              htmlFor={id}
              className="relative cursor-pointer rounded-md bg-white font-medium text-primary focus-within:outline-none"
            >
              {!file && <span>Upload a file</span>}
              <input
                id={id}
                name={id}
                type="file"
                className="sr-only"
                accept={accept}
                onChange={onChange}
              />
            </label>
            {!file && <p className="pl-1">or drag and drop</p>}
          </div>
          <div className="pt-2">
            {file ? (
              <>
                <div className="flex justify-center w-full">
                  <span className="inline-flex items-center rounded-full bg-gray-50 py-1 px-2 text-xs font-medium text-gray-700 border border-gray-300 text-center justify-center">
                    {truncateText(file[0]?.name, 20)}
                    <button
                      type="button"
                      onClick={removeFile}
                      className="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-gray-500 bg-gray-200 hover:bg-red-100 hover:text-red-700 focus:bg-red-100 focus:text-red-400 focus:outline-none"
                    >
                      <span className="sr-only">Remove small option</span>
                      <svg
                        className="h-2 w-2"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 8 8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeWidth="1.5"
                          d="M1 1l6 6m0-6L1 7"
                        />
                      </svg>
                    </button>
                  </span>
                </div>
                {children}
              </>
            ) : (
              <p className="text-sm text-gray-500 text-center">{infoText}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
