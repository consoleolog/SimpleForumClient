import styles from "@/styles/components/form.module.scss";

export default function Login(){

    return (
        <form className={styles.formBox} method="POST" action={"http://localhost:8080/v1/auth/login"}>
            <h4>로그인</h4>
            <input name="username" type="text"/>
            <input name="password" type="password"/>
            <button type="submit">전송</button>
        </form> 
    );
}