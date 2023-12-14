"use client";

import styles from '@/app/(beforeLogin)/_components/login.module.css';
import {useRouter} from "next/navigation";
import { useState } from "react";

export default function LoginModal() {
    const[id, setId] = useState();
    const[password, setPassword] = useState();
    const[message, setMessage] = useState();

    const router = useRouter();
    
    const onSubmit = () => {};
    const onClickClose = () => {
        router.back();
        // TODO: 뒤로가기가 /home이 아니면 /home으로 보내기
      }
    const onChangeId = () => {};
    const onChangePassword = () => {};

    return (
        <div className={styles.modalBackground}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <button className={styles.closeButton} onClick={onClickClose}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <g>
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                        </g>
                    </svg>
                    </button>
                    <div>Please Login</div>
                </div>
                <form onSubmit={onSubmit}>
                    <div className={styles.modalBody}>
                        <div className={styles.inputDiv}>
                            <label className={styles.inputLabel} htmlFor="id">Id</label>
                            <input id="id" className={styles.input} value={id} onChange={onChangeId} type="text" placeholder=""/>
                        </div>
                        <div className={styles.inputDiv}>
                        <label className={styles.inputLabel} htmlFor="password">Password</label>
                            <input id="password" className={styles.input} value={password} onChange={onChangePassword} type="password" placeholder=""/>
                        </div>
                    </div>
                    <div className={styles.message}>{message}</div>
                    <div className={styles.modalFooter}>
                        <button className={styles.actionButton} disabled={!id && !password}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}