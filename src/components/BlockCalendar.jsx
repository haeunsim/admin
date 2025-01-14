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
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  
  h5 {
    font-weight: 400;
    padding-bottom: 16px;
    color: #525252;
    font-size: 18px;

    span {
      font-weight: 600;
      color: #292929;
      font-size: 18px;
    }
  }
  .react-calendar {
    border: none;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    border-radius: 36px;
  }

  .react-calendar__tile {
    position: relative;
    width: 90px;
    height: 44px;
    text-align: center;
  }

  /* 토요일, 일요일, 이전달, 다음달 일자 숨기기 */
  .react-calendar__tile.hidden {
    visibility: hidden;
  }
  .react-calendar__month-view__weekdays {
    display: none;
  }

  .react-calendar__month-view__weekdays {
    display: grid !important;
    grid-template-columns: repeat(5, 1fr) !important;
  }

  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: repeat(5, 1fr) !important;
  }

  .react-calendar__month-view__days__day--weekend {
    display: none !important;
  }
`;

const Flex = styled.div`
  display: flex;
  background: #fff;
  padding: 32px;
  border-radius: 40px;
  gap: 15px;
`;

const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80px;
  gap: 8px;
  margin-top: 20px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  .legend-block {
    width: 16px;
    height: 16px;
    border-radius: 2px;
    background-color: ${({ color }) => color};
  }

  span {
    font-size: 12px;
    color: #343434;
  }
`;

const LessonTile = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 80%;
  border-radius: 8px;
  /* font-size: 0; */

  ${({ lessonCount }) => {
    switch (lessonCount) {
      case 0:
        return `background-color: #EBEDF0;`; // 데이터 없음
      case 1:
        return `background-color: #9BE9A8;`; // 1회: 연한 초록
      case 2:
        return `background-color: #40C463;`; // 2회: 중간 초록
      case 3:
        return `background-color: #30A14E;`; // 3회: 진한 초록
      case 4:
      default:
        return `background-color: #216E39;`; // 4회 이상: 매우 진한 초록
    }
  }}
`;

const BlockCalendar = () => {
  const legendItems = [
    { color: "#EBEDF0", label: "없음" },
    { color: "#9BE9A8", label: "1회" },
    { color: "#40C463", label: "2회" },
    { color: "#30A14E", label: "3회" },
    { color: "#216E39", label: "4회 이상" },
  ];

  const lessonData = {
    "2024-12-01": 1,
    "2024-12-02": 4,
    "2024-12-03": 0,
    "2024-12-04": 1,
    "2024-12-05": 2,
    "2024-12-06": 0,
    "2024-12-07": 3,
    "2024-12-08": 4,
    "2024-12-09": 0,
    "2024-12-10": 4,
    "2024-12-11": 0,
    "2024-12-12": 1,
    "2024-12-13": 2,
    "2024-12-14": 3,
    "2024-12-15": 4,
    "2024-12-16": 1,
    "2024-12-17": 1,
    "2024-12-18": 2,
    "2024-12-19": 0,
    "2024-12-20": 4,
    "2024-12-21": 1,
    "2024-12-22": 0,
    "2024-12-23": 0,
    "2024-12-24": 3,
    "2024-12-25": 0,
    "2024-12-26": 2,
    "2024-12-27": 2,
    "2024-12-28": 0,
    "2024-12-29": 0,
    "2024-12-30": 0,
    "2024-12-31": 1,
  };

  const tileContent = ({ date }) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    const lessons = lessonData[formattedDate];

    console.log("date", moment(date).format("YYYY-MM-DD HH:mm:ss"));
    console.log("formattedDate", formattedDate);
    console.log("lessons", lessons);

    if (lessons !== undefined || lessons === 0) {
      return (
        <LessonTile lessonCount={lessons || 0}>{date.getDate()}</LessonTile>
      );
    }

    return null;
  };

  const tileClassName = ({ date }) => {
    const day = date.getDay();
    const isWeekend = day === 0 || day === 6;
    const isCurrentMonth = moment(date).isSame(moment(), "month");

    return isWeekend || !isCurrentMonth ? "hidden" : "";
  };

  return (
    <>
      <CalendarContainer>
        <div>
          <h5>
            <span>12월 현재</span>까지 <span>총 12회</span> 수업을 진행했어요
          </h5>

          <Flex>
            <Calendar
              tileContent={tileContent}
              tileClassName={tileClassName}
              calendarType="gregory"
              locale="ko-KR"
              view="month"
              minDetail="month"
              maxDetail="month"
              showNavigation={false} // true
              formatShortWeekday={(locale, date) => {
                const weekdays = ["MON", "TUE", "WED", "THUR", "FRI", "", ""];
                return weekdays[date.getDay()];
              }}
            />

            <LegendContainer>
              {legendItems.map((item, index) => (
                <LegendItem key={index} color={item.color}>
                  <div className="legend-block" />
                  <span>{item.label}</span>
                </LegendItem>
              ))}
            </LegendContainer>
          </Flex>
        </div>
      </CalendarContainer>
    </>
  );
};

export default BlockCalendar;
