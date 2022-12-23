import React from 'react';
import NavMenu from '../../components/navigation/NavMenu';
import PersonalCabinetHeader from '../../components/headers/PersonalCabinetHeader';
import styles from './PersonalCabinetPage.module.scss';
import { Outlet } from 'react-router-dom';

const PersonalCabinetPage = (props) => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.header__burger}>
          <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75 6.67859H13.75M3.75 15.4286H20M3.75 24.1786H26.25" stroke="#407BFF" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className={styles.header__photo__icon}>
          <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18.4286" r="17.5" stroke="#407BFF"/>
            <path d="M26 13.9286C26 14.2047 26.2239 14.4286 26.5 14.4286C26.7761 14.4286 27 14.2047 27 13.9286V12.4286H28.5C28.7761 12.4286 29 12.2047 29 11.9286C29 11.6524 28.7761 11.4286 28.5 11.4286H27V9.92859C27 9.65245 26.7761 9.42859 26.5 9.42859C26.2239 9.42859 26 9.65245 26 9.92859V11.4286H24.5C24.2239 11.4286 24 11.6524 24 11.9286C24 12.2047 24.2239 12.4286 24.5 12.4286H26V13.9286Z" fill="#407BFF"/>
            <path d="M9 26.4286C9 26.9786 9.5 27.4286 10 27.4286H26C26.5 27.4286 27 26.9786 27 26.4286V17.9286C27 17.6524 26.7761 17.4286 26.5 17.4286C26.2239 17.4286 26 17.6524 26 17.9286V25.4286C26 25.9809 25.5523 26.4286 25 26.4286H11C10.4477 26.4286 10 25.9809 10 25.4286V15.1204C10 14.7383 10.3098 14.4286 10.6919 14.4286H12.6962C13.5586 14.4286 14.3812 14.0656 14.9625 13.4286C15.5438 12.7916 16.3664 12.4286 17.2288 12.4286H20.5C20.7761 12.4286 21 12.2047 21 11.9286C21 11.6524 20.7761 11.4286 20.5 11.4286H16.3622C15.4938 11.4286 14.6647 11.7911 14.075 12.4286C13.4853 13.0661 12.6562 13.4286 11.7878 13.4286H11C10.45 13.4286 9.89133 13.5366 9.5 13.9286C9.108 14.3199 9 14.8786 9 15.4286V26.4286Z" fill="#407BFF"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M22 20.4286C22 22.6377 20.2091 24.4286 18 24.4286C15.7909 24.4286 14 22.6377 14 20.4286C14 18.2194 15.7909 16.4286 18 16.4286C20.2091 16.4286 22 18.2194 22 20.4286ZM21 20.4286C21 22.0854 19.6569 23.4286 18 23.4286C16.3431 23.4286 15 22.0854 15 20.4286C15 18.7717 16.3431 17.4286 18 17.4286C19.6569 17.4286 21 18.7717 21 20.4286Z" fill="#407BFF"/>
          </svg>
        </div>
      </div>
      <div className={styles.page__background}></div>
      <div className={styles.page__container}>
        <div className={styles.page__sidebar}>
            <NavMenu />
        </div>
        <div className={styles.page__content}>
          <header className={styles.page__header}>
            <PersonalCabinetHeader />
          </header>
          <main className={styles.page__main}>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default PersonalCabinetPage;