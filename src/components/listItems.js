import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeIcon from '@material-ui/icons/Home';
import ContactsIcon from '@material-ui/icons/Contacts';
import DialpadIcon from '@material-ui/icons/Dialpad';
import CakeIcon from '@material-ui/icons/Cake';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

export const mainListItems = (
  <div>
    <Link to="/"> 
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    </Link>

    <Link to="/contacts"> 
    <ListItem button>
      <ListItemIcon>
        <ContactsIcon />
      </ListItemIcon>
      <ListItemText primary="Contacts" />
    </ListItem>
    </Link>

    <Link to="/contact"> 
    <ListItem button>
      <ListItemIcon>
        <DialpadIcon />
      </ListItemIcon>
      <ListItemText primary="Add Contact" />
    </ListItem>
    </Link>

    <Link to="/birthdays"> 
    <ListItem button>
      <ListItemIcon>
        <CakeIcon />
      </ListItemIcon>
      <ListItemText primary="Birthdays" />
    </ListItem>
    </Link>

    <Link to="/create"> 
    <ListItem button>
      <ListItemIcon>
        <AddCircleOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Add Birthday" />
    </ListItem>
    </Link>

  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Personal files</ListSubheader>
    <Link to="/todo">
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="TODO" />
    </ListItem>
    </Link>

    <Link to="/todos/add">
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Add a TODO" />
    </ListItem>
    </Link>

    <Link to="/debts/add">
    <ListItem button>
      <ListItemIcon>
        <MonetizationOnIcon />
      </ListItemIcon>
      <ListItemText primary="Debts" />
    </ListItem>
    </Link>
  </div>
);