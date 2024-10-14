import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/arthur-david.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header></header>
                    
                    <p></p>
                </div>

                <footer>
                    Aplaudir
                </footer>
            </div>
        </div>
    )
}