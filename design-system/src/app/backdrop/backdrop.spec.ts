import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BackdropComponent } from './backdrop.component';

describe('BackdropComponent', () => {
  let component: BackdropComponent;
  let fixture: ComponentFixture<BackdropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackdropComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the backdrop element', () => {
    const backdropElement = fixture.debugElement.query(By.css('div'));
    expect(backdropElement).toBeTruthy();
  });

  it('should render the loader', () => {
    const loaderElement = fixture.debugElement.query(By.css('.loader'));
    expect(loaderElement).toBeTruthy();
  });
});
