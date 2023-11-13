import styled from "styled-components";

const StyledDay = styled.li`
  gap: 0.5rem;
  width: 15rem;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  align-items: center;
  padding: 1.6rem 2rem;
  flex-direction: column;
  background-color: #ffffff3b;
  transition: all 0.3s ease 0s;
  @media (max-width: 768px) {
    gap: 0.25rem;
    width: 12rem;
  }
  & p {
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
  & span {
    font-size: 5.2rem;
    @media (max-width: 768px) {
      font-size: 4rem;
    }
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
      <p>from {Math.floor(min)}&deg;</p>
      <p>
        <strong>to {Math.ceil(max)}&deg;</strong>
      </p>
    </StyledDay>
  );
};
export default Day;
