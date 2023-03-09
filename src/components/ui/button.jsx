import Link from "next/link"
import styles from './button.module.css'
const Button = (props) => {

    if(props.link){
        return(
            <Link href={props.link} className={styles.btn}>
                {props.children}
            </Link>
        )
    }
    return(
        <button>{props.children}</button>
    )
    
}

export default Button;