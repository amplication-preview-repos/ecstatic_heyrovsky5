import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LikeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="liker" source="liker" />
        <TextInput label="likedPost" source="likedPost" />
        <TextInput label="likerId" source="likerId" />
        <TextInput label="likedPostId" source="likedPostId" />
      </SimpleForm>
    </Create>
  );
};