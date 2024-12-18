import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  modal: ReactNode;
};
function Layout({ children, modal }: Props) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}

export default Layout;
