import styled from "styled-components";

const StyledDay = styled.li`
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  align-items: center;
  padding: 1.6rem 2rem;
  flex-direction: column;
  background-color: #ffffff3b;
  transition: all 0.3s ease 0s;
  & span {
    font-size: 5.2rem;
  }
  &:hover {
    scale: 1.1; 
    color: #ffffff;
    background-color: #64646444;
  }
`;

function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], "☀️"],
    [[1], "🌤"],
    [[2], "⛅️"],
    [[3], "☁️"],
    [[45, 48], "🌫"],
    [[51, 56, 61, 66, 80], "🌦"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
    [[71, 73, 75, 77, 85, 86], "🌨"],
    [[95], "🌩"],
    [[96, 99], "⛈"],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return icons.get(arr);
}

function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(dateStr));

}

const Day = (props) => {
  const { date, max, min, code, isToday } = props;

  return (
    <StyledDay>
      <span>{getWeatherIcon(code)}</span>
      <p>{isToday ? "Today" : formatDay(date)}</p>
      <p>
        {Math.floor(min)}&deg; &mdash; <strong>{Math.ceil(max)}&deg;</strong>
      </p>
    </StyledDay>
  );
};
export default Day;