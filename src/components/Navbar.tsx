import styles from "@/styles/components/nav.module.scss"
import Link from "next/link";


export default function Navbar(){


    return (
        <nav className={styles.nav}>
            <a className={styles.logo}>AppleForum</a>
            <Link href={"/v1/auth/login"}>Login</Link>
            <a>Page2</a>
        </nav> 
    );
}