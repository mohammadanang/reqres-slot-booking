import React from "react";
import ReactTimeslotCalendar from 'react-timeslot-calendar';
import moment from 'moment';

export default class SlotBookContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            usersList:null
        }
    }

    render() {
        const timeslot= [
            ['10', '11'],
            ['11', '12'],
            ['12', '13'],
            ['13', '14'],
            ['14', '15'],
            ['15', '16'],
            ['16', '17'],
            ['17', '18'],
            ['18', '19'],
        ]

        const disabledTimeslot = [
            {
                startDate: 'April 30th 2017, 12:00:00 AM',
                format: 'MMMM Do YYYY, h:mm:ss A',
            },
            {
                startDate: 'May 1st 2017, 3:00:00 PM',
                format: 'MMMM Do YYYY, h:mm:ss A',
            },
            {
                startDate: 'May 5th 2017, 6:00:00 PM',
                format: 'MMMM Do YYYY, h:mm:ss A',
            },
        ]
        return (
            <ReactTimeslotCalendar
                initialDate = { moment().format() }
                maxTimeslots = {1}
                disabledTimeslots = {disabledTimeslot}
                onSelectTimeslot = { (timeslots, lastSelected) => {
                    console.log('All Timeslots:');
                    console.log(timeslots);
        
                    console.log('Last selected timeslot:');
                    console.log(lastSelected);
                  } }
                timeslots = {timeslot}
            />
        );
    }
}
