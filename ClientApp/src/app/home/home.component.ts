import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

    lista: string[];
    listaPartidos: string[];

    constructor() {
        this.lista = ["hola", "que", "tal"];
        this.listaPartidos = ["", "", "", ""];
        console.log('HomeComponent - constructor');
    }

    //loadAPI;

    public loadScript(strUrl, id) {
        console.log("preparing to load...");

        try {
            let del = document.getElementById(id);
            if (del == null) {
                del.removeAttribute;
                console.log("removeAttribute...");
                del.remove;
                console.log("remove...");
            }
        } catch (e) {
            console.log(e);
        }

        let node = document.createElement("script");
        node.src = strUrl;
        node.id = id;
        node.type = "text/javascript";
        node.async = false;
        node.charset = "utf-8";
        document.getElementsByTagName("head")[0].appendChild(node);
    }

    ngOnInit() {
        console.log('ngOnInit');
        this.loadScript('./assets/js/jquery.js', 'idJquery');
        this.loadScript('./assets/js/slick.min.js', 'slick');
        this.loadScript('./assets/js/custom.js', 'custom');
    }

    ngOnChanges() {
        console.log('ngOnChanges');
    }

    ngDoCheck() {
        console.log('ngDoCheck');

        //const promiseFunction  = new Promise(resolve => {
        //    console.log("resolving promise...");

        //    this.loadScript('./assets/js/jquery.js', 'idJquery');
        //    this.loadScript('./assets/js/slick.min.js', 'slick');
        //    this.loadScript('./assets/js/custom.js', 'custom');

        //});

        //promiseFunction.then((response) => {
        //    console.log('promiseFunction' + response);
        //}).catch((error) => {
        //    console.log('promiseFunction' + error);
        //});


    }
    ngAfterContentInit() {
        console.log('ngAfterContentInit');
    }
    ngAfterContentChecked() {
        console.log('ngAfterContentChecked');
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit');
    }
    ngAfterViewChecked() {
        console.log('ngAfterViewChecked');
    }
    ngOnDestroy() {
        console.log('ngOnDestroy');
    }

}
