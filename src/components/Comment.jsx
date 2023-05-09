import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content, ondeleteComment}) {
   
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        ondeleteComment(content)
   }
   
   function handleLikeComment() {
    setLikeCount((state) => {
        return state + 1
    });
   }
   
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Carlos.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Carlos</strong>
                            <time title="2 de maio às 11:10h" dateTime="2023-05-02 11:10:30">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment} >
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}