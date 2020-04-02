import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { ObserverComponent } from './Components/Observers/observer.component';
import { SubscribersComponent } from './Components/subscribers/subscribers.component';
import { SubjectComponent } from './Components/Subject/RxjsSubject.component';
import { OfRxjsComponent } from './Components/OfRxjs/OfRxjs.component';
import { FromEventComponent } from './Components/FromEvent/FromEvent.component';
import { RangeComponent } from './Components/Range/Range.component';
import { IntervalAndTimer } from './Components/Interval_Timer/IntervalAndTimer.component';
import { AsyncSchedulerComponent } from './Components/AsyncScheduler/AsyncScheduler.component';
import { FromAndOfComponent } from './Components/FromAndOf/FromAndOf.component';
import { OperatorMapComponent } from './Components/OperatorMap/OperatorMap.component';
import { OperatorPluckComponent } from './Components/OperatorPluck/OperatorPluck.component';
import { OperatorMapToComponent } from './Components/OperatorMapTo/OperatorMapTo.component';
import { OperatorFilterComponent } from './Components/OperatorFilter/OperatorFilter.component';
import { TapOperatorComponent } from './Components/OperatorTap/Tap.component';
import { OperatorReduceComponent } from './Components/OperatorReduce/OperatorReduce.component';
import { OperatorScanComponent } from './Components/OperatorScan/OperatorScan.component';
import { OperatorsOthersComponent } from './Components/OperatorOthers/OperatorsOthers.component';
import { AjaxRequest } from './Components/AjaxRequest/AjaxRequest.component';
import { AjaxGetJSONComponent } from './Components/AjaxGetJSON/AjaxGetJSON.component';

@NgModule({
  declarations: [
    AppComponent,
    ObserverComponent,
    SubscribersComponent,
    SubjectComponent,
    OfRxjsComponent,
    FromEventComponent,
    RangeComponent,
    IntervalAndTimer,
    AsyncSchedulerComponent,
    FromAndOfComponent,
    OperatorMapComponent,
    OperatorPluckComponent,
    OperatorMapToComponent,
    OperatorFilterComponent,
    TapOperatorComponent,
    OperatorReduceComponent,
    OperatorScanComponent,
    OperatorsOthersComponent,
    AjaxRequest,
    AjaxGetJSONComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
