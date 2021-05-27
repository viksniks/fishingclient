import { Component, OnInit } from '@angular/core';

import {ToastController,LoadingController,Platform} from "@ionic/angular";
import firebase from 'firebase';

@Component({
  selector: 'app-fishing',
  templateUrl: './fishing.page.html',
  styleUrls: ['./fishing.page.scss'],
  
})
export class FishingPage implements OnInit {
  colname:string="";
  obj:any={};
  keys:any[]=[];
  location:string="";
  comments:string="";
  appname:any="horgaszvip";
  sorted:any[]=[];
  totalweight:string="";
  totalpiece:string="";
  clickedtime:string="";
  sektorObj: any = {};
  sektorKeys: string[] = [];
  config:any={
  //   apiKey: "AIzaSyCNgYRtLXEZImH_JHldDWfEx9BlbLLtnhc",
  //  // authDomain: "gt06-59e86.firebaseapp.com",
  //  databaseURL: "https://trackonmap-b0571.firebaseio.com/",
  //  storageBucket: "trackonmap-b0571.appspot.com"
  apiKey: "AIzaSyBgQg5rGI_IQMNCyfpe_ajDa0_uqQtmVeQ",
 // authDomain: "horgaszvip.firebaseapp.com",
  databaseURL: "https://horgaszvip-default-rtdb.firebaseio.com",
  // projectId: "horgaszvip",
  // storageBucket: "horgaszvip.appspot.com",
  // messagingSenderId: "544964973382",
  // appId: "1:544964973382:web:c8b457d16e0d00b5d88b47"
   }

   bigfish:string="";
  constructor(private loader:LoadingController,private toast:ToastController,private platform:Platform)
  {
    this.platform.ready().then(()=>{
      if(firebase.apps.length == 0)
 
      {
   firebase.initializeApp(this.config);
      }
 
    })
  }

  ngOnInit() {
  //  this.getColNamee();
    this.getData();

  
  }

  // calculate()
  // {
   
  //   let temp = [];
  //   for(var i = 0;i<this.keys.length;i++)
  //   {
  //     if(this.obj[this.keys[i]].weight)
  //     {
  //       let arr =this.obj[this.keys[i]].weight.split('\n');
  //       var w = 0;
  //       for(var k = 0;k<arr.length;k++)
  //       {
  //         w = w +parseFloat(arr[k]);

  //       }
  //       temp.push({name:this.obj[this.keys[i]].name,weight:w});
  //      temp = temp.sort((a, b) => (a.weight > b.weight) ? 1 : -1 );
  //      temp = temp.reverse();
  //      this.sorted = temp;
  //     }
  //   }
  //   console.log(JSON.stringify(temp));
  // }

  getClickedTime(fn)
  {
    firebase.database().ref(this.appname + "/timestamp").once('value').then(function (snapshot) {
      let data =  snapshot.val();
      fn(data);
  
    });
  }

  getColNamee()
  {
    var ref = this;
    firebase.database().ref(this.appname + "/colname").once('value').then(function (snapshot) {
      let data =  snapshot.val();
      ref.colname = data;
      
  
    });
  }



  calculate()
  {
   
    let temp = [];
    for(var i = 0;i<this.keys.length;i++)
    {
      var w = 0;
      var p = 0;
      if(this.obj[this.keys[i]].weight)
      {
        let arr =this.obj[this.keys[i]].weight.split('\n');
        
        for(var k = 0;k<arr.length;k++)
        {
          if(arr[k] != "")
          {
          w = w +parseFloat(arr[k]);
          }

        }
      //  temp.push({name:this.obj[this.keys[i]].name,weight:w});
    //   temp = temp.sort((a, b) => (a.weight > b.weight) ? 1 : -1 );
    //   temp = temp.reverse();
    //   this.sorted = temp;
      }
      if(this.obj[this.keys[i]].piece)
      {
        let arr =this.obj[this.keys[i]].piece.split('\n');
      
        for(var k = 0;k<arr.length;k++)
        {
          if(arr[k] != "")
          {
          p = p +parseFloat(arr[k]);
          }

        }
      //  temp.push({name:this.obj[this.keys[i]].name,weight:w});
    //   temp = temp.sort((a, b) => (a.weight > b.weight) ? 1 : -1 );
    //   temp = temp.reverse();
    //   this.sorted = temp;
      }
      if(w >  0)
      {
      temp.push({sektor: this.obj[this.keys[i]].sektor,name:this.obj[this.keys[i]].name,weight:w,piece:p});
      }
      
    }
    temp = temp.sort((a, b) => (a.weight > b.weight) ? 1 : -1 );
    temp = temp.reverse();
    this.sorted = temp;

    console.log(JSON.stringify(temp));
    if(this.sorted.length > 0)
    {
    let totalweight = 0;
    let totalpiece = 0;
    console.log(JSON.stringify(this.sorted));
    for(var i = 0;i<this.sorted.length;i++)
    {
      totalweight = totalweight +  parseInt(this.sorted[i].weight);
      totalpiece = totalpiece + parseInt(this.sorted[i].piece)

    }
    this.totalweight = totalweight.toString();
    this.totalpiece = totalpiece.toString();
  }
  var ref = this;
 
    ref.getClickedTime(function(data1)
    {
      if(data1)
      {
        ref.clickedtime  = data1;
      }
    })

  
  }


