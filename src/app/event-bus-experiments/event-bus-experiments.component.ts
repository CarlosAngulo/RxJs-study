import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from './event-bus';
import { testLessons } from 'app/shared/model/test-lessons';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    globalEventBus.notifyObservers( LESSONS_LIST_AVAILABLE, testLessons.slice(0));
  }

  addLesson() {
    globalEventBus.notifyObservers( ADD_NEW_LESSON, {id:5, description: 'Carlos', duration: '3:50'})
    
  }

}
