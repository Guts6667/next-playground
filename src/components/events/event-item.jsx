import Link from "next/link";
import Button from "../ui/button";
import styles from "./event-item.module.css";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
const EventItem = (datas) => {
  const date = new Date(datas.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formatedAddress = datas.location.replace(", ", "\n");
  return (
    <li className={styles.item}>
      <img src={`/${datas.image}`} alt={datas.title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{datas.title}</h2>
          <div className={styles.date}>
            <time>{date}</time>
            <DateIcon />
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formatedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={`/events/${datas.id}`}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
