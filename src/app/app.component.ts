import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Helper } from './helper';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  count: number;
  prevCount: number[];
  currCount: number[];
  mismatchIndexes: number[];
  helper: Helper
  isAnimate: boolean;
  constructor() {
    this.helper = new Helper();
    this.count = 0;
    this.prevCount = this.helper.numberToArrayOfDigits(this.count);
    this.currCount = this.helper.numberToArrayOfDigits(this.count);
    this.isAnimate = false;
    this.mismatchIndexes = [];
  }



  ngOnInit(): void {
    setInterval(() => {
      this.isAnimate = false;
      // Resetting the values;
      const curr = this.currCount;
      const newCurr = this.helper.numberToArrayOfDigits(this.count)

      this.count = this.count + 48;
      const newMistachIndexes = this.helper.mismatchStartIndex(newCurr, curr)
      if (!newMistachIndexes.includes(-1)) {
        setTimeout(() => {
          this.isAnimate = true;
          this.mismatchIndexes = newMistachIndexes;
          this.currCount = newCurr;
        }, 400)
      }



    }, 9000)
  }

  setDuration(index: number): string {
    switch (index) {
      case 0:
        return "2s"
      case 1:
        return "3s"
      case 2:
        return "5s"
      case 3:
        return "6s"
      default:
        return "1s"
    }
  }

  // setTimeout(() => {


  //   // updating the arrays.
  //   this.prevCount = curr;
  //   this.currCount = this.helper.numberToArrayOfDigits(this.count);
  //   this.isAnimate = true;
  // }, 2500)





}
