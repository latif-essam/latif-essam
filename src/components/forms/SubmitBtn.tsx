import { useFormikContext } from "formik";
import React, { CSSProperties, PropsWithChildren } from "react";

interface SubmitBtnProps {
  text?: string;
  styles?: CSSProperties | undefined;
  type?: "submit" | "reset" | "button" | undefined;
}

const SubmitBtn = ({
  text = "Submit",
  styles,
  type = "submit",
}: SubmitBtnProps) => {
  const { handleSubmit } = useFormikContext();
  return (
    <button onClick={() => handleSubmit()} type={type} style={styles}>
      {text}
    </button>
  );
};

export default SubmitBtn;
