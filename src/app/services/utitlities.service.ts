import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtitlitiesService {

  constructor() { }

  getOffsetTop = element => {
    let offsetTop = 0;
    while (element) {
      offsetTop += element.offsetTop;
      element = element.offsetParent;
    }
    return offsetTop;
  }

  stopMedia() {
    var i;
    // iframe
    let iframe = document.querySelectorAll('iframe');
    for (i = 0; i < iframe.length; i++) {
      // youtube
      if (iframe[i]['contentWindow']) {
        // for Youtube
        iframe[i].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        // for Vimeo
        iframe[i].contentWindow.postMessage('{"method":"pause"}', '*');
        // for Dailymotion
        iframe[i].contentWindow.postMessage('{"command":"pause","parameters":[]}', "*");
      }
    }
    // video html5
    let video = document.querySelectorAll('video');
    for (i = 0; i < video.length; i++) video[i].pause();
    // audio html5
    let audio = document.querySelectorAll('audio');
    for (i = 0; i < audio.length; i++) audio[i].pause();
  }
}
