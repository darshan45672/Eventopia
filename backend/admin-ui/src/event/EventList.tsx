import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
  ImageField
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BRANCH_TITLE_FIELD } from "../branch/BranchTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";

export const EventList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Events"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        {/* <TextField label="attendance_code" source="attendanceCode" /> */}
    
        <ImageField source="img" title="img" className="img-fluid"/>
      
        <TextField label="Title" source="title" />
        <ReferenceField label="Branch" source="branch.id" reference="Branch">
          <TextField source={BRANCH_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        {/* <TextField label="Description" source="description" /> */}
     
        <TextField label="Event Type" source="eventType" />
        {/* <TextField label="ID" source="id" /> */}
        {/* <TextField label="img" source="img" /> */}

        {/* <TextField label="Registration End Date" source="registrationEndDate" /> */}
        <DateField locales="fr-FR"  label="Start date" source="startDate" />
        <DateField locales="fr-FR"  label="End date" source="endDate" />
        {/* <TextField label="Venue" source="venue" /> */}
        {/* <DateField source="updatedAt" label="Updated At" /> */}
        <DateField source="createdAt" label="Created At" locales="fr-FR"   />

      </Datagrid>
    </List>
  );
};
