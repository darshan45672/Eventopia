import * as React from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { DashboardMenuItem, MenuItemLink } from 'react-admin';

const Dashboard: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Card style={{ backgroundColor: '#ff9800', margin: 16, width:400, color:'#ffffff' }}>
        <CardHeader title="Event Manager" />
        <CardContent>
          <MenuItemLink to="/User" primaryText="Go to Event Manager" />
        </CardContent>
      </Card>
      <Card style={{ backgroundColor: '#2196f3', margin: 16, width:400, color:'#ffffff' }}>
        <CardHeader title="Event" />
        <CardContent>
          <MenuItemLink to="/Event" primaryText="Go to Event" />
        </CardContent>
      </Card>
      <Card style={{ backgroundColor: '#4caf50', margin: 16, width:400, color:'#ffffff' }}>
        <CardHeader title="Event Registration" />
        <CardContent>
          <MenuItemLink to="/EventRegistration" primaryText="Go to Event Registration" />
        </CardContent>
      </Card>
      <Card style={{ backgroundColor: '#f44336', margin: 16, width:400, color:'#ffffff' }}>
        <CardHeader title="Branch" />
        <CardContent>
          <MenuItemLink to="/Branch" primaryText="Go to Branch" />
        </CardContent>
      </Card>
      <Card style={{ backgroundColor: '#9c27b0', margin: 16, width:400, color:'#ffffff' }}>
        <CardHeader title="Create Event Manager" />
        <CardContent>
          <MenuItemLink to="/User/create" primaryText="Go to Create Event Manager" />
        </CardContent>
      </Card>
      <Card style={{ backgroundColor: '#607d8b', margin: 16, width:400, color:'#ffffff'}}>
        <CardHeader title="Create a Branch" />
        <CardContent>
          <MenuItemLink to="/Branch/create" primaryText="Go to Create a Branch" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
