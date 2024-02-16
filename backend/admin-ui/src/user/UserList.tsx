import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BRANCH_TITLE_FIELD } from "../branch/BranchTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
     
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Email" source="email" />
        <TextField label="Username" source="username" />
      
   
        <TextField label="Gender" source="gender" />
        <ReferenceField label="Branch" source="branch.id" reference="Branch">
          <TextField source={BRANCH_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
    
        
        {/* <TextField label="ID" source="id" /> */}
    
        {/* <TextField label="Profile Path" source="profilePath" /> */}
        {/* <TextField label="Roles" source="roles" /> */}
        {/* <DateField source="updatedAt" label="Updated At" /> */}
      
        {/* <TextField label="USN" source="usn" /> */}
      </Datagrid>
    </List>
  );
};
