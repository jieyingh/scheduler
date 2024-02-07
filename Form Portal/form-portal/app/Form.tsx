"use client"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

export default function Form() {
  const [friends, setFriends] = useState([""])
  const [rows, setRows] = useState([<div key={0} >
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <AccountCircle sx={{ color: 'action.active', h: 16, mr: 1, my: 0 }} />
      <TextField id="input-with-sx" label="Staff ID" variant="standard" helperText="Please input your friend's staff ID as it appears in the staff portal" />
    </Box>
  </div>])

  const addFriend = () => {
    setFriends([
      ...friends,
      ""
    ])

    let newRows = []

    for (let i=0; i<friends.length; i++) {
      newRows.push(
        <div key={i} >
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', h: 16, mr: 1, my: 0 }} />
            <TextField id="input-with-sx" label="Staff ID" variant="standard" helperText="Please input your friend's staff ID as it appears in the staff portal" />
          </Box>
        </div>
      )
    }

    setRows(newRows);
  }
  
  const removeFriend = (index: number) => {
    const _friends = [...friends];
    _friends.splice(index, 1);
    setFriends(_friends);
  };

  return (
    <div className="w-full h-full bg-emerald-50 grow flex flex-col items-center p-8">
      <div className="w-full max-w-screen-md flex flex-col gap-8 p-8 text-emerald-600">
        <h1 className="text-4xl font-semibold">
          Public Safety Staff Preferences form
        </h1>

        <div className="bg-white w-full h-full- rounded-3xl shadow-xl px-8 py-4 flex flex-col gap-4">
          <h2 className="text-2xl">
            Identification
            <hr/>
          </h2>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', h: 16, mr: 1, my: 0 }} />
            <TextField id="input-with-sx" label="Staff ID" variant="standard" helperText="Please input your staff ID as it appears in the staff portal" />
          </Box>
        </div>
        

        <div className="bg-white w-full h-full- rounded-3xl shadow-xl px-8 py-4 flex flex-col gap-4">
          <h2 className="text-2xl">
            Availabilities
            <hr/>
          </h2>
          {/* Availabilities grid goes here */}
        </div>
        

        <div className="bg-white w-full h-full- rounded-3xl shadow-xl px-8 py-4 flex flex-col items-start gap-4">
          <h2 className="text-2xl">
            Friends
            <hr/>
          </h2>
          {rows}
          <Button variant="outlined" onClick={addFriend}>Add Friend</Button>
        </div>

        <div className="bg-white w-full h-full- rounded-3xl shadow-xl px-8 py-4 flex flex-col gap-4">
          <h2 className="text-2xl">
            Task Preferences
            <hr/>
          </h2>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Portals" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Exhibition Hall" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Patrolling" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Events" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Registration" />
          </FormGroup>
        </div>
        

      </div>
    </div>
  )
}