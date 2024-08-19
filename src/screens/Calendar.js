import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";

export default function CalendarScreen() {
	const [currentEvents, setCurrentEvents] = useState([]);

	function handleDateSelect(selectInfo) {
		let title = prompt("Please enter a new title for your event");
		let calendarApi = selectInfo.view.calendar;

		calendarApi.unselect(); // clear date selection

		if (title) {
			calendarApi.addEvent({
				id: createEventId(),
				title,
				start: selectInfo.startStr,
				end: selectInfo.endStr,
				allDay: selectInfo.allDay,
			});
		}
	}

	function handleEvents(events) {
		setCurrentEvents(events);
	}

	return (
		<div>
			<FullCalendar
				plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
				initialView="timeGridDay"
				height={"auto"}
				editable={true}
				selectable={true}
				selectMirror={true}
				dayMaxEvents={true}
				initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
				select={handleDateSelect}
				eventContent={renderEventContent} // custom render function
				// eventClick={handleEventClick}
				eventsSet={handleEvents} // called after events are initialized/added/changed/removed
				/* you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
			/>
		</div>
	);
}

function renderEventContent(eventInfo) {
	return (
		<>
			<b>{eventInfo.timeText}</b>
			<i>{eventInfo.event.title}</i>
		</>
	);
}
