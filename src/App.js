import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';

function App() {
  const [date, setDate] = useState([
    new Date(2022, 5, 5),
    new Date(2022, 5, 10),
  ]);

  return (
    <div className='app'>
      <h1 className='text-center'>React Calendar with Range</h1>
      <div className='calendar-container' style={{padding:"2%",display:"flex",justifyContent:"center"}}>
        <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
          showNavigation={true}
          showWeekNumbers={true}
          // hover={new Date(2022, 5, 9)}
          // defaultView='decade'
          // maxDate={new Date()}
          // minDate={new Date(2022, 5, 1)}
          showFixedNumberOfWeeks={true}
          // showDoubleView={true}
          // maxDetail='year'
          nextLabel='month>>'
          next2Label='year>>'
          prevLabel='<<month'
          prev2Label='<<year'
          nextAriaLabel='Go to next month'
          // tileContent={({ date, view }) => view === 'month' && date.getDay() === 0 ? <p>It's Sunday!</p> : null}
          // onClick={(value) => alert('New date is: ', value)}
        />
      </div>
      {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
    </div>
  );
}

export default App;