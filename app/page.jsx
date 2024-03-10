import Link from 'next/link';
import styles from "../styles/landing.module.css"
// componente principal o landing etc
export default function HomePage() {
    return (
        <div className={styles.container}>
            <h1>LANDING</h1>
            {/* links en nextsjs */}
            <Link href="/about"><button>hola</button></Link>  
        </div>
    )
}