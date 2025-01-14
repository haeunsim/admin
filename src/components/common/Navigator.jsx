import React from "react";
import styled from "styled-components";

const Navigator = ({ currentPage, setCurrentPage, totalItems, itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <Nav>
      <NavButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </NavButton>

      {[...Array(totalPages)].map((_, index) => (
        <PageNumber
          key={index + 1}
          active={currentPage === index + 1}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </PageNumber>
      ))}
      <NavButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </NavButton>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const NavButton = styled.button`
  border: none;
  background: none;
  color: ${(props) => (props.disabled ? "#ccc" : "#333")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  font-size: 18px;
  padding: 5px;

  &:hover:not(:disabled) {
    color: #007bff;
  }
`;
const PageNumber = styled.button`
  border: none;
  background: none;
  color: ${(props) => (props.active ? "#343434" : "#bababa")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  cursor: pointer;
  font-size: 18px;
  padding: 5px;

  &:hover {
    color: #007bff;
  }
`;

export default Navigator;
