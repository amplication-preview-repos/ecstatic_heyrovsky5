import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const LikeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="liker" source="liker" />
        <TextField label="likedPost" source="likedPost" />
        <TextField label="likerId" source="likerId" />
        <TextField label="likedPostId" source="likedPostId" />
      </SimpleShowLayout>
    </Show>
  );
};
