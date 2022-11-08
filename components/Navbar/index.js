import React, { useState } from "react";
import * as S from "./styles";
import { Bell, CreditCard, User } from "react-feather";
import { NotificationBox, Notifications } from "./styles";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <S.Navbar>
      <S.ReneumLogo
        src={
          "https://reneum.s3.ap-south-1.amazonaws.com/assets/img/logos/Reneum_Logotype_Positive_tdn6g9.svg"
        }
        alt={"reneum_logo"}
      />

      <S.NavbarOptions>
        <S.Notifications onClick={() => setIsActive(!isActive)}>
          <Bell />
          <S.NotificationBox isActive={isActive}>
            This is a notification box. You can use components here...
          </S.NotificationBox>
        </S.Notifications>

        <CreditCard />
        <User />
      </S.NavbarOptions>
    </S.Navbar>
  );
};

export default Navbar;
