import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { EVENT_TITLE_FIELD } from "../event/EventTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const EventRegistrationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Event Registrations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
      <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Event" source="event.id" reference="Event">
          <TextField source={EVENT_TITLE_FIELD} />
        </ReferenceField>
        {/* <TextField label="feedback" source="feedback" /> */}
        {/* <TextField label="ID" source="id" /> */}
        <BooleanField label="isAttended" source="isAttended" />
        {/* <TextField label="team_members" source="teamMembers" /> */}
        <DateField source="createdAt" label="Registered At" />
        {/* <DateField source="updatedAt" label="Updated At" /> */}
      
      </Datagrid>
    </List>
  );
};
