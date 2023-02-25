import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-copy-path-form',
  templateUrl: './add-copy-path-form.component.html',
  styleUrls: ['./add-copy-path-form.component.scss']
})
export class AddCopyPathFormComponent implements OnInit {
  @Output() submitForm = new EventEmitter();
onSubmitForm() {
  this.submitForm.emit(this.validateForm.value);
}

  validateForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      source: [null, [Validators.required]],
      destination: [null,[Validators.required]]
    });
  }

}
