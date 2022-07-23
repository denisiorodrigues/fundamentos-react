import styles from './Sidebar.module.css';
import { PencilSimpleLine } from 'phosphor-react';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src='https://images.unsplash.com/photo-1542995470-870e12e7e14f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/6850193?v=4" />

                <strong>Denisio Rodrigues</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilSimpleLine size="20"/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}