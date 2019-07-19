import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ArrDemoComponent } from './arr-demo/arr-demo.component';
import { FilterPipe } from './filter.pipe';
import { HttpdemoTaskComponent } from './httpdemo-task/httpdemo-task.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { CreaditcardDirective } from './creaditcard.directive';
import { HighlighterDirective } from './highlighter.directive';
import { routing } from './app.routing';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatInputModule, MatSelectModule, MatRadioModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MainFormdemoComponent } from './main-formdemo/main-formdemo.component';
import { MainTableComponent } from './main-table/main-table.component';
import { MainDragDropComponent } from './main-drag-drop/main-drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ArrDemoComponent,
    FilterPipe,
    HttpdemoTaskComponent,
    AddtaskComponent,
    CreaditcardDirective,
    HighlighterDirective,
    PagenotfoundComponent,
    TaskdetailsComponent,
    MainNavComponent,
    MainDashboardComponent,
    MainFormdemoComponent,
    MainTableComponent,
    MainDragDropComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DragDropModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
