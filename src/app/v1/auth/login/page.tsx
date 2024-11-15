import styles from "@/styles/components/form.module.scss";
import LoginForm from "@/components/form/LoginForm";

export default function Login(){

    return (
        <form className={styles.formBox}>
            <h4>로그인</h4>
            <LoginForm/>
        </form> 
    );
}