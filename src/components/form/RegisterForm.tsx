"use client";
import {useState} from "react";


export default function RegisterForm(){

    const [registerData, setRegisterData] = useState({
        accountId: "",
        accountPw: "",
    })

    const onChange = (e: any) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value,
        });
    }
    console.log(registerData)
    const onClick = function (){
        fetch("http://localhost:8080/v1/accounts/register", {
            method: "POST",
            headers: {"Content-Type": "application/json;charset=utf-8"},
            mode: "cors",
            credentials: "include",
            body: JSON.stringify({
                accountId: registerData.accountId,
                accountPw: registerData.accountPw,
            })
        }).then((r)=>{
            if (!r.ok) throw new Error();
            return r.json();
        }).then((result)=>{
            console.log(result)
        }).catch((error)=> new Error(error));
    }

    return (
        <div onChange={onChange}>
            <input id={"accountId"} name="accountId" type="text"/>
            <input id={"accountPw"} name="accountPw" type="password"/>
            <button type="button" onClick={onClick}>전송</button>
        </div>
    )
}

