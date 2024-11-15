import styles from "@/styles/pages/list.module.scss";
import Post from "@/components/Post";



export default function List(){

    return (
        <div className={styles.whiteBg}>
            <div className={styles.listBox}>
                <h4>글제목임</h4>
                <p>글내용임</p>
            </div>
            <div className={styles.listBox}>
                <h4>글제목임</h4>
                <p>글내용임</p>
            </div>
            <Post/>
        </div>
    );
}