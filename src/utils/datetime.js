import { format } from "date-fns";

export const formatUnixTime = (time, formatString = "dd-MMM-yyyy") => {
  return format(new Date(time * 1000), formatString);
};

export const getTimeDifference = (start, end) => {
  const difference =
    (new Date(end).getTime() - new Date(start).getTime()) / 3600;
  return difference;
};

export const calcTimetableCellValues = (start, end) => {
  const startHour = parseInt(start.slice(0, 2));
  const startMinute = parseInt(start.slice(2));
  const endHour = parseInt(end.slice(0, 2));
  const endMinute = parseInt(end.slice(2));
  const durationInHours = endHour - startHour + (endMinute - startMinute) / 60;
  const cellWidth = Math.round(durationInHours * 1e2) / 1e2;

  const startTime = startHour + startMinute / 60 - 8;
  const cellMarginLeft = Math.round(startTime * 1e2) / 1e2;

  return { cellWidth, cellMarginLeft };
};
