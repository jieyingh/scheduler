import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "formTitle": "Public Safety Staff Preferences Form",
            'identificationTitle' : 'Identification',
            'availabilitiesTitle' : "Availabilities",
            'staffID' : 'Staff ID',
            'staffIDHelper' : 'Please input your staff ID as it appears on the staff portal',
            'friendsTitle' : 'Friends',
            'friendsText' : 'If there are any friends you would like to work with, you may indicate as such here by clicking the \"Add Friend\" button. As much as possible, we will try to schedule you and your friends together!',
            'addFriendButton' : 'Add Friend',
            "taskPrefTitle" : "Task Preferences",
            "taskPrefText" : "If there are any restrictions you want the scheduling team to be aware of, please write them here. We will try our best to accomodate you!",
            "portalsLabel": "Portals",
            "exhibitionHallLabel": "Exhibition Hall",
            "patrollingLabel": "Patrolling",
            "eventsLabel": "Events",
            "registrationLabel": "Registration",
            "otherReqsTitle" : "Other Requests (optional)",
            "otherReqsText" : "If there are any restrictions you want the scheduling team to be aware of, please write them here. We will try our best to accomodate you!",
            "otherReqsTextFieldLabel" : "Other restrictions",
            "otherReqsTextFieldPlaceholder" : "Enter other restrictions here",
            "generalCommentsText" : "If there are any comments you want the scheduling team to consider, please write them here!",
            "generalCommentsTextFieldLabel" : "Other Comments",
            "generalCommentsTextFieldPlaceholder" : "Enter comments here",
            "submitButton" : "Submit",
            "submitConfirmationPopUpText" : "Once you submit your form, the answers can no longer be edited. <br/><br/> If you would like to be emailed a copy of your form responses, you may write it here.",
            "emailOptionalTextFieldLabel" : "Email Address (optional)",
            "cancelButton" : "Cancel",
            'subscribeButton' : "Subscribe"
            
        }
    },
    fr: {
        translation:{
            "formTitle" : "Formulaire de Préférences du Personnel de Sécurité Publique",
            "identificaitonTitle": "Identification",
            "availabilitiesTitle" : "Disponibilités",
            'staffID' : 'Staff ID',
            'staffIDHelper' : 'Please input your staff ID as it appears on the staff portal',
            'friendsTitle' : 'Amis',
            'friendsText' : 'If there are any friends you would like to work with, you may indicate as such here by clicking the \"Add Friend\" button. As much as possible, we will try to schedule you and your friends together!',
            'addFriendButton' : 'Ajouter ami.e(s)',
            "taskPrefTitle" : "Task Preferences",
            "taskPrefText" : "If there are any restrictions you want the scheduling team to be aware of, please write them here. We will try our best to accomodate you!",
            "portalsLabel": "Portailles",
            "exhibitionHallLabel": "Exhibition Hall",
            "patrollingLabel": "Patrolling",
            "eventsLabel": "Events",
            "registrationLabel": "Registration",
            "otherReqsTitle" : "Other Requests (optional)",
            "otherReqsText" : "If there are any restrictions you want the scheduling team to be aware of, please write them here. We will try our best to accomodate you!",
            "otherReqsTextFieldLabel" : "Other restrictions",
            "otherReqsTextFieldPlaceholder" : "Enter other restrictions here",
            "generalCommentsText" : "If there are any comments you want the scheduling team to consider, please write them here!",
            "generalCommentsTextFieldLabel" : "Autre commentaires",
            "generalCommentsTextFieldPlaceholder" : "Enter comments here",
            "submitButton" : "Soumettre",
            "submitConfirmationPopUpText" : "Once you submit your form, the answers can no longer be edited. <br/><br/> If you would like to be emailed a copy of your form responses, you may write it here.",
            "emailOptionalTextFieldLabel" : "Email Address (optional)",
            "cancelButton" : "Annuler",
            'subscribeButton' : "Souscrire"

        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        keySeparator: false,
        interpolation:{
            escapeValue: false
        }
    });

export default i18n;