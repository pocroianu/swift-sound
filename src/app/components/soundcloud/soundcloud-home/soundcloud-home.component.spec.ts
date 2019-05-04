import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundcloudHomeComponent } from './soundcloud-home.component';

describe('SoundcloudHomeComponent', () => {
  let component: SoundcloudHomeComponent;
  let fixture: ComponentFixture<SoundcloudHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundcloudHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundcloudHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
