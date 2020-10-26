
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'WTRTXCEBTD',
    templateUrl: 'template.html',
    
    })
    export class WTRTXCEBTD implements OnInit {
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