import { Timestamp } from 'firebase/firestore';

const formatStringToTimestamp = (value: string) => {
  const date = new Date(value);
  return Timestamp.fromDate(date);
};

export { formatStringToTimestamp };
