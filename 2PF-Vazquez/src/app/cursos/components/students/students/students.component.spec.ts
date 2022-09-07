import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsComponent } from './students.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AgregarDialogComponent } from '../../agregar-dialog/agregar-dialog/agregar-dialog.component';
import { EditDialogComponent } from '../../edit-dialog/edit-dialog/edit-dialog.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, HttpClientModule, RouterModule,RouterTestingModule],
      declarations: [ StudentsComponent, AgregarDialogComponent,EditDialogComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
