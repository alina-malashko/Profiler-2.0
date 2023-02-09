import {
  CHANGE_DIRTY_STATUS_IN_SPECIFIC_CV,
  RESET_DIRTY_STATUS_IN_SPECIFIC_CV,
  SPECIFIC_CV_LOADING_OFF,
  SPECIFIC_CV_LOADING_ON,
  SPECIFIC_CV_NOT_FOUND_BY_UUID,
  SPECIFIC_CV_NOT_FOUND_RESET,
  UPDATE_CONTACTS_IN_SPECIFIC_CV,
  UPDATE_EXTRA_FIELDS_IN_SPECIFIC_CV,
  UPDATE_PERSONALINFORMATION_IN_SPECIFIC_CV,
  UPDATE_PHOTO_IN_SPECIFIC_CV
} from '@types';
import { nullToEmptyString } from '@utils/nullToEmptyString';

const initialState = {
  isLoading: true,
  notFound: false,
  isDirtyFormCv: false,
  isContactsExists: false,
  personalInformation: {
    uuid: '',
    imageUuid: '',
    name: '',
    surname: '',
    positionId: '',
    position: '',
    countryId: '',
    country: '',
    city: '',
    isReadyToRelocate: false,
    isReadyForRemoteWork: false
  },
  contacts: {
    phoneCode: '',
    phoneCodeId: '',
    phoneNumber: '',
    email: '',
    skype: '',
    linkedin: '',
    portfolio: ''
  }
};

export const specificCvReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DIRTY_STATUS_IN_SPECIFIC_CV:
      return {
        ...state,
        isDirtyFormCv: action.dirty
      };
    case RESET_DIRTY_STATUS_IN_SPECIFIC_CV:
      return {
        ...state,
        isDirtyFormCv: false
      };
    case SPECIFIC_CV_LOADING_ON: {
      return {
        ...state,
        isLoading: true
      };
    }
    case SPECIFIC_CV_LOADING_OFF: {
      return {
        ...state,
        isLoading: false
      };
    }
    case SPECIFIC_CV_NOT_FOUND_BY_UUID: {
      return {
        ...state,
        notFound: true
      };
    }
    case SPECIFIC_CV_NOT_FOUND_RESET: {
      return {
        ...state,
        notFound: false
      };
    }
    case UPDATE_EXTRA_FIELDS_IN_SPECIFIC_CV:
      return {
        ...state,
        ...action.data
      };
    case UPDATE_PERSONALINFORMATION_IN_SPECIFIC_CV:
      return {
        ...state,
        personalInformation: {
          ...state.personalInformation,
          ...action.data.personalInformation
        },
        ...action.data.extraFields
      };
    case UPDATE_CONTACTS_IN_SPECIFIC_CV:
      const values = nullToEmptyString(action.data.contacts);
      return {
        ...state,
        contacts: {
          ...state.contacts,
          ...values
        },
        isContactsExists: action.data.isContactsExists
      };
    case UPDATE_PHOTO_IN_SPECIFIC_CV:
      return {
        ...state,
        personalInformation: {
          ...state.personalInformation,
          imageUuid: action.data
        }
      };
    default:
      return state;
  }
};
