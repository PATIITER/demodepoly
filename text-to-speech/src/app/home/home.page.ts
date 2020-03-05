import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text: string;
  pic: any;

  private id:string = '/ZWJH7JQCjLM';

  constructor(public tts: TextToSpeech, public camera: Camera, public youtube: YoutubeVideoPlayer) { }

  play() {
    this.tts.speak(this.text)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
    console.log("say text:" + this.text);
  }
  startcamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.pic = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  openMyVideo(id) {
    this.youtube.openVideo(id);
    console.log("see youtube");    
  };
}
