import * as React from "react";
import {useState} from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  
} from "react-admin";

import { EventTitle } from "../event/EventTitle";
import { UserTitle } from "../user/UserTitle";

import ImageUpload from './ImageUpload'
import TextField from '@mui/material/TextField';

export const BranchCreate = (props: CreateProps): React.ReactElement => {

  const [imgUrl, setImgUrl] = useState<string>('');

  const handleUpload = (url: string) => {
    // Do something with the uploaded file URL
    console.log(url);
    setImgUrl(url);
 

    // update the record with the new image URL // update the record with the new image URL
  };

  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Association Name" source="associationName" />
        {/* <ReferenceArrayInput
          source="events"
          reference="Event"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventTitle} />
        </ReferenceArrayInput> */}
        {/* <TextInput label="img" source="img" value={imgUrl} key={imgUrl} /> */}


        {imgUrl ? (
        <TextInput source="img" label="Branch logo" defaultValue={imgUrl} />
      ) : (
        <ImageUpload onUpload={handleUpload} />
      )}
      {/* <ImageUpload onUpload={handleUpload} /> */}

        <TextInput label="Name" source="name" />
        {/* <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput> */}
      </SimpleForm>
    </Create>
  );
};
