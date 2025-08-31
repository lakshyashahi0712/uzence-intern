import React, { type PropsWithChildren } from "react";
import clsx from "clsx";


type InputFieldProps = PropsWithChildren<{

  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}>
export const InputField = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = "outlined",
  size = "md",

}: InputFieldProps) => {
  const inputId = React.useId();

  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  }

  const variantStyles = {
    filled:
      "bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-700 rounded-md",
    outlined:
      "bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 rounded-md",
    ghost:
      "bg-transparent border-0 border-b-2 border-gray-400 dark:border-gray-500 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-0 rounded-none shadow-none",
  };



  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={invalid}
        aria-describedby={invalid ? `${inputId}-error` : undefined}
        className={clsx(
          "w-full outline-none transition",
          sizeStyles[size],
          variantStyles[variant],
          {
            "!border-red-500 focus:!ring-red-500": invalid,
            "opacity-50 cursor-not-allowed": disabled,
          }
        )}
      />

      {helperText && !invalid && (
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{helperText}</p>
      )}
      {invalid && errorMessage && (
        <p id={`${inputId}-error`} className="mt-1 text-xs text-red-600 dark:text-red-400">
          {errorMessage}
        </p>
      )}
    </div>
  )
}


