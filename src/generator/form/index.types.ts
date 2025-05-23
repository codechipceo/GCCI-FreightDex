type CommonFieldProps = {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  disabled?: boolean;
  colSpan?: number;
};


type TextField = CommonFieldProps & {
  type: "text" | "email" | "password";
};

type RadioField = CommonFieldProps & {
  type: "radio";
  options: { label: string; value: string }[];
};

type CheckboxField = CommonFieldProps & {
  type: "checkbox";
  options?: { label: string; value: string }[]; // optional for single checkbox
};

type MultiSelectField = CommonFieldProps & {
  type: "multiselect";
  options: { label: string; value: string }[];
};


type GroupField = {
  type: "group";
  fields: FieldSchema[];
};

type ArrayField = CommonFieldProps & {
  type: "array";
  item: GroupField;
};


export type FieldSchema =
  | TextField
  | RadioField
  | CheckboxField
  | MultiSelectField
  | ArrayField;


  export interface GroupFieldSchema {
    type: "group";
    fields: FieldSchema[];
}

export interface ArrayFieldSchema  {
  label: string;
  type: "array";
  item: {
    fields: FieldSchema[];
  };
}

export
interface RenderFieldProps {
  field: FieldSchema;
  value: any;
  onChange: (val: any) => void;
}

export interface RenderGroupProps {
  fields: GroupFieldSchema["fields"];
  value: any;
  onChange: (val: any) => void;
  columns?: number;
}
export interface RenderArrayFieldProps {
  field: ArrayFieldSchema;
  value: Data[];
  onChange: (val: any[]) => void;
}
export type Data = {
  [key: string]: string | number | boolean | string[] | Data[];
};
export interface DynamicFormProps {
  schema: FieldSchema[];
  data: Data;
  setData: (item: Data) => void;
}