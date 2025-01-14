import React, { useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SidebarToggleButton from '../components/SidebarToggleButton';
import { findAllParent, findMenuItem } from '../helpers/menu';

const MenuItem = ({ item, className }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  
  const isActive = React.useMemo(() => (
    location.pathname === item.url || 
    item.children?.some(child => child.url === location.pathname)
  ), [item, location.pathname]);

  React.useEffect(() => {
    if (isActive && item.children) {
      setIsOpen(true);
    }
  }, [isActive, item.children]);

  const handleSubmenuToggle = React.useCallback((e) => {
    if (item.children) {
      e.preventDefault();
      setIsOpen(prev => !prev);
    }
  }, [item.children]);

  return (
    <MenuItemWrapper $isActive={isActive}>
      <MenuLink
        item={item}
        onClick={handleSubmenuToggle}
        $hasChildren={!!item.children}
        $isOpen={isOpen}
        $isActive={isActive}
      />
      {item.children && (
        <SubmenuList $isOpen={isOpen} $isActive={isActive}>
          {item.children.map((child, index) => (
            <MenuItem 
              key={child.key || index} 
              item={child} 
              className={className}
            />
          ))}
        </SubmenuList>
      )}
    </MenuItemWrapper>
  );
};

const MenuLink = ({ item, onClick, $hasChildren, $isOpen, $isActive }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isCurrentPath = location.pathname === item.url;

  const handleClick = React.useCallback((e) => {
    if ($hasChildren) {
      onClick(e);
      if (item.url) {
        e.preventDefault();
        navigate(item.url);
      }
    }
  }, [$hasChildren, item.url, onClick, navigate]);

  return (
    <StyledLink
      to={item.url}
      target={item.target}
      onClick={handleClick}
      data-menu-key={item.key}
      data-active={isCurrentPath}
      $hasChildren={$hasChildren}
      $isOpen={$isOpen}
      $isActive={$isActive}
    >
      {item.icon && (
        <IconContainer>
          {React.cloneElement(item.icon, {
            color: $isActive ? '#fff' : '#525252'
          })}
        </IconContainer>
      )}
      <span>{item.label}</span>
    </StyledLink>
  );
};

const AppMenu = ({ menuItems }) => {
  const location = useLocation();
  const menuRef = React.useRef(null);
  const isOpen = useSelector(state => state.sidebar.isOpen);
  const [activeMenuItems, setActiveMenuItems] = React.useState([]);

  const updateActiveMenu = useCallback(() => {
    const menuElement = document.getElementById('main-side-menu');
    if (!menuElement) return;

    const matchingMenuItem = Array.from(
      menuElement.getElementsByClassName('side-nav-link-ref')
    ).find(item => location.pathname === item.pathname);

    if (matchingMenuItem) {
      const menuKey = matchingMenuItem.getAttribute('data-menu-key');
      const activeItem = findMenuItem(menuItems, menuKey);
      
      if (activeItem) {
        setActiveMenuItems([
          activeItem.key,
          ...findAllParent(menuItems, activeItem)
        ]);
      }
    }
  }, [location.pathname, menuItems]);

  useEffect(() => {
    updateActiveMenu();
  }, [updateActiveMenu]);

  return (
    <SidebarContainer>
      <SidebarToggleButton />
      <Nav ref={menuRef} id="main-side-menu" $isOpen={isOpen}>
        <div>
          <Header>
            <Title>AI튜터</Title>
            <Subtitle>관리용 Admin</Subtitle>
          </Header>
          {menuItems?.map((item, idx) => (
            <MenuItem 
              key={item.key || idx} 
              item={item}
            />
          ))}
        </div>
        <Footer>
          <FooterItem>로그아웃</FooterItem>
        </Footer>
      </Nav>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  position: relative;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ $isOpen }) => ($isOpen ? '274px' : '0')};
  height: 100vh;
  background: #f5f5f5;
  transition: width 0.3s ease-in-out;
  overflow: hidden;

  > * {
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    transition: 
      opacity 0.2s ease-in-out,
      visibility 0.2s ease-in-out;
  }
`;

const Header = styled.header`
  height: 60px;
  padding: 20px 24px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.h1`
  color: #343434;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

const Subtitle = styled.span`
  color: #2e90ff;
  font-size: 16px;
  font-weight: 600;
`;

const MenuItemWrapper = styled.li`
  padding: 0;
  cursor: pointer;
  background: ${({ $isActive }) => $isActive ? '#f8f9fa' : 'transparent'};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  color: ${({ $isActive }) => ($isActive ? '#fff' : '#525252')};
  background: ${({ $isActive }) => ($isActive ? '#2e90ff' : 'transparent')};
  font-weight: 600;
  transition: all 0.3s ease;

  span {
    font-size: 16px;
  }

  ${({ $hasChildren, $isOpen }) => $hasChildren && `
    &::after {
      content: '▾';
      position: absolute;
      right: 16px;
      transform: rotate(${$isOpen ? '180deg' : '0'});
      transition: transform 0.3s ease;
    }
  `}
`;

const SubmenuList = styled.ul`
  background: #fff;
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  margin: 0;
  list-style: none;

  > li a {
    padding-left: 35px;
    color: #BABABA;
  }
  
  ${StyledLink} {
    &[data-active="true"] {
      background: #88c0ff;
      color: #fff;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Footer = styled.ul`
  padding: 20px;
  margin: 0;
  list-style: none;
`;

const FooterItem = styled.li`
  font-size: 16px;
  color: #525252;
  line-height: 1.5;
  cursor: pointer;
  
  &:first-child {
    font-weight: 600;
  }
`;

export default AppMenu;