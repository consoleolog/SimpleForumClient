import styles from "@/styles/components/form.module.scss";

export default function Register(){

    return (
        <form className={styles.formBox} method="POST" action={"http://localhost:8080/v1/account/register"}>
            <h4>회원가입</h4>
            <input name="userId" type="text"/>
            <input name="userPw" type="password"/>
            <button type="submit">전송</button>
        </form> 
    );
}