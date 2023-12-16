"use client"

import style from "@/app/(afterLogin)/_components/logoutButton.module.css";

export default function LogoutButton() {
  const me = {
    id: '2everlove',
    nickname: 'mika',
    image: '/Ace.png',
  }

  const onLogout = () => {};

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me.image} alt={me.id}/>
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  )
}