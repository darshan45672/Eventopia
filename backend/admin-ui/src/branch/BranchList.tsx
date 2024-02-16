import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BranchList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Branches"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
 
        <DateField source="createdAt" label="Created At" />
        {/* <TextField label="ID" source="id" /> */}
        {/* <TextField label="img" source="img" /> */}
        <TextField label="Name" source="name" />
        <TextField label="Association Name" source="associationName" />
        {/* <DateField source="updatedAt" label="Updated At" /> */}
      </Datagrid>
    </List>
  );
};
