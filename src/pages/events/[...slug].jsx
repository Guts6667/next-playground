import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { getFilteredEvents } from "../../../dummy-data";

const FilteredEvents = () => {
  const router = useRouter();

  const filterData = router.query.slug;
  console.log(filterData);
  if (!filterData) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">Loading...</p>
        </ErrorAlert>
      </Fragment>
    );
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values</p>
          <div className="center">
            <Button link="/events">Show All Events</Button>
          </div>
        </ErrorAlert>
      </Fragment>
    );
  }
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter.</p>
        </ErrorAlert>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList datas={filteredEvents} />
    </Fragment>
  );
};

export default FilteredEvents;
