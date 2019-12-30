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

  switchSubscription: Subscription;
  letterSubscription: Subscription;
  switchInterval = interval(5000);
  letterInterval = interval(100);

  keywords = [
    'Intrapreneurship.',
    'Selbstständigkeit.',
    'Geld.'
  ];

  shouldRemove = true;
  shouldCount = false;

  currentState = 0;
  currentLetter = this.keywords[1].length;

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {
    this.switchSubscription = this.switchInterval.subscribe(val => this.switch());
  }

  ngOnDestroy() {
    this.switchSubscription.unsubscribe();
    this.letterSubscription.unsubscribe();
  }

  switch() {
    if (this.shouldCount) {
      this.currentState = (this.currentState + 1) % this.keywords.length;
    }

    this.shouldCount = !this.shouldCount;

    if (this.letterSubscription) {
      this.letterSubscription.unsubscribe();
    }

    this.letterSubscription = this.letterInterval.subscribe(value => this.letterAnim());
  }

  letterAnim() {
    if (this.shouldRemove) {
      document.getElementById('keyword-switch').innerText = this.keywords[this.currentState]
        .substr(0, this.currentLetter);

      if (this.currentLetter !== -1) {
        this.currentLetter--;
      } else {
        this.letterSubscription.unsubscribe();
        this.shouldRemove = false;
      }
    } else {
      document.getElementById('keyword-switch').innerText = this.keywords[this.currentState]
        .substr(0, this.currentLetter);

      if (this.currentLetter !== this.keywords[this.currentState].length + 1) {
        this.currentLetter++;
      } else {
        this.letterSubscription.unsubscribe();
        this.shouldRemove = true;
      }
    }
  }
}
