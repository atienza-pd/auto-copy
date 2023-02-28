import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-copy-path-container',
  templateUrl: './edit-copy-path-container.component.html',
  styleUrls: ['./edit-copy-path-container.component.scss'],
})
export class EditCopyPathContainerComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeId = this.route.snapshot.paramMap.get('id');
  }
}
