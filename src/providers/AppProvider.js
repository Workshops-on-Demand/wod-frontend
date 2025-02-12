import React, { useState, useEffect } from 'react';
import { useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

export const AppContext = React.createContext({
  data: {},
  user: {},
  setUser: () => null,
});


const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUserDetail = () => {
  };

  useEffect(() => {
    if (!user) {
      fetchUserDetail();
    }
  }, [user]);

  const data = {};

  return (
    <AppContext.Provider value={{ data, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/* eslint-disable react/prop-types */
export default ({ element }) => <AppProvider>{element}</AppProvider>;
