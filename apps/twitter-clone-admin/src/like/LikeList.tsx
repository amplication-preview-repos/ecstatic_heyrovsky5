import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LikeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Likes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="liker" source="liker" />
        <TextField label="likedPost" source="likedPost" />
        <TextField label="likerId" source="likerId" />
        <TextField label="likedPostId" source="likedPostId" />
      </Datagrid>
    </List>
  );
};
