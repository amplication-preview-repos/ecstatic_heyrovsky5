import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="author" source="author" />
        <TextInput label="authorId" source="authorId" />
      </SimpleForm>
    </Edit>
  );
};