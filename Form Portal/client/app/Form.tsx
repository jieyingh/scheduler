'use client'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {MouseEvent, ReactNode, useState} from 'react';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

export default function Form() {
  const [friends, setFriends] = useState<string[]>([]);
  const [rows, setRows] = useState<ReactNode[]>([]);
  const [submitFormOpen, setSubmitFormOpen] = useState(false);
  const [email, setEmail] = useState("");

  const addFriend = () => {
    const newFriends = [
      ...friends,
      ""
    ];
    setFriends(newFriends);

    let newRows = [];

    for (let i = 0; i < newFriends.length; i++) {
      newRows.push(
        <div key={i}>
          <TextField
            label="Staff ID"
            variant="outlined"
            placeholder="P123456"
            helperText="Please input your friend's staff ID as it appears in the staff portal"
            fullWidth
            InputProps={{
              sx: {borderRadius: '8px'},
            }}
          />
        </div>
      );
    }

    setRows(newRows);
  }

  const removeFriend = (index: number) => {
    const _friends = [...friends];
    _friends.splice(index, 1);
    setFriends(_friends);
  };

  const onSubmitClick = (event: MouseEvent) => {
    event.preventDefault();
    setSubmitFormOpen(true);
  }

  const onCancelClick = (event: MouseEvent) => {
    event.preventDefault();
    setSubmitFormOpen(false);
  }

  const onSubmit = (event: MouseEvent) => {
    event.preventDefault();
    // TODO: process email
    setSubmitFormOpen(false);
  }

  return (
    <>
      <div className="w-full h-full bg-emerald-50 grow flex flex-col items-center p-8">
        <div className="w-full max-w-screen-md flex flex-col gap-8 p-8 text-emerald-600">
          {/* TITLE SECTION */}
          <h1 className="text-4xl font-semibold">
            Public Safety Staff Preferences form
          </h1>

          {/* IDENTIFICATION SECTION */}
          <div className="bg-white w-full h-full- rounded-3xl shadow-xl px-8 py-4 flex flex-col gap-4">
            <h2 className="text-2xl">
              Identification
            </h2>
            <TextField
              label="Staff ID"
              variant="outlined"
              placeholder="P123456"
              helperText="Please input your staff ID as it appears in the staff portal"
              fullWidth
              InputProps={{
                sx: {borderRadius: '8px'},
              }}
            />
          </div>

          {/* AVAILABILITIES SECTION */}
          <div className="bg-white w-full h-full- rounded-3xl shadow-xl px-8 py-4 flex flex-col gap-4">
            <h2 className="text-2xl">
              Availabilities
            </h2>
            {/* Availabilities grid goes here */}
          </div>

          {/* FRIENDS SECTION */}
          <div className="bg-white w-full h-full- rounded-3xl shadow-xl px-8 py-4 flex flex-col gap-4">
            <h2 className="text-2xl">
              Friends
            </h2>
            <span>
            If there are any friends you would like to work with, you may indicate as such here by clicking the
              &apos;Add Friend&apos; button. As much as possible, we will try to schedule you and your friends together!
          </span>
            {rows}
            <span>
            <Button variant="outlined" onClick={addFriend}>
              Add Friend
            </Button>
          </span>
          </div>

          {/* TASKS SECTION */}
          <div className="bg-white w-full h-full- rounded-3xl shadow-xl px-8 py-4 flex flex-col gap-4">
            <h2 className="text-2xl">
              Task Preferences
            </h2>
            <span>
            If there are any restrictions you want the scheduling team to be aware of, please write them here. We will try our best to accomodate you!
          </span>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked/>} label="Portals"/>
              <FormControlLabel control={<Checkbox defaultChecked/>} label="Exhibition Hall"/>
              <FormControlLabel control={<Checkbox defaultChecked/>} label="Patrolling"/>
              <FormControlLabel control={<Checkbox defaultChecked/>} label="Events"/>
              <FormControlLabel control={<Checkbox defaultChecked/>} label="Registration"/>
            </FormGroup>
          </div>

          {/* GENERAL SECTION */}
          <div className="bg-white w-full h-full- rounded-3xl shadow-xl px-8 py-4 flex flex-col gap-4">
            <h2 className="text-2xl">
              Other Requests (optional)
            </h2>
            <div className="flex flex-col gap-8 w-full">
              <div className="w-full flex flex-col gap-2">
              <span>
                If there are any restrictions you want the scheduling team to be aware of, please write them here. We will try our best to accomodate you!
              </span>
                <TextField
                  label="Other restrictions"
                  placeholder="Placeholder"
                  fullWidth
                  multiline
                />
              </div>
              <div className="w-full flex flex-col gap-2">
              <span>
                If there are any comments you want the scheduling team to consider, please write them here!
              </span>
                <TextField
                  label="General comments"
                  placeholder="Placeholder"
                  fullWidth
                  multiline
                />
              </div>
            </div>
          </div>

          {/* SUBMIT CONTROLS */}
          <span className="w-full flex flex-row-reverse">
            <Button variant="outlined" onClick={onSubmitClick}>
              Submit
            </Button>
          </span>
        </div>
      </div>

      <Dialog
        open={submitFormOpen}
      >
        <DialogTitle>Submit</DialogTitle>
        <DialogContent className="text-emerald-600 flex flex-col gap-4">
          <span>
            Once you submit your form, the answers can no longer be edited.
          </span>

          <span>
            If you would like to be emailed a copy of your form responses, you may write it here.
          </span>
          <TextField
            autoFocus
            margin="dense"
            name="email"
            label="Email Address (optional)"
            type="email"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={onCancelClick}>Cancel</Button>
          <Button variant="outlined" onClick={onSubmit}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}