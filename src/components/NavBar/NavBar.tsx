import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { styled } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

export const StyledNavLink = styled("a")(() => ({
  textDecoration: "none",
  color: "inherit"
}));

export const StyledMobileToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: { display: "flex", justifyContent: "start" },
  [theme.breakpoints.up('md')]: { display: "none" },
  
}));

export const StyledDesktopToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: { display: "none" },
  [theme.breakpoints.up('md')]: { display: "flex", justifyContent: "space-evenly" },
}));

type NavbarProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      handleClose();
    }
  };

  const toggleLanguage = () => {
    
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" >
        
        <StyledMobileToolbar>
          <IconButton size="large" onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
          <IconButton size="large" onClick={handleMenu} color="inherit">
            <MenuIcon />
          </IconButton>
          
          <IconButton size="large" onClick={toggleLanguage} color="inherit">
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
          >
            <MenuItem onClick={() => handleSmoothScroll("about")}>
              <StyledNavLink>About</StyledNavLink>
            </MenuItem>
            <MenuItem onClick={() => handleSmoothScroll("skills")}>
              <StyledNavLink>Skills</StyledNavLink>
            </MenuItem>
            <MenuItem onClick={() => handleSmoothScroll("projects")}>
              <StyledNavLink>Projects</StyledNavLink>
            </MenuItem>
          </Menu>
        </StyledMobileToolbar>

        
        <StyledDesktopToolbar>
            <IconButton size="large" onClick={toggleLanguage} color="inherit">
                <LanguageIcon/>
          </IconButton>
          <MenuItem onClick={() => handleSmoothScroll("about")}>
            <StyledNavLink>About</StyledNavLink>
          </MenuItem>
          <MenuItem onClick={() => handleSmoothScroll("skills")}>
            <StyledNavLink>Skills</StyledNavLink>
          </MenuItem>
          <MenuItem onClick={() => handleSmoothScroll("projects")}>
            <StyledNavLink>Projects</StyledNavLink>
          </MenuItem>
          <IconButton size="large" onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
          
        </StyledDesktopToolbar>
      </AppBar>
    </Box>
  );
}
