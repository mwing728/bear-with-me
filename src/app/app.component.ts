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
    "Why don't you love me?",
    "You hate me...",
    "You don't care for me",
    "You still hate me",
    "My life is ruined",
    "How can you be so cruel :("
  ]
  happy_words: string[] = [
    "YAYYYY",
    "I LOVE YOU",
    "Thanks for loving me :))))",
    "You DO care about me :)",
    "I am happy!",
    "EXCITING"
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
