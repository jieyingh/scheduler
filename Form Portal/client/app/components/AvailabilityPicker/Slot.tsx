import { useState } from "react";
import { DateTime, Duration, Interval } from "luxon";

export default function Slot({interval, isEnabled}: {interval: Interval, isEnabled: boolean}) {
  // Full availabilities are for when people are available and fully willing to work.
  // Partial availabilities are for when people are available but would rather not work at that time.
  const [selectedAvailability, setSelectedAvailability] = useState("unavail");

  const handleMouseEvent = () => {
    setSelectedAvailability(toggleAvailability(selectedAvailability))
  }

  return (<>
    { isEnabled ? (
        <div className="w-32 h-3 border-b border-r border-black" onClick={handleMouseEvent}>
          {
            selectedAvailability == "unavail" ? <div className="w-full h-full bg-white" /> : <></>
          }
          {
            selectedAvailability == "avail" ? <div className="w-full h-full bg-emerald-500" /> : <></>
          }
          {
            selectedAvailability == "partial" ? <div className="w-full h-full bg-yellow-500" /> : <></>
          }
        </div>
      ) : (
        <div className="w-32 h-3 bg-slate-300 border-b border-r border-black">

        </div>
      )
    }
  </>)
}

function toggleAvailability(availability: string) {
  if (availability == "unavail") {
    return "avail";
  } else if (availability == "avail") {
    return "partial";
  } else if (availability == "partial") {
    return "unavail";
  }
  throw Error;
}

export function CreateOneSlotFromInterval(interval: Interval, workIntervals: Interval[]): JSX.Element {
  let isEnabled = false;
  for (let workInterval of workIntervals) {
    if (interval.overlaps(workInterval)) {
      isEnabled = true;
    }
  }
  return (<Slot interval={interval} isEnabled={isEnabled} />)
}

export function CreateSlotsFromIntervals(intervals: Interval[], workIntervals: Interval[]): JSX.Element[] {
  let slots: JSX.Element[] = []
  for (let i of intervals) {
    slots.push(CreateOneSlotFromInterval(i, workIntervals));
  }

  return slots;
}