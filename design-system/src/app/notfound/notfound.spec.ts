import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NotFoundComponent } from './notfound.component';
import { TypographyComponent } from '../typography/typography.component';
import { ButtonComponent } from '../button/button.component';
import { provideRouter, RouterLink } from '@angular/router';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
      declarations: [NotFoundComponent, TypographyComponent, ButtonComponent],
      imports: [RouterLink],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the not found message', () => {
    const element = fixture.debugElement.query(By.css('h1'));
    expect(element).toBeTruthy();
    expect(element.nativeElement.textContent).toContain('404');
  });
});
