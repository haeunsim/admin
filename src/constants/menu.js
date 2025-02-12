import React from "react";
import Icon from "../components/Icon/Icon";

const MENU_ITEMS = [
  // {
  //   key: "home",
  //   label: "Home",
  //   url: "/home",
  //   icon: <Icon name="home" />,
  // },
  {
    key: "account",
    label: "계정 관리",
    url: "/account/school-registration",
    icon: <Icon name="account" />,
    children: [
      {
        key: "school-registration",
        label: "학교 등록/수정",
        url: "/account/school-registration",
        icon: <Icon name="school" />,
      },
      {
        key: "issuance",
        label: "계정 발급",
        url: "/account/issuance",
        icon: <Icon name="user-id" />,
      },
      {
        key: "settings",
        label: "계정 세팅/전달",
        url: "/account/settings",
        icon: <Icon name="set" />,
      }, 
      {
        key: "addition",
        label: "전학생 추가발급",
        url: "/account/addition",
        icon: <Icon name="extra" />,
      },
    ],
  },

  {
    key: "content",
    label: "콘텐츠 관리",
    url: "/content/database",
    icon: <Icon name="contents" />,
    children: [
      {
        key: "database",
        label: "콘텐츠 통합 DB",
        url: "/content/database",
        icon: <Icon name="d-ball" />,
      },
      {
        key: "creation",
        label: "[D] 생성/업로드",
        url: "/content/creation",
        icon: <Icon name="default-list" />,
      },
      {
        key: "viewing",
        label: "[C] 열람/복제",
        url: "/content/viewing",
        icon: <Icon name="custom-list" />,
      },
    ],
  },
  // {
  //   key: "class",
  //   label: "학급 변동 관리",
  //   url: "/class",
  //   icon: <Icon name="change" />,
  // },
  // {
  //   key: "comingsoon",
  //   label: "준비중 페이지",
  //   url: "/comingsoon",
  // },
  // {
  //   key: "login",
  //   label: "로그인 페이지",
  //   url: "/login",
  // },
];

export default MENU_ITEMS;
