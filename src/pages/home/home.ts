import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: BarcodeScannerOptions;
  encodeText:string="";
  encodedData:any={};
  scannedData:any={};
  constructor(public navCtrl: NavController,public scanner:BarcodeScanner) {

  }

  scan(){
    this.options={
      prompt:"scan your barcode"
    };
    this.scanner.scan().then((data)=>{
      this.scannedData=data;
      console.log(this.scannedData);
    },(err)=> {
      console.log("scan ",err)
    });
  }
  encode(){
    console.log("encode Start")
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE,this.encodeText).then((data)=>{
      this.encodedData=data;
      console.log(this.encodedData);
    },(err)=> {
      console.log("encode" , err);
    });
    
  }

}
