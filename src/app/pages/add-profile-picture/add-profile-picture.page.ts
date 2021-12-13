import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-profile-picture',
  templateUrl: './add-profile-picture.page.html',
  styleUrls: ['./add-profile-picture.page.scss'],
})
export class AddProfilePicturePage implements OnInit {

  constructor(
    public nc: NavController,
  ) { }

  ngOnInit() {

  }

  public doLater() {
    this.nc.navigateRoot('home');
  }

  public takePicture() {
    console.log('do picture');

    const takePicture = async () => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });

      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      const imageUrl = image.webPath;
      console.log(imageUrl);
      // Can be set to the src of an image now
      // imageElement.src = imageUrl;
    };
  }

}
