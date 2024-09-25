'use client';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

dayjs.extend(relativeTime);

export const formatRelativeDate = (date: Date | string, thresholdDays = 7, format = 'YYYY.MM.DD') => {
  const inputDate = dayjs(date);
  const currentDate = dayjs();

  const diffMinutes = currentDate.diff(inputDate, 'minute');
  const diffHours = currentDate.diff(inputDate, 'hour');
  const diffDays = currentDate.diff(inputDate, 'day');

  if (diffDays > thresholdDays) {
    return inputDate.format(format);
  }
  if (diffHours >= 24) {
    return `${diffDays}일 전`;
  }
  if (diffMinutes >= 60) {
    return `${diffHours}시간 전`;
  }
  if (diffMinutes >= 1) {
    return `${diffMinutes}분 전`;
  }
  return '방금 전';
};
