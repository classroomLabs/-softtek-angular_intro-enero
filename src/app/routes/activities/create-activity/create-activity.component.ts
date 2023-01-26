import { Component } from "@angular/core";
import { DATA } from "src/app/data.repository";

@Component({
  selector: "lab-create-activity",
  template: `
    <h3> Create your activity </h3>
    <lab-create-activity-form
      [ageCategories]="ageCategories"
      (create)="onCreate($event)">
    </lab-create-activity-form>
  `,
  styles: [],
})
export class CreateActivityComponent {
  ageCategories = DATA.ageCategories;
  onCreate(newActivity: unknown) {
    console.warn("Create activity !!!", newActivity);
  }
}
