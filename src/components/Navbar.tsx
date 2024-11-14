import styles from "@/styles/components/nav.module.scss"


export default function Navbar(){


    return (
        <nav className={styles.nav}>
            <a className={styles.logo}>AppleForum</a>
            <a>Page1</a>
            <a>Page2</a>
        </nav> 
    );
}