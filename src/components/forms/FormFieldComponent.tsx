import { useFormikContext } from "formik";
import { HTMLInputTypeAttribute, PropsWithChildren } from "react";
import ErrorMessageComponent from "./ErrorMessageComponent";

interface FormFieldComponentProps {
  name: string;
  type?: HTMLInputTypeAttribute | undefined;
  [rest: string]: any;
}
const FormFieldComponent = ({
  name,
  type = "text",
}: PropsWithChildren<FormFieldComponentProps>) => {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();

  return (
    <>
      <input
        name={name as string}
        onBlur={() => setFieldTouched(name as string)}
        onChange={handleChange(name)}
        type={type}
      />
      <ErrorMessageComponent
        error={errors[name as never]}
        visible={touched[name as never]}
      />
    </>
  );
};

export default FormFieldComponent;
