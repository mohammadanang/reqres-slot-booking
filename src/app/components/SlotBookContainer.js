import React from "react";
import { Calendar, momentLocalizer, Views} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

let allViews = Object.keys(Views).map(k => Views[k])

function Event({ event }) {
    console.log('Event event',event)
    return (
        <span>
            {event.title}
        </span>
    )
}

function EventAgenda({ event }) {
    console.log('EventAgenda event',event)
    return (
        <span>
            <em style={{ color: 'red'}}>{event.title}</em>
            <p>{ event.desc }</p>
        </span>
    )
}

var myEventsList = [
    {
        'title': 'Meeting',
        'start': new Date(2020, 8, 12, 10, 0, 0, 0),
        'end': new Date(2020, 8, 12, 11, 0, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting'
    },
    {
        'title': 'Lunch',
        'start':new Date(2020, 8, 12, 14, 0, 0, 0),
        'end': new Date(2020, 8, 12, 15, 0, 0, 0),
        desc: 'Power lunch'
    }
]

export default class SlotBookContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'React',
          };
          this.onSlotChange = this.onSlotChange.bind(this)
    }

    onSlotChange(slotInfo) {
        console.log('slotInfo',slotInfo)
        var startDate = moment(slotInfo.start.toLocaleString()).format("dddd, MMMM Do YYYY, h:mm:ss a");
        var endDate = moment(slotInfo.end.toLocaleString()).format("dddd, MMMM Do YYYY, h:mm:ss a");
        console.log('startTimeStartDate',startDate); //shows the start time chosen
        console.log('endTimEndDate',endDate); //shows the end time chosen
        this.props.handleSlotBooked(startDate,endDate)
    }

    onEventClick(event) {
        console.log('event',event) //Shows the event details provided while booking
    }

    render() {
        return (
            <Calendar
                localizer={localizer}
                selectable
                onSelectEvent={event => this.onEventClick(event)}
                onSelectSlot={(slotInfo) => this.onSlotChange(slotInfo) }
                events={myEventsList}
                views={allViews}
                step={30}
                timeslots={2}
                defaultView='week'
                defaultDate={new Date(Date.now())}
                components={{
                    event: Event,
                    agenda: {
                            event: EventAgenda
                    }
                }}
            />
        );
    }
}
