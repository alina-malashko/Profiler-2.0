import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MyCV.module.scss';

const MyCV = (props) => {
  return (
    <div className={styles.page}>
      <h2 className={styles.page__title}>My CV</h2>
        <NavLink to='/cv' className={styles.page__container}>
            <div className={styles.page__link}>
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 14 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M13 8H8V13C8 13.2652 7.89464 13.5196 7.70711 13.7071C7.51957 13.8946 7.26522 14 7 14C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13V8H1C0.734784 8 0.48043 7.89464 0.292893 7.70711C0.105357 7.51957 0 7.26522 0 7C0 6.73478 0.105357 6.48043 0.292893 6.29289C0.48043 6.10536 0.734784 6 1 6H6V1C6 0.734784 6.10536 0.480429 6.29289 0.292893C6.48043 0.105357 6.73478 0 7 0C7.26522 0 7.51957 0.105357 7.70711 0.292893C7.89464 0.480429 8 0.734784 8 1V6H13C13.2652 6 13.5196 6.10536 13.7071 6.29289C13.8946 6.48043 14 6.73478 14 7C14 7.26522 13.8946 7.51957 13.7071 7.70711C13.5196 7.89464 13.2652 8 13 8Z'
                    fill='#407BFF'
                  />
                </svg>
            </div>
          <p className={styles.page__container__content}>Click and start creating your CV</p>
        </NavLink>
      <div className={styles.page__label}>
        <div className={styles.page__label__icon}>
          <svg
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7 7.7C7.19833 7.7 7.3647 7.6328 7.4991 7.4984C7.63303 7.36447 7.7 7.19833 7.7 7V4.1825C7.7 3.98417 7.63303 3.82083 7.4991 3.6925C7.3647 3.56417 7.19833 3.5 7 3.5C6.80167 3.5 6.63553 3.56697 6.5016 3.7009C6.3672 3.8353 6.3 4.00167 6.3 4.2V7.0175C6.3 7.21583 6.3672 7.37917 6.5016 7.5075C6.63553 7.63583 6.80167 7.7 7 7.7ZM7 10.5C7.19833 10.5 7.3647 10.4328 7.4991 10.2984C7.63303 10.1645 7.7 9.99833 7.7 9.8C7.7 9.60167 7.63303 9.4353 7.4991 9.3009C7.3647 9.16697 7.19833 9.1 7 9.1C6.80167 9.1 6.63553 9.16697 6.5016 9.3009C6.3672 9.4353 6.3 9.60167 6.3 9.8C6.3 9.99833 6.3672 10.1645 6.5016 10.2984C6.63553 10.4328 6.80167 10.5 7 10.5ZM7 14C6.03167 14 5.12167 13.8161 4.27 13.4484C3.41833 13.0811 2.6775 12.5825 2.0475 11.9525C1.4175 11.3225 0.918867 10.5817 0.5516 9.73C0.183867 8.87833 0 7.96833 0 7C0 6.03167 0.183867 5.12167 0.5516 4.27C0.918867 3.41833 1.4175 2.6775 2.0475 2.0475C2.6775 1.4175 3.41833 0.918633 4.27 0.5509C5.12167 0.183633 6.03167 0 7 0C7.96833 0 8.87833 0.183633 9.73 0.5509C10.5817 0.918633 11.3225 1.4175 11.9525 2.0475C12.5825 2.6775 13.0811 3.41833 13.4484 4.27C13.8161 5.12167 14 6.03167 14 7C14 7.96833 13.8161 8.87833 13.4484 9.73C13.0811 10.5817 12.5825 11.3225 11.9525 11.9525C11.3225 12.5825 10.5817 13.0811 9.73 13.4484C8.87833 13.8161 7.96833 14 7 14ZM7 12.6C8.55167 12.6 9.87303 12.0547 10.9641 10.9641C12.0547 9.87303 12.6 8.55167 12.6 7C12.6 5.44833 12.0547 4.12697 10.9641 3.0359C9.87303 1.9453 8.55167 1.4 7 1.4C5.44833 1.4 4.1272 1.9453 3.0366 3.0359C1.94553 4.12697 1.4 5.44833 1.4 7C1.4 8.55167 1.94553 9.87303 3.0366 10.9641C4.1272 12.0547 5.44833 12.6 7 12.6Z'
              fill='#407BFF'
            />
          </svg>
        </div>
        <p className={styles.page__label__text}>
          It is possible to create up to 5 resumes in different specialities
        </p>
      </div>
    </div>
  );
};

export default MyCV;
