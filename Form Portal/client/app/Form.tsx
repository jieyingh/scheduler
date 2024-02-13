'use client'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {MouseEvent, ReactNode, useState} from 'react';
import { useTranslation, Trans } from 'react-i18next';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

export default function Form() {
  const { t } = useTranslation();
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
            label={t ('staffID')}
            variant="outlined"
            placeholder="P123456"
            helperText={t("staffIDHelper")}
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
            {t('formTitle')}
          </h1>

          {/* IDENTIFICATION SECTION */}
          <div className="bg-white w-full h-full- rounded-3xl shadow-xl px-8 py-4 flex flex-col gap-4">
            <h2 className="text-2xl">
              {t('identificationTitle')}
            </h2>
            <TextField
              label={t ('staffID')}
              variant="outlined"
              placeholder="P123456"
              helperText={t ('staffIDHelper')}
              fullWidth
              InputProps={{
                sx: {borderRadius: '8px'},
              }}
            />
          </div>

          {/* AVAILABILITIES SECTION */}
          <div className="bg-white w-full h-full- rounded-3xl shadow-xl px-8 py-4 flex flex-col gap-4">
            <h2 className="text-2xl">
              {t('availabilitiesTitle')}
            </h2>
            {/* Availabilities grid goes here */}
          </div>

          {/* FRIENDS SECTION */}
          <div className="bg-white w-full h-full- rounded-3xl shadow-xl px-8 py-4 flex flex-col gap-4">
            <h2 className="text-2xl">
              {t ('friendsTitle')}
            </h2>
            <span>
            {t('friendsText')}
          </span>
            {rows}
            <span>
            <Button variant="outlined" onClick={addFriend}>
              {t ('addFriendButton')}
            </Button>
          </span>
          </div>

          {/* TASKS SECTION */}
          <div className="bg-white w-full h-full- rounded-3xl shadow-xl px-8 py-4 flex flex-col gap-4">
            <h2 className="text-2xl">
              {t ("taskPrefTitle")}
            </h2>
            <span>
              {t ("taskPrefText")}
          </span>
            <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked/>} label={t('portalsLabel')} />
            <FormControlLabel control={<Checkbox defaultChecked/>} label={t('exhibitionHallLabel')} />
            <FormControlLabel control={<Checkbox defaultChecked/>} label={t('patrollingLabel')} />
            <FormControlLabel control={<Checkbox defaultChecked/>} label={t('eventsLabel')} />
            <FormControlLabel control={<Checkbox defaultChecked/>} label={t('registrationLabel')} />            </FormGroup>
          </div>

          {/* GENERAL SECTION */}
          <div className="bg-white w-full h-full- rounded-3xl shadow-xl px-8 py-4 flex flex-col gap-4">
            <h2 className="text-2xl">
              {t ("otherReqsTitle")}
            </h2>
            <div className="flex flex-col gap-8 w-full">
              <div className="w-full flex flex-col gap-2">
              <span>
                {t ('otherReqsText')}
              </span>
                <TextField
                  label={t("otherReqsTextFieldLabel")}
                  placeholder={t("otherReqsTextFieldPlaceholder")}
                  fullWidth
                  multiline
                />
              </div>
              <div className="w-full flex flex-col gap-2">
              <span>
                {t("generalCommentsText")}
              </span>
                <TextField
                  label={t ("generalCommentsTextFieldLabel")}
                  placeholder={t ("generalCommentsTextFieldPlaceholder")}
                  fullWidth
                  multiline
                />
              </div>
            </div>
          </div>

          {/* SUBMIT CONTROLS */}
          <span className="w-full flex flex-row-reverse">
            <Button variant="outlined" onClick={onSubmitClick}>
              { t ('submitButton')}
            </Button>
          </span>
        </div>
      </div>

      <Dialog
        open={submitFormOpen}
      >
        <DialogTitle>{ t ('submitButton')}</DialogTitle>
        <DialogContent className="text-emerald-600 flex flex-col gap-4">
          <span>
              <Trans i18nKey = "submitConfirmationPopUpText"/>
          </span>
          <TextField
            autoFocus
            margin="dense"
            name="email"
            label={t ('emailOptionalTextFieldLabel')}
            type="email"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={onCancelClick}>{t ("cancelButton")}</Button>
          <Button variant="outlined" onClick={onSubmit}>{t ('subscribeButton')}</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}