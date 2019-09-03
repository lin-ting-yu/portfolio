import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { LayoutModule } from './layout/layout.module';
import { DeviceDetectorModule } from 'ngx-device-detector';

// import { HomeModule } from './home/home.module';
// import { AboutModule } from './about/about.module';
// import { ContactModule } from './contact/contact.module';
// import { WorksModule } from './works/works.module';
// import { WorkModule } from './work/work.module';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    DeviceDetectorModule.forRoot()
    // HomeModule,
    // AboutModule,
    // ContactModule,
    // WorksModule,
    // WorkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
