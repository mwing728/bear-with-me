import {Component, Input, ElementRef, Output, EventEmitter, ChangeDetectorRef} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import confetti from 'canvas-confetti';

/**
 * @title Basic buttons
 */
@Component({
  selector: 'button-overview-example',
  templateUrl: 'button-overview-example.html',
  styleUrls: ['button-overview-example.css'],
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class ButtonOverviewExample {
    @Input() buttonText: string = "";
    @Input() buttonColor: string = "";
    @Input() buttonClassName: string = "";
    @Input() data: string = '';
    @Output() childEvent = new EventEmitter<string>();
    recentLeft: number = 0;
    recentTop: number = 0;
    buttonLeft: number = 0;
    buttonTop: number = 0;
    buttonWidth: number = 0;
    buttonHeight: number = 0;
    offsetWidth: number = 0;
    offsetHeight: number = 0;
    sad_bear_gifArr: string[] = [
      "https://tenor.com/view/love-you-gif-20040131.gif", 
      "https://tenor.com/view/tkthao219-bubududu-panda-gif-22065967.gif", 
      "https://tenor.com/view/cry-baby-cute-teddy-bear-sad-gif-17918124.gif", 
      "https://tenor.com/view/cry-cartoon-sad-bear-gif-10681201.gif", 
      "https://tenor.com/view/cry-gif-2555637763742272756.gif", 
      "https://tenor.com/view/tkthao219-bubududu-panda-gif-18298340384572781614.gif", 
      "https://tenor.com/view/milk-and-mocha-sigh-angry-fiery-gif-14041678.gif", 
      "https://tenor.com/view/please-cute-bear-sad-gif-22315007.gif", 
      "https://tenor.com/view/kakao-bear-sad-cry-gif-10088227.gif", 
      "https://tenor.com/view/milk-and-mocha-bears-cry-sad-tears-gif-14364396.gif"
    ];
    happy_bear_gifArr: string[] = [
      "https://tenor.com/view/bear-dance-no-background-gif-25650543.gif",
      "https://tenor.com/view/happy-love-gif-27330003.gif",
      "https://tenor.com/view/dancing-bears-peach-goma-ositos-bailando-gif-26339422.gif",
      "https://tenor.com/view/eccomi-gif-11315612914336644838.gif",
      "https://tenor.com/view/milk-and-mocha-dance-bear-music-there-gif-14700156.gif",
      "https://tenor.com/view/milk-mocha-milk-and-mocha-bears-please-plz-gif-13418516.gif",
      "https://tenor.com/view/bear-gif-24004434.gif",
      "https://tenor.com/view/white-bear-heart-love-cute-gif-17943862.gif",
      "https://tenor.com/view/excited-milk-and-mocha-cute-bear-white-bear-love-bear-gif-21786989.gif",
      "https://tenor.com/view/ryan-love-you-luv-u-kiss-kakao-talk-gif-12033334.gif"
    ]
    lengthOfGifArr: number = 10;
    currentGifIndex: number = 0;
    constructor(private el: ElementRef, private cdr: ChangeDetectorRef) {}

    triggerConfetti(){
      if(this.buttonClassName.includes("yesBtn")){
        this.changeGif(this.happy_bear_gifArr)
        confetti({
          particleCount: 150,
          spread: 200,
          origin: { y: 0.6 }
        });
        this.childEvent.emit('Yes');
      }

    }
    ngAfterViewInit(){
      this.el.nativeElement.ownerDocument.getElementById("gifimg").src = "https://tenor.com/view/tkthao219-bubududu-gif-25117121.gif";
      this.setButtonLocations();
      this.cdr.detectChanges();
    }


    moveButton() {
      if(this.buttonClassName.includes("noBtn")){
        let maxWidth = window.innerWidth - this.offsetWidth;
        let maxHeight = window.innerHeight - this.offsetHeight;
        console.log(maxWidth);
        console.log(maxHeight);
        console.log(this.recentLeft);
        var newXcoordinate = Math.floor((Math.random() * 2 - 1) * 45);
        var newYcoordinate = Math.floor((Math.random() * 2 - 1) * 45);
        console.log(newXcoordinate, newYcoordinate);
        this.buttonLeft = newXcoordinate;
        this.buttonTop = newYcoordinate;
        this.changeGif(this.sad_bear_gifArr)
        this.childEvent.emit('No');
      }
    }
    private setButtonLocations(){
      console.log("setButtonlocations");
      let btnClass = this.el.nativeElement.querySelector('button').className
      console.log(btnClass);
      this.buttonClassName = btnClass
      const rect = this.el.nativeElement.querySelector('button');
      this.offsetWidth = rect.offsetWidth;
      this.offsetHeight = rect.offsetHeight; 
    }
    private changeGif(gifarr: string[]){
      let index = Math.floor(Math.random() * (gifarr.length))
      while(this.currentGifIndex == index){
        index = Math.floor(Math.random() * (gifarr.length))
      }
      if(index != this.currentGifIndex){
        let gifimage = this.el.nativeElement.ownerDocument.getElementById("gifimg");
        gifimage.src = gifarr[index];
        this.currentGifIndex = index;
      }
    }
}