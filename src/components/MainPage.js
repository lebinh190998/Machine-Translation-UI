import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const MainPage = forwardRef(({
  children,
  title = '',
  ...rest
}, ref) => {
  return (
    <div
      ref={ref}
      {...rest}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
});

MainPage.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default MainPage;
