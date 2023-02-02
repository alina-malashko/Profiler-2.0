import React from 'react';
import classnames from 'classnames/bind';
import stylesLoader from '../Loader.module.scss';
import styles from './Button.module.scss';

const cx = classnames.bind(styles);

export const Button = ({ children, adaptive = true, isLoading = false, ...props }) => {
  return (
    <button {...props} className={cx(styles.button, { button_adaptive: adaptive })}>
      {!isLoading && children}
      {isLoading && <span className={stylesLoader.loader}></span>}
    </button>
  );
};
