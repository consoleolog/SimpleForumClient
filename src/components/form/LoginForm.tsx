"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";


export default function LoginForm(){

    const router = useRouter();

    const [loginData, setLoginData] = useState({
        accountId: "",
        accountPw: "",
    })

    const onChange = (e: any) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    }

    const onClick = function (){
        fetch("http://localhost:8080/v1/auth/login", {
            method: "POST",
            headers: {"Content-Type": "application/json;charset=utf-8"},
            mode: "cors",
            credentials: "include",
            body: JSON.stringify({
                accountId: loginData.accountId,
                accountPw: loginData.accountPw,
            })
        }).then((r)=>{
            if (!r.ok) throw new Error();
            return r.json();
        }).then((result)=>{
            if (result === "success") router.replace("/v1/posts/list");
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

