import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundcloudFavouritesComponent } from './soundcloud-favourites.component';

describe('SoundcloudFavouritesComponent', () => {
  let component: SoundcloudFavouritesComponent;
  let fixture: ComponentFixture<SoundcloudFavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundcloudFavouritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundcloudFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
