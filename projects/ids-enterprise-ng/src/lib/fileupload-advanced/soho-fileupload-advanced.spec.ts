/// <reference path="soho-fileupload-advanced.d.ts" />

import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SohoFileUploadAdvancedModule } from './soho-fileupload-advanced.module';
import { SohoFileUploadAdvancedComponent } from './soho-fileupload-advanced.component';

@Component({
  template: `
    <div soho-fileupload-advanced></div>`
})
class SohoFileUploadAdvancedTestComponent {
  @ViewChild(SohoFileUploadAdvancedComponent) fileuploadadvanced: SohoFileUploadAdvancedComponent;
}

describe('Soho File Upload Advanced Render', () => {
  let fileuploadadvanced: SohoFileUploadAdvancedComponent;
  let component: SohoFileUploadAdvancedTestComponent;
  let fixture: ComponentFixture<SohoFileUploadAdvancedTestComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SohoFileUploadAdvancedTestComponent],
      imports: [FormsModule, SohoFileUploadAdvancedModule]
    });

    fixture = TestBed.createComponent(SohoFileUploadAdvancedTestComponent);
    component = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('div[soho-fileupload-advanced]'));
    el = de.nativeElement;

    fixture.detectChanges(true);

    fileuploadadvanced = component.fileuploadadvanced;
  });

  it('@Input() disabled', () => {
    fixture.detectChanges();
    fileuploadadvanced.disabled = true;
    fixture.detectChanges();
    fileuploadadvanced.disabled = false;
    fixture.detectChanges();

    expect(fileuploadadvanced.disabled).toBeFalsy();
  });

  it('@Input() errorMaxFileSize', fakeAsync(() => {
    const markForRefresh = spyOn(fileuploadadvanced, 'markForRefresh').and.callThrough();
    const updatedSpy = spyOn((fileuploadadvanced as any).fileuploadadvanced, 'updated');

    // Check setting error messages - needs to update component.
    fileuploadadvanced.errorMaxFileSize = 'Too many';

    expect(fileuploadadvanced.errorMaxFileSize).toEqual('Too many');

    fixture.whenStable().then(() => {
      tick();
      fixture.detectChanges();
      expect(markForRefresh).toHaveBeenCalled();
      expect(updatedSpy).toHaveBeenCalled();
    });
  }));

  it('@Input() errorMaxFilesInProcess', fakeAsync(() => {
    const markForRefresh = spyOn(fileuploadadvanced, 'markForRefresh').and.callThrough();
    const updatedSpy = spyOn((fileuploadadvanced as any).fileuploadadvanced, 'updated');

    // Check setting error messages - needs to update component.
    fileuploadadvanced.errorMaxFilesInProcess = 'Too many';

    expect(fileuploadadvanced.errorMaxFilesInProcess).toEqual('Too many');

    fixture.whenStable().then(() => {
      tick();
      fixture.detectChanges();
      expect(markForRefresh).toHaveBeenCalled();
      expect(updatedSpy).toHaveBeenCalled();
    });
  }));
});
