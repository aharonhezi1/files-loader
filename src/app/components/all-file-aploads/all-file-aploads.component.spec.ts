import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFileAploadsComponent } from './all-file-aploads.component';

describe('AllFileAploadsComponent', () => {
  let component: AllFileAploadsComponent;
  let fixture: ComponentFixture<AllFileAploadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFileAploadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFileAploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
