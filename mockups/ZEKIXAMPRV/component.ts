
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'ZEKIXAMPRV',
    templateUrl: 'template.html',
    
    })
    export class ZEKIXAMPRV implements OnInit {
    constructor(
        private http: HttpClient,
        ) { }
    
    // myData: any;

    ngOnInit() {
        // this.http.get('assets/myData.json').subscribe((data) => {
        //     this.myData = data;
        // });
    }
}