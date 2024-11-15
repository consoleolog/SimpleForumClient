"use client";

import styles from "@/styles/pages/list.module.scss";


export default function Post(){

    const onClick = () => {
        fetch("http://localhost:8080/v1/",{
            headers: {"Content-Type": "application/json;charset=utf-8"},
            credentials: "include"
        }).then(r=>r.json())
            .then((result)=>{
                console.log(result)
            }).catch((error)=>{
            console.log(error)
        });
    }

    return (
        <div className={styles.listBox}>
            <h4 onClick={onClick}>글제목임</h4>
            <p>글내용임</p>
        </div>
    )
}