import Event from './Event';

const Calendar = () => {
    return (
      <div className="Calendar">
        <table>
          <thead>
            <tr>
                <th></th>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
            </tr>
          </thead>
          <tbody>
            {/* Add table rows and data here */}
            <tr>
                <td className="time">8 am</td>
                <Event event='Fancy Dinner 🎩' color='green' />
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <Event event='Yolk 🍳' color ='green'/>
                <td></td>
            </tr>

            <tr>
                <td className="time">9 am</td>
                <Event event='Starbucks ☕️' color ='green'/>
                <td></td>
                <td></td>
                <Event event='Subway 🚊' color ='pink'/>
                <td></td>
                <td></td>
                <Event event='The Bean 🫘' color ='blue'/>
            </tr>

            <tr>
                <td className="time">10 am</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td className="time">11 am</td>
                <td></td>
                <Event event='Lunch with Jane 🍔' color='pink' />
                <td></td>
                <td></td>
                <Event event='Gym 🏋️‍♀️' color='green' />
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td className="time">12 pm</td>
                <Event event='Team Meeting 🤝' color='blue' />
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <Event event='Coding Challenge 💻' color='green' />
            </tr>

            <tr>
                <td className="time">1 pm</td>
                <td></td>
                <td></td>
                <Event event='Doctor Appointment 🏥' color='pink' />
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td className="time">2 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td className="time">3 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <Event event='Fancy Dinner 🎩' color='blue' location='Maple & Ash'/>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td className="time">4 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td className="time">5 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Calendar;