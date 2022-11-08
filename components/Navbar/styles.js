import styled from "styled-components";

export const Navbar = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ReneumLogo = styled.img`
  max-width: 200px;
`;

export const NavbarOptions = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 30px;
    cursor: pointer;
  }
`;

export const Notifications = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  svg {
    margin-left: 0;
  }
`;

export const NotificationBox = styled.div`
  position: absolute;
  width: 300px;
  top: 35px;
  right: 0;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  pointer-events: ${({ isActive }) => (isActive ? "all" : "none")};
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  transition: 350ms ease;
`;
