import Day from "./Day";
import styles from "./Weather.module.css";

const Weather = (props) => {
  const {
    temperature_2m_max: max,
    temperature_2m_min: min,
    time: dates,
    weathercode: codes,
  } = props.weather;

  return (
    <div className={styles.weather}>
      <h2 className={styles.title}>Weather in {props.location}</h2>
      <ul className={styles.weather}>
        {dates.map((date, i) => (
          <Day
            date={date}
            max={max.at(i)}
            min={min.at(i)}
            code={codes.at(i)}
            key={date}
            isToday={i === 0}
          />
        ))}
      </ul>
    </div>
  );
};
export default Weather;
