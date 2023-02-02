import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PersonalInformation } from '../pages/CVsteps/PersonalInformation/PersonalInformation';
import { PrivateRoute } from '../hoc/PrivateRoute';
import LoginPage from '../pages/LoginPage/LoginPage';
import PersonalCabinetPage from '../pages/PersonalCabinetPage/PersonalCabinetPage';
import MyCV from '../pages/MyCV/MyCV';
import PersonalDetails from '../pages/PersonalDetails/PersonalDetails';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import CV from '../pages/CV/CV';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Navigate to='/main/my-cv' />} />
          <Route path='/main' element={<PersonalCabinetPage />}>
            <Route path='/main' element={<Navigate to='/my-cv' replace />} />
            <Route path='personal-details' element={<PersonalDetails />} />
            <Route path='my-cv' element={<MyCV />} />
          </Route>
          <Route path='/cv' element={<CV />}>
            <Route path='/cv' element={<Navigate to='/main/my-cv' replace />} />
            <Route path='personal-info/:uuid' element={<PersonalInformation />} />
            <Route path='personal-info' element={<PersonalInformation />} />
          </Route>
          <Route path='/404' element={<NotFoundPage />} />
        </Route>
        <Route path='/auth' element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
