import styles from "@/styles/components/form.module.scss";
import RegisterForm from "@/components/form/RegisterForm";

export default function Register(){

    return (
        <form className={styles.formBox}>
            <h4>회원가입</h4>
            <RegisterForm/>
        </form> 
    );
}