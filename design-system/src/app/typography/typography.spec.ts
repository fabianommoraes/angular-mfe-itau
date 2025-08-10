import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TypographyComponent } from './typography.component';

describe('TypographyComponent', () => {
  let component: TypographyComponent;
  let fixture: ComponentFixture<TypographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypographyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct text content', () => {
    component.text = 'Hello, Typography!';
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('.typography'));
    expect(element.nativeElement.textContent).toContain('Hello, Typography!');
  });

  it('should apply the correct font size based on the size input', () => {
    component.size = 'lg';
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('.typography'));
    expect(element.classes['lg']).toBeTrue();
  });
});
