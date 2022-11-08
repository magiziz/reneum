import styled from "styled-components";

export const ListCollapse = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 700;
`;

export const ListFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 12px;
  border-radius: 8px;
  color: #10307d;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;
