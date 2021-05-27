import { Component, OnInit } from '@angular/core';
import {PopoverPage} from "../popover/popover.page"
import { ModalController ,PopoverController,LoadingController} from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import {Storage} from "@ionic/storage";

declare var window;

declare var document;
@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  processing:boolean;
  images:string[]=[];
  modal:any;
  category: any;
  desc: any;
  address: any;
  constructor(
    private pop:PopoverController,
    public modalController: ModalController,
    private storage:Storage,
    private loader:LoadingController
  ) { }

  ngOnInit() {
    window.reports  = this;
  }
  // submit reports
  // *******************************
  insertImages(id,images)
  {
    this.loader.create({
      message:"uploading images..."
    }).then((ele)=>{
  
    ele.present();
    let obj = Object.assign({}, images);
    window.app.firebasetemp.database().ref(window.app.appName+"/images/"+id+"/").set(obj, function (err) {
      
      ele.dismiss();
    })
  })
  }
submit()
{
  this.storage.get('language').then((city)=>{
    

  if(city)
  {
  let ref = this;
  let id = Date.now().toString();
  
  let obj = {category:this.category,desc:this.desc,city:city,address:this.address,id:id};
  
  console.log(obj);

  
  
  this.loader.create({
    message:"please wait..."
  }).then((ele)=>{

  ele.present();
  console.log(window.app.firebasetemp);
  
         window.app.firebasetemp.database().ref(window.app.appName+"/details/"+id+"/").set(obj, function (err) {
          alert(JSON.stringify(err));
          ele.dismiss();
           
           if (err) {
     
           }
           else {
             
             
             ref.storage.get("reportids").then((reportsid)=>{
               let arr = [];
               if(reportsid)
               {
arr = arr.concat(reportsid);

               }
               arr.push(id);
               ref.storage.set("reportids",arr);
               ref.insertImages(id,ref.images);
             })
           }
          });
        })
        }
      
        })

}


 
    // Show modal 
  // ********
  async presentModal() {
    this.modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class'
    });
    return await this.modal.present();
  }

  dismissModal()
  {
this.modal.dismiss();
  }
         

  
  getBase64(file) {
    let that = this;
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     console.log(reader.result);
     that.images.push(reader.result.toString());

   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}
presentActionSheet(fileLoader) {

fileLoader.click();
var that = this;
fileLoader.onchange = function () {
 var files = document.getElementById("fileLoader").files;

for (var i = 0; i < files.length; i++)
{
that.getBase64(files[i]);
}
}
}

// presentActionSheet(fileLoader) {
//   fileLoader.click();
//   var that = this;
//   fileLoader.onchange = function () {
//     var file = fileLoader.files[0];
//     var reader = new FileReader();

//     reader.addEventListener("load", function () {
//       that.processing = true;
//       that.getOrientation(fileLoader.files[0], function (orientation) {
//         if (orientation > 1) {
//           that.resetOrientation(reader.result, orientation, function (resetBase64Image) {
//             that.uploadImage = resetBase64Image;
//             that.images.push(that.uploadImage);
//           });
//         } else {
//           that.uploadImage = reader.result;
//           that.images.push(that.uploadImage);
//         }
//       });
//     }, false);

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   }
// }

imageLoaded(){
this.processing = false;
}

getOrientation(file, callback) {
var reader = new FileReader();
reader.onload = function (e:any) {

var view = new DataView(e.target.result);
if (view.getUint16(0, false) != 0xFFD8) return callback(-2);
var length = view.byteLength, offset = 2;
while (offset < length) {
  var marker = view.getUint16(offset, false);
  offset += 2;
  if (marker == 0xFFE1) {
    if (view.getUint32(offset += 2, false) != 0x45786966) return callback(-1);
    var little = view.getUint16(offset += 6, false) == 0x4949;
    offset += view.getUint32(offset + 4, little);
    var tags = view.getUint16(offset, little);
    offset += 2;
    for (var i = 0; i < tags; i++)
      if (view.getUint16(offset + (i * 12), little) == 0x0112)
        return callback(view.getUint16(offset + (i * 12) + 8, little));
  }
  else if ((marker & 0xFF00) != 0xFF00) break;
  else offset += view.getUint16(offset, false);
}
return callback(-1);
};
reader.readAsArrayBuffer(file);
}
resetOrientation(srcBase64, srcOrientation, callback) {
var img = new Image();

img.onload = function () {
var width = img.width,
  height = img.height,
  canvas = document.createElement('canvas'),
  ctx = canvas.getContext("2d");

// set proper canvas dimensions before transform & export
if (4 < srcOrientation && srcOrientation < 9) {
  canvas.width = height;
  canvas.height = width;
} else {
  canvas.width = width;
  canvas.height = height;
}

// transform context before drawing image
switch (srcOrientation) {
  case 2: ctx.transform(-1, 0, 0, 1, width, 0); break;
  case 3: ctx.transform(-1, 0, 0, -1, width, height); break;
  case 4: ctx.transform(1, 0, 0, -1, 0, height); break;
  case 5: ctx.transform(0, 1, 1, 0, 0, 0); break;
  case 6: ctx.transform(0, 1, -1, 0, height, 0); break;
  case 7: ctx.transform(0, -1, -1, 0, height, width); break;
  case 8: ctx.transform(0, -1, 1, 0, 0, width); break;
  default: break;
}

// draw image
ctx.drawImage(img, 0, 0);

// export base64
callback(canvas.toDataURL());
};

img.src = srcBase64;
}
removePic(i) {
//this.uploadImage = null;
this.images.splice(i,1);
}



}
