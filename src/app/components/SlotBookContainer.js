import React from "react";
import { Calendar, momentLocalizer, Views} from 'react-big-calendar';
import { notification  } from 'antd';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from "axios";

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

const openNotification = () => {
    notification.open({
        message: 'Already Booked',
        description:
        'Slot is Already Booked',
        onClick: () => {
            console.log('Slot is Already Booked');
        },
    });
};

const openErrorNotification = () => {
    notification.open({
        message: 'Time Exceeded Error',
        description:
        'Slot will be of one hour',
        onClick: () => {
            console.log('Slot will be of one hour');
        },
    });
};

export default class SlotBookContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'React',
            selectedDates:null
          };
          this.onSlotChange = this.onSlotChange.bind(this)
    }

    async componentDidMount(){
        const result = await axios.get('http://localhost:8080/api/slotBook')

        this.setState({
            selectedDates:result.data
        })
    }

    onSlotChange(slotInfo) {
        const diff = moment(slotInfo.end.toLocaleString()).diff(moment(slotInfo.start.toLocaleString()))
        if(diff === 3600000){
            var startDate = moment(slotInfo.start.toLocaleString()).format()
            var endDate = moment(slotInfo.end.toLocaleString()).format()
            this.props.handleSlotBooked(startDate,endDate)
        }else{
            openErrorNotification()
        }
    }

    onEventClick(event) {
        openNotification()
    }

    render() {
        var myEventsList=[]
        this.state.selectedDates && this.state.selectedDates.length !== 0 && this.state.selectedDates.map(dateObj=>{
            myEventsList.push({
                'title':'Booked',
                'start':new Date(dateObj.startDate),
                'end':new Date(dateObj.endDate)
            })
        })

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
