import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  ngOnInit(): void {
    initFlowbite();
  }

  onSubmit() {
    console.log(1);
  }

  onDecline() {
    console.log(2);
  }
}
