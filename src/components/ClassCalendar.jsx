import moment from "moment";
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const CalendarContainer = styled.div`
  background: #f1f8ff;
  text-align: center;
  padding: 20px 72px 23px;
  border-radius: 36px;
  /* overflow: hidden; */

  h3 {
    padding-bottom: 16px;
  }
  .react-calendar {
    border: none;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    border-radius: 36px;
    padding: 30px;
  }
  .react-calendar__tile {
    position: relative;
    height: 50px;
    text-align: center;
  }
`;

const LessonTile = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);

  font-size: 12px;
  color: white;
  border-radius: 50px;
  padding: 2px 0;
  border: 1px dashed #fe575c;

  width: 30px;
  height: 30px;

  ${({ lessonCount }) => {}}
`;

const ClassCalendar = () => {
  const lessonData = {
    "2024-12-02": 0,
    "2024-12-03": 0,
    "2024-12-04": 1,
    "2024-12-05": 2,
    "2024-12-07": 3,
    "2024-12-08": 4,
    "2024-12-12": 1,
    "2024-12-13": 2,
    "2024-12-14": 3,
    "2024-12-15": 4,
  };

  const tileContent = ({ date }) => {
    const formattedDate = date.toISOString().split("T")[0];
    const lessons = lessonData[formattedDate];

    if (lessons !== undefined && lessons > 0) {
      return <LessonTile lessonCount={lessons}></LessonTile>;
    }
    return null;
  };

  return (
    <>
      <CalendarContainer>
        <div>
          <Calendar
            tileContent={tileContent}
            locale="ko-KR"
            calendarType="gregory"
            view="month"
            minDetail="month"
            maxDetail="month"
            showNavigation={true}
            formatShortWeekday={(locale, date) => {
              const weekdays = [
                "Sun.",
                "Mon.",
                "Tue.",
                "Wed.",
                "Thur.",
                "Fri.",
                "Sat.",
              ];
              return weekdays[date.getDay()];
            }}
            formatDay={(locale, date) => moment(date).format("DD")}
          />
        </div>
      </CalendarContainer>
    </>
  );
};

export default ClassCalendar;
