// Layout.tsx
import React, { ReactNode } from 'react';
import { AppBar, Toolbar, Container, Box } from '@mui/material';
import HomeSlider from '../Home/HomeSlider/HomeSlider';
import EventCategories from '../Event/EventCategories';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import EventLogo from '../../assets/images/eventoria-logo.png';
import FilterBar from '../Navbar/FilterBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      <Navbar />

      <AppBar position="sticky" sx={{ paddingTop: '15px', paddingBottom: '15px', backgroundColor: '#2ED87B' }}>
        <Container>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={EventLogo} alt="My Application Logo" className="navbar-logo" />
            </Link>

            <FilterBar />
          </Toolbar>
        </Container>
      </AppBar>
      {isHomePage && <HomeSlider />}
      <EventCategories />
      <Container>
        <Box marginTop={2}>{children}</Box>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
