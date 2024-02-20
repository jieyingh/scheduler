import { useState } from "react";
import { DateTime, Duration, Interval } from "luxon";
import { CreateSlotsFromIntervals } from "@/app/components/AvailabilityPicker/Slot";

export default function AvailabilityPicker({intervals, startDate, endDate, slotDuration}: {
  intervals: Interval[],
  startDate: DateTime,
  endDate: DateTime,
  slotDuration: Duration
}) {
  // Full availabilities are for when people are available and fully willing to work.
  // Partial availabilities are for when people are available but would rather not work at that time.

  // Merge all working periods. this joins adjacent intervals and fixes any overlaps
  const workIntervals: Interval[] = Interval.merge(intervals);

  // Create the workdays by taking the start and end dates and splitting them into 24hr intervals
  // TODO: Validate that endDate - startDate is divisible by 24 hours.
  const possibleDays: Interval[] = Interval
    .fromDateTimes(startDate, endDate)
    .splitBy(Duration.fromMillis(86400000)); // 86400000ms === 24 hours

  // Each "day" is a 24-hour period of consecutive slots of slotDuration minutes
  const days: JSX.Element[] = [];

  // Generate the "days" by splitting the workdays into intervals of slotDuration length
  // then creating slots from them, that are enabled if they overlap with any interval in workIntervals
  // TODO: Validate that a day is divisible by props.slotDuration
  for (let interval of possibleDays) {
    const daySlotIntervals = interval.splitBy(slotDuration);
    const daySlots = CreateSlotsFromIntervals(daySlotIntervals, workIntervals);
    days.push(<div>{daySlots}</div>);
  }

  return (
    <div className="flex">
      {days}
    </div>
  )
}