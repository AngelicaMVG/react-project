import React from 'react';
import glamorous from 'glamorous';
import { colors } from '../colors';
import Logo from '../../../logo.png';

const Nav = glamorous.nav({
  backgroundColor: colors.primary,
  height: 50,
  padding: '5px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: colors.white
});

export default () => {
  return (
    <Nav>
      <img src={Logo} alt="#" width={30} />
      {localStorage.getItem('user')}
    </Nav>
  );
};
