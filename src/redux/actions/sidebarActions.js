export const toggleSidebar = () => ({
    type: 'TOGGLE_SIDEBAR'
  });
  
  export const setSidebar = (isOpen) => ({
    type: 'SET_SIDEBAR',
    payload: isOpen
  });