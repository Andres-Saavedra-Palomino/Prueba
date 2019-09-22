import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	calendarPlugin = [dayGridPlugin, interactionPlugin]
	dia: string = new Date().getFullYear() + "-" + 0 + (new Date().getMonth() + 1) + "-" + 0 + (new Date().getDay() + 1)
	fecha = "2019-09-02"
	hora: string = new Date().getHours + ":" + new Date().getMinutes()
	dateClick(arg) {
		console.log("click")
		console.log(arg)
	}

	calendarEvents = [
		{ title: 'event 1', date: '2019-09-02 05:30' },
	];

	addEvent() {
		this.calendarEvents.push(
			{ title: 'event 2', date: this.dia + this.hora }
		);
	}

	modifyTitle(eventIndex, newTitle) {
		this.calendarEvents[eventIndex].title = newTitle;
	}
	ngOnInit() {
		this.addEvent()
		this.modifyTitle(1, "clase de Angular")
		console.log(this.dia)
	}
}
