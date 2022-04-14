import Link from "next/link";
import Styles from "./header.module.css";

export function Header(){
    return(
        <header>
            <nav className={Styles.nav}>
                <div className={Styles.brand}>[logo]</div>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/favoritos">
                            <a>Favoritos</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}