import FullCalendar from "@fullcalendar/react";
import { FC, forwardRef } from "react";
import dayGridPlugin from "@fullcalendar/daygrid"
import listPlugin from '@fullcalendar/list';

type CalendarProps = {
    events: CalendarEvent[]
}


export type CalendarEvent = {
    id: any;
    title: string;
    start: string;
    end: string;
    description?: string;
    backgroundColor?: string;
    classNames?: string[];
    textColor?: string;
    allDay?: boolean;
    extendedProps?: {
        [key: string]: any;
    };
};

export const Calendar = forwardRef<FullCalendar, CalendarProps>(({ events }, ref) => {
    return (
        <FullCalendar
            ref={ref}
            plugins={[dayGridPlugin, listPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
                left: "prev,next",
                center: "title",
                right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
            }}
            events={events}
        />
    );
});
