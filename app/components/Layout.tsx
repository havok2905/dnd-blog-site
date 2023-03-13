import {ReactNode} from 'react';

import {Navbar} from '~/design-system/components/Navbar';
import {Page} from '~/design-system/components/Page';

import logo from '~/images/logo.png';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({
  children
}: LayoutProps) => {
  return (
    <>
      <Navbar
        homeLink={{
          href: '/',
          text: 'Havok\'s Corner'
        }}
        links={[
          {
            href: '/',
            text: 'Home'
          },
          {
            href: '/adventures',
            text: 'Adventures'
          },
          {
            href: '/characters',
            text: 'Characters'
          },
          {
            href: '/homebrew',
            text: 'Homebrew'
          }
        ]}
        logoAlt="logo"
        logoSrc={logo}
      />
      <Page>
        {children}
      </Page>
    </>
  )
};
