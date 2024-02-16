import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BranchTitle } from "../branch/BranchTitle";
import { CategoryTitle } from "../category/CategoryTitle";
import { EventRegistrationTitle } from "../eventRegistration/EventRegistrationTitle";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="attendance_code" source="attendanceCode" />
        <ReferenceInput source="branch.id" reference="Branch" label="Branch">
          <SelectInput optionText={BranchTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="End date" source="endDate" />
        <ReferenceArrayInput
          source="eventRegistrations"
          reference="EventRegistration"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventRegistrationTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="eventType"
          label="Event Type"
          choices={[
            { label: "individual", value: "Individual" },
            { label: "Team", value: "Team" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="img" source="img" />
        <DateTimeInput
          label="Registration End Date"
          source="registrationEndDate"
        />
        <DateTimeInput label="Start date" source="startDate" />
        <TextInput label="Title" source="title" />
        <TextInput label="Venue" source="venue" />
      </SimpleForm>
    </Create>
  );
};
