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
      props.startDate ?? new Date(),
    );
    const [selected, setSelected] = useState<boolean>(false);

    const handleDateChange = (date: Date | null) => {
      setSelectedDate(date);
      setSelected(true);
      if (onChange && date) {
        onChange(date);
      }
    };

    return (
      <div className={wrapperStyle}>
        <div>
          <DatePicker
            ref={ref}
            dateFormat="yyyy.MM.dd"
            selected={selectedDate}
            className={clsx(dateStyle({ selected }), className)}
            renderCustomHeader={renderCustomHeader}
            onChange={handleDateChange}
            locale="ko"
            calendarStartDay={1}
            popperPlacement="bottom-start"
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
        </div>

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
      <button className={arrowWrapperStyle} onClick={decreaseMonth}>
        <IcnBtnArrowLeft className={leftArrowStyle({ rotate: false })} />
      </button>
      <div className={dateDetailStyle}>{`${date.getFullYear()}년 ${
        date.getMonth() + 1
      }월`}</div>
      <button className={arrowWrapperStyle} onClick={increaseMonth}>
        <IcnBtnArrowLeft className={leftArrowStyle({ rotate: true })} />
      </button>
    </div>
  );
};

export default Calendar;
