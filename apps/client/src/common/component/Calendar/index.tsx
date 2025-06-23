"use client";

import { IcnBtnArrowLeft, IcnCalenderCard } from "@/asset/svg";
import clsx from "clsx";
import { ko } from "date-fns/locale";
import { forwardRef, useState } from "react";
import DatePicker, {
  type DatePickerProps,
  registerLocale,
} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  arrowWrapperStyle,
  calendarIcnStyle,
  customHeaderWrapperStyle,
  dateDetailStyle,
  dateStyle,
  leftArrowStyle,
  wrapperStyle,
} from "./index.css";
registerLocale("ko", ko);

interface CalendarProps
  extends Omit<
    DatePickerProps,
    "onChange" | "selectsRange" | "selectsMultiple"
  > {
  onChange?: (date: Date) => void;
}

const Calendar = forwardRef<DatePicker, CalendarProps>(
  ({ onChange, className, ...props }, ref) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(
      props.startDate ?? null,
    );
    const [selected, setSelected] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleDateChange = (date: Date | null) => {
      setSelectedDate(date);
      setSelected(true);
      if (onChange && date) {
        // YYYY-MM-DD 형식으로 변환
        const utc9Date = new Date(date.toLocaleDateString("sv"));
        onChange(utc9Date);
      }
    };

    // 820px 이상일 때 아래에 표시
    const popperPlacement =
      document?.documentElement?.clientHeight > 820
        ? "bottom-start"
        : "top-start";

    return (
      <div className={wrapperStyle({ isOpen })}>
        <DatePicker
          ref={ref}
          dateFormat="yyyy.MM.dd"
          selected={selectedDate}
          className={clsx(dateStyle({ selected }), className)}
          renderCustomHeader={renderCustomHeader}
          onChange={handleDateChange}
          locale="ko"
          value={
            selectedDate === null
              ? "YYYY.MM.DD"
              : selectedDate.toLocaleDateString("sv")
          }
          onCalendarOpen={() => setIsOpen(true)}
          onCalendarClose={() => setIsOpen(false)}
          calendarStartDay={1}
          popperPlacement={popperPlacement}
          shouldCloseOnSelect
          popperProps={{ strategy: "fixed" }}
          popperModifiers={[
            {
              name: "placement",
              fn: (state) => {
                const { x, y } = state;
                return {
                  ...state,
                  x: x - 8,
                  y: y + 2,
                };
              },
            },
          ]}
          {...props}
        />

        <IcnCalenderCard className={calendarIcnStyle({ selected })} />
      </div>
    );
  },
);

interface CustomHeaderProps {
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
}

const renderCustomHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
}: CustomHeaderProps) => {
  return (
    <div className={customHeaderWrapperStyle}>
      <button
        type="button"
        className={arrowWrapperStyle}
        onClick={decreaseMonth}
      >
        <IcnBtnArrowLeft className={leftArrowStyle({ rotate: false })} />
      </button>
      <div className={dateDetailStyle}>{`${date.getFullYear()}년 ${
        date.getMonth() + 1
      }월`}</div>
      <button
        type="button"
        className={arrowWrapperStyle}
        onClick={increaseMonth}
      >
        <IcnBtnArrowLeft className={leftArrowStyle({ rotate: true })} />
      </button>
    </div>
  );
};

export default Calendar;
