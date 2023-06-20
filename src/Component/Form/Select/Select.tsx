import React from "react";

import { Controller } from "react-hook-form";
import Label from "../Label/Label";
import ReactSelect from "react-select";
import ErrorMessage from "../Error/Error";
console.log(React);
interface Props {
  control?: any;
  options?: any;
  isMulti?: boolean;
  error?: string;
  label?: string;
  onChange?: any;
  disabled?: boolean;
  name?: any;
}
export const Select = ({
  control,
  options,
  isMulti,
  name,
  error,
  label,
  onChange,
  disabled,
}: Props) => {
  return (
    <div className={`${disabled && "cursor-not-allowed"}`}>
      <Label name={label} />
      <div className="mt-1">
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <ReactSelect
              {...field}
              
              options={options}
              isMulti={isMulti}
              onChange={(val?: string) => {
                field.onChange(val);
                onChange?.(val);
              }}
              isDisabled={disabled}
            />
          )}
        />
      </div>
      {error && <ErrorMessage msg={error} />}
    </div>
  );
};