  getMetaInfo()
  {
    var ref = this;
    this.getMetaInfoTemp(function(data)
    {
      if(data)
      {
       ref.location = data.location;
       ref.comments = data.comments;
      }
    })
  }
  getData()
  {
    let ref = this;
    this.loader.create({
      message:"kérlek varj..."
    }).then((ele)=>{
  
    ele.present();
    this.getDataTemp(function(data)
    {
      ele.dismiss();
      if(data)
      {
      console.log(JSON.stringify(data));
      ref.keys = Object.keys(data);
      ref.obj = data;
      ref.getMetaInfo();
      ref.calculate();
      ref.getBigFish();
      ref.getColNamee();
      ref.gettSektorCount();
      //alert(JSON.stringify(keys));
    //   let arr = [];
    //   for(var i = 0;i<keys.length;i++)
    //   {
    //     console.log(data[keys[i]]);
    //    arr = arr.concat(data[keys[i]]);
    //   }
    //  // alert(JSON.stringify(arr));
    //   if(arr.length > 0)
    //   {
    //     ref.fieldArray = [];
    //     ref.fieldArray = arr;
    //   }
      }
    })
  })
  
  }

  getBigFish()
{
  let ref = this;
  firebase.database().ref(this.appname + "/bigfish").once('value').then(function (snapshot) {
    let data =  snapshot.val();
    if(data)
    {
      ref.bigfish = data;
    }
   

  });
}

  getMetaInfoTemp(fn)
  {
   firebase.database().ref(this.appname+"/metainfo").once('value').then(function (snapshot) {
     let data =  snapshot.val();
     fn(data);

   });
    
  }

  getDataTemp(fn)
   {
    
    firebase.database().ref(this.appname + "/data/").once('value').then(function (snapshot) {
        let data =  snapshot.val();
        fn(data);
   
      });
   }
   getSortedDataForSektor(key) {
    var arr = [];
    for (var k = 0; k < this.sorted.length; k++) {
      if (key == this.sorted[k].sektor[0]) {
        arr.push(this.sorted[k]);
      }
    }
    return arr;

  }
  gettSektorCount()
   {
     var ref = this;
    firebase.database().ref(this.appname + "/sektors/").once('value').then((val)=>{
      if(val.val())
      {
      ref.orderBySektor();
      }
    })
    
   }
  orderBySektor() {
    var ref = this;
    var sektorTemp = [];
    this.sektorObj = {};

    for (var i = 0; i < ref.keys.length; i++) {
      if (ref.obj[ref.keys[i]].sektor != "") {
        sektorTemp.push(ref.obj[ref.keys[i]].sektor[0]);
      }

    }
    console.log(sektorTemp);
    sektorTemp = sektorTemp.filter((c, index) => {
      return sektorTemp.indexOf(c) === index;
    });
    sektorTemp = sektorTemp.sort();
    console.log(sektorTemp);
    for (var j = 0; j < sektorTemp.length; j++) {
      var arrtemp = [];
      for (var k = 0; k < ref.keys.length; k++) {
        if (sektorTemp[j] == ref.obj[ref.keys[k]].sektor.trim()[0]) {
          arrtemp.push(ref.obj[ref.keys[k]])
        }

      }
      ref.sektorObj[sektorTemp[j]] = arrtemp;
    }
    ref.sektorKeys = Object.keys(ref.sektorObj);
    console.log(ref.sektorObj);
  //  ref.disabledCalcultion = false;
  }
}
