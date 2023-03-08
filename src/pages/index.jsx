import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import Link from "next/link";
import { getFeaturedEvents } from "../../dummy-data";
import EventList from "@/components/events/event-list";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  /** We use Link from next the same we use <a/>
   * Link has a special attribute: when the user is hovering a link, all the content of a page is preloaded
   * Link also has a few specif attributes such as: "replace" which allows to replace the current page
   * by the targeted one so it becomes impossible to come back to the previous one.
   */

  const featuredEvents = getFeaturedEvents();
  return (
    <div className={styles.main}>
      <h1>HOME PAGE: NEXT PLAYGROUND</h1>
      <EventList datas={featuredEvents} />
    </div>
  );
}
