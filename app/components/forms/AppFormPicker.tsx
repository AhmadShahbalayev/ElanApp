import React, { ReactNode } from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import AppErrorMessage from "./AppErrorMessage";
import { ICategoryItem } from "../../config/interfaces";

interface IProps {
    items: ICategoryItem[];
    name: string;
    placeholder: string;
    width?: number | string;
    PickerItemComponent?: ReactNode;
    numberOfColumns: number;
}

function AppFormPicker({
    items,
    name,
    PickerItemComponent,
    placeholder,
    width = '100%',
    numberOfColumns = 1,
}: IProps) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        // @ts-ignore
        selectedItem={values[name]}
        PickerItemComponent={PickerItemComponent}
        width={width}
      />
      <AppErrorMessage errorText={errors[name as keyof typeof errors]} visible={touched[name as keyof typeof touched]} />
    </>
  );
}

export default AppFormPicker;
