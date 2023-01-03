import React from 'react';
import styles from './PersonalCabinetHeader.module.scss';

const PersonalCabinetHeader = (props) => {
  return (
    <div className={styles.CabinetHeader}>
      <h1 className={styles.CabinetHeader__title}>Welcome to <span className={styles.CabinetHeader__title_highlighted}>Profiler's personal cabinet</span> — an employment program for our best students</h1>
    </div>
  );
};

export default PersonalCabinetHeader;