import { Component, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import  {ButtonOverviewExample} from "./button-component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonOverviewExample],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sad_words: string[] =[
    "WHY WOULD YOU SAY THATT :(",
    "BUT I DOOO... :((",
    "왜 waeeee",
    "You hurt my feelings... :(",
    "How can I not love you"
  ]
  happy_words: string[] = [
    "OF COURSE I DOOO",
    "YES, IM SHOREE",
    "YES, REALLLYYY",
    "YOU SO SILLYYY",
    "I LOVE YOU TO NEPTUNE AND BACK!!"
  ]
  title = 'My Love';
  message = "HELLO, MY LOVE"
  messageIndex = 0;
  widthOfBtnDiv = window.innerWidth;
  heightOfBtnDiv = window.innerHeight
  handleChildEvent(data: string) {
    console.log(`Data received in parent: ${data}`);
    if(data == "Yes"){
      let index = Math.floor(Math.random() * this.happy_words.length);

      while(this.messageIndex == index){
        index = Math.floor(Math.random() * this.happy_words.length)
      }
      this.message = this.happy_words[index];
      this.messageIndex = index

    }else{
      let index = Math.floor(Math.random() * this.happy_words.length);

      while(this.messageIndex == index){
        index = Math.floor(Math.random() * this.sad_words.length)
        console.log(index)
      }
      this.message = this.sad_words[index];
      this.messageIndex = index

    }
  }
}
