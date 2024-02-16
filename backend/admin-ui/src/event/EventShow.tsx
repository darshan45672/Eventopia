import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { EVENT_TITLE_FIELD } from "./EventTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { BRANCH_TITLE_FIELD } from "../branch/BranchTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";

export const EventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="attendance_code" source="attendanceCode" />
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
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="End date" source="endDate" />
        <TextField label="Event Type" source="eventType" />
        <TextField label="ID" source="id" />
        <TextField label="img" source="img" />
        <TextField label="Registration End Date" source="registrationEndDate" />
        <TextField label="Start date" source="startDate" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Venue" source="venue" />
        <ReferenceManyField
          reference="EventRegistration"
          target="EventId"
          label="Event Registrations"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Event" source="event.id" reference="Event">
              <TextField source={EVENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="feedback" source="feedback" />
            <TextField label="ID" source="id" />
            <BooleanField label="isAttended" source="isAttended" />
            <TextField label="team_members" source="teamMembers" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
