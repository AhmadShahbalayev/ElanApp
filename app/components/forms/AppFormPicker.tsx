import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import AppErrorMessage from "./AppErrorMessage";
import { ICategoryItem } from "../../config/interfaces";

interface IProps {
    items: ICategoryItem[];
    name: string;
    placeholder: string;
}

function AppFormPicker({ items, name, placeholder }: IProps) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        // @ts-ignore
        selectedItem={values[name]}
      />
      <AppErrorMessage errorText={errors[name as keyof typeof errors]} visible={touched[name as keyof typeof touched]} />
    </>
  );
}

export default AppFormPicker;
