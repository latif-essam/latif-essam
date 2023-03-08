import React, { PropsWithChildren } from "react";

interface ErrorMessageComponentProps {
  error: string;
  visible: boolean;
}
const ErrorMessageComponent = ({
  error,
  visible,
}: ErrorMessageComponentProps) => {
  // check if the input field is touched or not
  // this will hide the error till we start and  edit the field.
  // visible, and error Props are passed to the FormFieldComponent

  if (!visible || !error) return null;
  return <p>{error}</p>;
};

export default ErrorMessageComponent;
