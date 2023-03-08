import { PropsWithChildren } from "react";
import { Formik, FormikHelpers } from "formik";

interface FormComponentProps {
  initialValues: any;
  validationSchema: any;
  onSubmit: any;
}
const FormComponent = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: PropsWithChildren<FormComponentProps>) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default FormComponent;
