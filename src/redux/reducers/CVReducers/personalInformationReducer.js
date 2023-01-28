import { UPDATE_PERSONALINFORMATION_FROM_PD, PHOTO_UPDATE_CV } from '../../types';

export const initialState = {
  personalInformation: {
    uuid: null,
    imageUuid: null,
    name: '',
    surname: '',
    country: '',
    countryId: '',
    position: '',
    positionId: '',
    city: '',
    isReadyToRelocate: false,
    isReadyForRemoteWork: false
  }
};

export const personalInformationReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PERSONALINFORMATION_FROM_PD:
      return {
        ...state,
        personalInformation: {
          ...state.personalInformation,
          ...action.data
        }
      };
    case PHOTO_UPDATE_CV:
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