import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LikeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="liker" source="liker" />
        <TextInput label="likedPost" source="likedPost" />
        <TextInput label="likerId" source="likerId" />
        <TextInput label="likedPostId" source="likedPostId" />
      </SimpleForm>
    </Edit>
  );
};
