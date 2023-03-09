import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/event-search";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { getAllEvents } from "../../../dummy-data";

const EventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();
  const findEvents = (year, month) => {
  router.push(`/events/${year}/${month}/`);
  };
  return (
    <Fragment>
      <EventsSearch onSearch={findEvents} />
      <EventList datas={events} />
    </Fragment>
  );
};
export default EventsPage;
