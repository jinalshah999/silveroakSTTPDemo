import { Routes, RouterModule } from "@angular/router";
import { ArrDemoComponent } from "./arr-demo/arr-demo.component";
import { DemoComponent } from "./demo/demo.component";
import { HttpdemoTaskComponent } from "./httpdemo-task/httpdemo-task.component";
import { AddtaskComponent } from "./addtask/addtask.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { TaskdetailsComponent } from "./taskdetails/taskdetails.component";
import { MainDragDropComponent } from "./main-drag-drop/main-drag-drop.component";
import { MainFormdemoComponent } from "./main-formdemo/main-formdemo.component";
import { MainTableComponent } from "./main-table/main-table.component";
const arr: Routes = [
  { path: "", redirectTo: "/demo", pathMatch: "full" },
  { path: "arrdemo", component: ArrDemoComponent },
  { path: "demo", component: DemoComponent },
  { path: "task", component: HttpdemoTaskComponent },
  { path: "addtask", component: AddtaskComponent },
  { path: "taskdetails/:id", component: TaskdetailsComponent },
  { path: "dragdrop", component: MainDragDropComponent },
  { path: "addform", component: MainFormdemoComponent },
  { path: "table", component: MainTableComponent },
  { path: "**", component: PagenotfoundComponent }
];
export const routing = RouterModule.forRoot(arr);
