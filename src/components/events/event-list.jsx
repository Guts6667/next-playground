import styles from "./event-list.module.css";
import EventItem from "./event-item";

const EventList = ({ datas }) => {
  return (
    <ul className={styles.list}>
      {datas &&
        datas.map((item) => {
          return (
            <EventItem
              key={item.id}
              id={item.id}
              title={item.title}
              location={item.location}
              date={item.date}
              image={item.image}
            />
          );
        })}
    </ul>
  );
};

export default EventList;
