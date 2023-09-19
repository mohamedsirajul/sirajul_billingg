import { E } from '@angular/cdk/keycodes';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'app/service/api.service';
import { Observable, Subscription, timer } from 'rxjs';
import { first } from 'rxjs/operators';
import * as screenfull from 'screenfull';
import { interval, Subject } from 'rxjs';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DatePipe],
})
export class HeaderComponent implements OnInit,OnDestroy {
  @Input() showToggle = true;
  @Input() showBranding = true;
  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleSidenavNotice = new EventEmitter<void>();
  shopname: string;
  shopstatus: string;
  shop_status = false
  val = 0;
  myDate: any;
  actualdata = {}
  data = {}
  pending_orders = [];
  subscription: Subscription;
  dialogRef;
  refresh: Observable<number> = timer(0, 10000);

  private get screenfull(): screenfull.Screenfull {
    return screenfull as screenfull.Screenfull;
  }

  mediaSub: Subscription;
  constructor(private apiservice: ApiService,public httpClient: HttpClient,private router: Router, private datePipe: DatePipe,private dialog: MatDialog,public mediaObserver:MediaObserver) {}
  
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  dateTime=Date.now();
  private $inActive=new Subject<boolean>();

  // startClock(){
  //   interval(1).subscribe(date=>{
  //     this.dateTime=Date.now();
  //   });
  // }

  ngOnInit() {

      this.myDate = new Date();
      this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
      // this.shopname = this.apiservice.shop_name
      // this.subscription = this.refresh.subscribe(() => {

      // });
      // this.getshopstatusfirst();
    // else this.apiservice.userLogout()
  }


  // TODO:
  toggleFullscreen() {
    if (this.screenfull.enabled) {
      this.screenfull.toggle();
    }
  }


  
}

