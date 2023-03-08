import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
/** We use Link from next the same we use <a/>
 * Link has a special attribute: when the user is hovering a link, all the content of a page is preloaded
 * Link also has a few specif attributes such as: "replace" which allows to replace the current page
 * by the targeted one so it becomes impossible to come back to the previous one.
 */

  return (
    <div className={styles.description}>
      <h1>NEXT PLAYGROUND</h1>
      <ul>
        <li>
          <Link replace href={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  );
}
