import { format } from "date-fns";

export const formatUnixTime = (time, formatString = "dd-MMM-yyyy") => {
  return format(new Date(time * 1000), formatString);
};

export const getTimeDifference = (start, end) => {
  const difference =
    (new Date(end).getTime() - new Date(start).getTime()) / 3600;
  return difference;
};
