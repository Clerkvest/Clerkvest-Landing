import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {interval, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  source = interval(5000);

  currentState = 0;

  keywords = [
    'Intrapreneurship.',
    'Selbstständigkeit.',
    'Geld.'
  ];

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {
    this.subscription = this.source.subscribe(val => this.switch());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  switch() {
    document.getElementById('keyword-switch').innerText = this.keywords[this.currentState];
    this.currentState = (this.currentState + 1) % 3;
  }
}
