import { Component } from "@angular/core";

@Component({
  templateUrl: './manual.component.html',
  selector: 'app-manual'
})

export class ManualComponent {
  promise1 = new Promise((resolve, reject) => {
    return resolve(true);
  });

  promise2 = new Promise((resolve, reject) => {
    return resolve(true);
  });

  validatePromises() {
    this.promise1.then((result) => {
      return this.promise2.then((r2) => {
        return r2;
      });
    });
    return false;
  }
}
