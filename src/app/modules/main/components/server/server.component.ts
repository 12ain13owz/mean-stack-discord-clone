import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { ValidateService } from '../../../shared/services/validate.service';
import { SERVER_CONSTANTS } from './server.constants';
import { ServerForm } from '../../../shared/models/server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.scss',
})
export class ServerComponent implements OnInit {
  @ViewChild('btnClose') btnClose: ElementRef<HTMLElement>;
  @ViewChild('formDirect') formDirect: FormGroupDirective;

  form: FormGroup<ServerForm>;
  fb = inject(FormBuilder);
  validate = inject(ValidateService);

  validationMessage = SERVER_CONSTANTS.validationMessage;
  inputDefault = this.validate.getInputClass.default;
  imagePreview: string | ArrayBuffer;

  constructor() {
    this.initServerForm();
  }

  ngOnInit(): void {
    initFlowbite();
  }

  onSubmit() {
    if (this.form.invalid) return;

    this.formDirect.resetForm();
    this.btnClose.nativeElement.click();
  }

  onImagePicked(e: Event) {
    const event = <HTMLInputElement>e.target;
    const file = event.files[0];

    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };

    reader.readAsDataURL(file);
  }

  initServerForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      image: [
        null,
        {
          validators: [Validators.required],
          asyncValidators: [this.validate.mimeType],
        },
      ],
    });
  }

  get name() {
    return this.form.controls['name'];
  }
}
