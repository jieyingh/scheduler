'use client'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { MouseEvent, ReactNode, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import AvailabilityPicker from './components/AvailabilityPicker/AvailabilityPicker';
import { DateTime, Duration, Interval } from "luxon";

export default function Form() {
  const {t} = useTranslation();
  const [friends, setFriends] = useState<string[]>([]);
  const [rows, setRows] = useState<ReactNode[]>([]);
  const [submitFormOpen, setSubmitFormOpen] = useState(false);
  const [email, setEmail] = useState("");

  const slotDuration: Duration = Duration.fromMillis(900000);
  const startDate: DateTime = DateTime.fromISO("2024-08-01T04:00:00-0400");
  const endDate: DateTime = DateTime.fromISO("2024-08-03T04:00:00-0400");
  const workIntervals: Interval[] = [
    Interval.fromISO("2024-08-01T08:00:00-0400/2024-08-01T12:00:00-0400"),
    Interval.fromISO("2024-08-01T13:00:00-0400/2024-08-01T21:00:00-0400"),
    Interval.fromISO("2024-08-02T08:00:00-0400/2024-08-03T03:00:00-0400")
  ]

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
            label={t('label.staffID')}
            variant="outlined"
            placeholder="P123456"
            helperText={t("text.staffIDHelper")}
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
            {t("title.form")}
          </h1>

          {/* IDENTIFICATION SECTION */}
          <div className="bg-white w-full h-full- rounded-3xl shadow-xl px-8 py-4 flex flex-col gap-4">
            <h2 className="text-2xl">
              {t('title.identification')}
            </h2>
            <TextField
              label={t('label.staffID')}
              variant="outlined"
              placeholder="P123456"
              helperText={t('text.staffIDHelper')}
              fullWidth
              InputProps={{
                sx: {borderRadius: '8px'},
              }}
            />
          </div>

          {/* AVAILABILITIES SECTION */}
          <div className="bg-white w-full h-full- rounded-3xl shadow-xl px-8 py-4 flex flex-col gap-4">
            <h2 className="text-2xl">
              {t('title.availabilities')}
            </h2>
            <AvailabilityPicker slotDuration={slotDuration} intervals={workIntervals} startDate={startDate}
                                endDate={endDate}/>
          </div>

          {/* FRIENDS SECTION */}
          <div className="bg-white w-full h-full- rounded-3xl shadow-xl px-8 py-4 flex flex-col gap-4">
            <h2 className="text-2xl">
              {t('title.friends')}
            </h2>
            <span>
            {t('text.friends')}
          </span>
            {rows}
            <span>
            <Button variant="outlined" onClick={addFriend}>
              {t('button.addFriend')}
            </Button>
          </span>
          </div>

          {/* TASKS SECTION */}
          <div className="bg-white w-full h-full- rounded-3xl shadow-xl px-8 py-4 flex flex-col gap-4">
            <h2 className="text-2xl">
              {t("title.taskPref")}
            </h2>
            <span>
              {t("text.taskPref")}
          </span>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked/>} label={t('label.portals')}/>
              <FormControlLabel control={<Checkbox defaultChecked/>} label={t('label.exhibitionHall')}/>
              <FormControlLabel control={<Checkbox defaultChecked/>} label={t('label.patrolling')}/>
              <FormControlLabel control={<Checkbox defaultChecked/>} label={t('label.events')}/>
              <FormControlLabel control={<Checkbox defaultChecked/>} label={t('label.registration')}/> </FormGroup>
          </div>

          {/* GENERAL SECTION */}
          <div className="bg-white w-full h-full- rounded-3xl shadow-xl px-8 py-4 flex flex-col gap-4">
            <h2 className="text-2xl">
              {t("title.otherReqs")}
            </h2>
            <div className="flex flex-col gap-8 w-full">
              <div className="w-full flex flex-col gap-2">
              <span>
                {t('text.otherReqs')}
              </span>
                <TextField
                  label={t("label.otherReqsTextField")}
                  placeholder={t("placeholder.otherReqsTextField")}
                  fullWidth
                  multiline
                />
              </div>
              <div className="w-full flex flex-col gap-2">
              <span>
                {t("text.generalComments")}
              </span>
                <TextField
                  label={t("label.generalCommentsTextField")}
                  placeholder={t("placeholder.generalCommentsTextField")}
                  fullWidth
                  multiline
                />
              </div>
            </div>
          </div>

          {/* SUBMIT CONTROLS */}
          <span className="w-full flex flex-row-reverse">
            <Button variant="outlined" onClick={onSubmitClick}>
              {t('button.submit')}
            </Button>
          </span>
        </div>
      </div>

      <Dialog
        open={submitFormOpen}
      >
        <DialogTitle>{t('button.submit')}</DialogTitle>
        <DialogContent className="text-emerald-600 flex flex-col gap-4">
          <span>
              <Trans i18nKey="text.submitConfirmationPopUp"/>
          </span>
          <TextField
            autoFocus
            margin="dense"
            name="email"
            label={t('label.emailOptionalTextField')}
            type="email"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={onCancelClick}>{t("button.cancel")}</Button>
          <Button variant="outlined" onClick={onSubmit}>{t('button.subscribe')}</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}