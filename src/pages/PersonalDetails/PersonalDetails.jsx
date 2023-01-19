import React, { useEffect, useRef, useState } from 'react';
import { Form, Formik } from 'formik';
import { validatePersonalDetails } from '../../utils/validators/validatePersonalDetails';
import { useDispatch } from 'react-redux';
import {
  changeDirtyStatusFormPD,
  linkIsNotClicked,
  personalDetailsUpdate
} from '../../redux/actions';
import { PopUpCancelChanges, PopUpSave, PopUpStayOrLeave, PopUpTryAgain } from '@components/popup';
import {
  InputPersonalDetails,
  SearchBar,
  SelectPhoneNumber,
  SelectPositions
} from '@components/fields';
import { useNavigate } from 'react-router-dom';
import { Button, CancelButton } from '@components/buttons';
import { Notification } from '@components/tooltip/Notification';
import { getChangedValues } from '../../utils/getChangedValues';
import { usePersonalDetails } from '@hooks/usePersonalDetails';
import $api from '../../http/api';
import styles from './PersonalDetails.module.scss';

const PersonalDetails = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [cancelIsClicked, setCancelIsClicked] = useState(false);
  const [countryId, setCountryId] = useState(null);
  const { personalDetails, linkIsClicked } = usePersonalDetails();
  const hrefLinkIsClicked = useRef(null);
  hrefLinkIsClicked.current = linkIsClicked;

  return (
    <section className={styles.wrapper}>
      <div className={styles.blockTitle}>
        <h2 className={styles.title}>Personal details</h2>
        <Notification>
          <svg
            width='22'
            height='22'
            viewBox='0 0 22 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.1666 7.51195C9.9456 7.29092 9.82143 6.99115 9.82143 6.67857C9.82143 6.36599 9.9456 6.06622 10.1666 5.8452C10.3876 5.62417 10.6874 5.5 11 5.5C11.3126 5.5 11.6124 5.62417 11.8334 5.8452C12.0544 6.06622 12.1786 6.36599 12.1786 6.67857C12.1786 6.99115 12.0544 7.29092 11.8334 7.51195C11.6124 7.73297 11.3126 7.85714 11 7.85714C10.6874 7.85714 10.3876 7.73297 10.1666 7.51195Z'
              fill='#B0B0B0'
            />
            <path
              d='M10.2143 9.625C10.2143 9.51696 10.3027 9.42857 10.4107 9.42857H11.5893C11.6973 9.42857 11.7857 9.51696 11.7857 9.625V16.3036C11.7857 16.4116 11.6973 16.5 11.5893 16.5H10.4107C10.3027 16.5 10.2143 16.4116 10.2143 16.3036V9.625Z'
              fill='#B0B0B0'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0 11C0 4.92545 4.92545 0 11 0C17.0746 0 22 4.92545 22 11C22 17.0746 17.0746 22 11 22C4.92545 22 0 17.0746 0 11ZM1.86607 11C1.86607 16.0433 5.9567 20.1339 11 20.1339C16.0433 20.1339 20.1339 16.0433 20.1339 11C20.1339 5.9567 16.0433 1.86607 11 1.86607C5.9567 1.86607 1.86607 5.9567 1.86607 11Z'
              fill='#B0B0B0'
            />
          </svg>
        </Notification>
      </div>
      <Formik
        enableReinitialize={true}
        initialValues={personalDetails}
        validateOnChange={false}
        onSubmit={async (values, formikHelpers) => {
          const { setStatus } = formikHelpers;
          for (let key in values) {
            if (typeof values[key] === 'string') values[key] = values[key].trim();
          }

          const initialValues = {
            name: personalDetails.name || null,
            surname: personalDetails.surname || null,
            countryId: personalDetails.countryId || null,
            email: personalDetails.email || null,
            phoneCodeId: personalDetails.phoneCodeId || null,
            cellPhone: personalDetails.cellPhone || null,
            positionId: personalDetails.positionId || null
          };

          const currentValues = {
            name: values.name || null,
            surname: values.surname || null,
            countryId: values.countryId || null,
            email: values.email || null,
            phoneCodeId: values.phoneCodeId || null,
            cellPhone: values.cellPhone || null,
            positionId: values.positionId || null
          };

          try {
            if (!values.userInDB) {
              const response = await $api.post('/profile', currentValues);
              dispatch(personalDetailsUpdate({ ...values, userInDB: true }));
            } else {
              const changedValues = getChangedValues(currentValues, initialValues);
              const response = await $api.put('/profile', changedValues);
              dispatch(personalDetailsUpdate(values));
            }
            if (hrefLinkIsClicked.current && hrefLinkIsClicked.current === '/auth') {
              localStorage.removeItem('token');
              dispatch({ type: 'USER_LOGOUT' });
              navigate(linkIsClicked);
            }
            if (hrefLinkIsClicked.current && hrefLinkIsClicked.current !== '/auth') {
              navigate(linkIsClicked);
            }
          } catch (e) {
            dispatch(linkIsNotClicked());
            setStatus({ errorResponse: true });
          }
        }}
        onReset={() => {
          setIsEdit(false);
          setCancelIsClicked(false);
        }}
        validate={validatePersonalDetails}
      >
        {(formik) => {
          const { dirty, isSubmitting, isValid, setFieldValue, status, setStatus } = formik;

          useEffect(() => {
            dispatch(changeDirtyStatusFormPD(dirty));
          }, [dirty]);

          return (
            <Form className={styles.form}>
              {dirty && !isValid && linkIsClicked && <PopUpStayOrLeave />}
              {dirty && isValid && linkIsClicked && (
                <PopUpSave isSubmitting={isSubmitting}>
                  Do you want to save the changes in Personal details?
                </PopUpSave>
              )}
              {status?.errorResponse && (
                <PopUpTryAgain
                  isSubmitting={isSubmitting}
                  onClickHandler={() => setStatus({ errorResponse: false })}
                >
                  Failed to save data. Please try again
                </PopUpTryAgain>
              )}
              {cancelIsClicked && dirty && (
                <PopUpCancelChanges setCancelIsClicked={setCancelIsClicked}>
                  Do you really want to cancel the changes?
                </PopUpCancelChanges>
              )}
              <div className={styles.form__inputs}>
                <div className={styles.form__input}>
                  <InputPersonalDetails
                    name='name'
                    maxLength={50}
                    label='Name'
                    activeLabel='Enter your name'
                    disabled={!isEdit}
                  />
                </div>
                <div className={styles.form__input}>
                  <InputPersonalDetails
                    name='surname'
                    maxLength={50}
                    label='Surname'
                    activeLabel='Enter your surname'
                    disabled={!isEdit}
                  />
                </div>
                <div className={`${styles.form__input} ${styles['order-2']}`}>
                  <SearchBar
                    name='country'
                    label='Country'
                    maxLength={50}
                    activeLabel='Enter your location'
                    autoComplete={'off'}
                    disabled={!isEdit}
                    setCountryId={setCountryId}
                    setFieldValue={setFieldValue}
                  />
                </div>
                <div className={`${styles.form__input} ${styles['order-3']}`}>
                  <InputPersonalDetails
                    name='email'
                    label='Email'
                    maxLength={50}
                    activeLabel='Enter your email'
                    disabled={!isEdit}
                  />
                </div>
                <div className={`${styles.form__input} ${styles['order-2']}`}>
                  <SelectPhoneNumber
                    name='phoneCode'
                    disabled={!isEdit}
                    countryId={countryId}
                    setFieldValue={setFieldValue}
                  >
                    <InputPersonalDetails
                      name='cellPhone'
                      label='Cell phone number'
                      activeLabel='Enter cell phone number'
                      maxLength={25}
                      disabled={!isEdit}
                      showError={false}
                    />
                  </SelectPhoneNumber>
                </div>
                <div className={`${styles.form__input} ${styles['order-1']}`}>
                  <SelectPositions
                    name='position'
                    label='Position'
                    activeLabel='Choose your position'
                    disabled={!isEdit}
                    setFieldValue={setFieldValue}
                  />
                </div>
              </div>
              <div className={styles.form__buttons}>
                {!isEdit && (
                  <div className={styles.form__button}>
                    <Button type='button' onClick={() => setIsEdit(true)}>
                      Edit
                    </Button>
                  </div>
                )}
                {isEdit && (
                  <>
                    <div className={styles.form__button}>
                      <CancelButton
                        type='reset'
                        {...(dirty && {
                          type: 'button',
                          onClick: () => setCancelIsClicked(!cancelIsClicked)
                        })}
                      >
                        Cancel
                      </CancelButton>
                    </div>
                    <div className={styles.form__button}>
                      <Button type={isSubmitting ? 'button' : 'submit'} disabled={!dirty}>
                        Save
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default PersonalDetails;
