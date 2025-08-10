import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent], // Declare the component
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the "URL Params" table when type is "URL Params"', () => {
    component.type = 'URL Params';
    fixture.detectChanges();

    const tableElement = fixture.debugElement.query(By.css('.ds-table'));
    expect(tableElement).toBeTruthy();

    const headers = tableElement.queryAll(By.css('.ds-table-header'));
    expect(headers.length).toBe(2);
    expect(headers[0].nativeElement.textContent).toContain('Prós');
    expect(headers[1].nativeElement.textContent).toContain('Contras');

    const pros = tableElement.queryAll(By.css('.ds-table-pro'));
    const cons = tableElement.queryAll(By.css('.ds-table-con'));
    expect(pros.length).toBe(3);
    expect(cons.length).toBe(3);
  });

  it('should render the "API" table when type is "API"', () => {
    component.type = 'API';
    fixture.detectChanges();

    const tableElement = fixture.debugElement.query(By.css('.ds-table'));
    expect(tableElement).toBeTruthy();

    const headers = tableElement.queryAll(By.css('.ds-table-header'));
    expect(headers.length).toBe(2);
    expect(headers[0].nativeElement.textContent).toContain('Prós');
    expect(headers[1].nativeElement.textContent).toContain('Contras');

    const pros = tableElement.queryAll(By.css('.ds-table-pro'));
    const cons = tableElement.queryAll(By.css('.ds-table-con'));
    expect(pros.length).toBe(3);
    expect(cons.length).toBe(3);
  });

  it('should not render a table when type is invalid', () => {
    component.type = 'Invalid Type';
    fixture.detectChanges();

    const tableElement = fixture.debugElement.query(By.css('.ds-table'));
    expect(tableElement).toBeNull();
  });
});
