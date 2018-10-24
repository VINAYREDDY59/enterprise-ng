/// <reference path="soho-menu-button.d.ts" />

import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import {
  Component,
  DebugElement,
  ViewChild
} from '@angular/core';

import { FormsModule } from '@angular/forms';

import {
  SohoMenuButtonComponent,
  SohoMenuButtonModule,
} from './';

import { SohoIconModule } from '../icon';

describe('Soho Menu Button Unit Tests', () => {
  let comp: SohoMenuButtonComponent;
  let fixture: ComponentFixture<SohoMenuButtonComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SohoMenuButtonComponent],
      imports: [SohoIconModule]
    });

    fixture = TestBed.createComponent(SohoMenuButtonComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement;
    el = de.nativeElement;
  });

  it('Check Content', () => {
    expect(el.nodeName).toEqual('DIV');
    expect(el.classList).toContain('btn-menu');
  });

  it('check showArrow', () => {
    const spy = spyOn((comp as any).ref, 'markForCheck');

    comp.showArrow = false;

    fixture.detectChanges();

    expect((comp as any).options.showArrow).toBeFalsy();
    expect((comp as any).menuButton.settings.showArrow).toBeFalsy();
    expect(spy).toHaveBeenCalled();
  });

  it('check showArrow sets option to true', () => {
    const spy = spyOn((comp as any).ref, 'markForCheck');

    comp.showArrow = true;

    fixture.detectChanges();

    expect((comp as any).options.showArrow).toBeTruthy();
    expect((comp as any).menuButton.settings.showArrow).toBeTruthy();
    expect(spy).toHaveBeenCalled();
  });

  it('check autoFocus sets options to false', () => {
    const spy = spyOn((comp as any).ref, 'markForCheck');

    comp.autoFocus = false;

    fixture.detectChanges();

    expect((comp as any).options.autoFocus).toBeFalsy();
    expect((comp as any).menuButton.settings.autoFocus).toBeFalsy();
    expect(spy).toHaveBeenCalled();
  });

  it('check autoFocus sets option to true', () => {
    const spy = spyOn((comp as any).ref, 'markForCheck');

    comp.autoFocus = true;

    fixture.detectChanges();

    expect((comp as any).options.autoFocus).toBeTruthy();
    expect((comp as any).menuButton.settings.autoFocus).toBeTruthy();
    expect(spy).toHaveBeenCalled();
  });

  it('check mouseFocus sets options to false', () => {
    const spy = spyOn((comp as any).ref, 'markForCheck');

    comp.mouseFocus = false;

    fixture.detectChanges();

    expect((comp as any).options.mouseFocus).toBeFalsy();
    expect((comp as any).menuButton.settings.mouseFocus).toBeFalsy();
    expect(spy).toHaveBeenCalled();
  });

  it('check mouseFocus sets option to true', () => {
    const spy = spyOn((comp as any).ref, 'markForCheck');

    comp.mouseFocus = true;

    fixture.detectChanges();

    expect((comp as any).options.mouseFocus).toBeTruthy();
    expect((comp as any).menuButton.settings.mouseFocus).toBeTruthy();
    expect(spy).toHaveBeenCalled();
  });

  it('check returnFocus sets options to false', () => {
    const spy = spyOn((comp as any).ref, 'markForCheck');

    comp.returnFocus = false;

    fixture.detectChanges();

    expect((comp as any).options.returnFocus).toBeFalsy();
    expect((comp as any).menuButton.settings.returnFocus).toBeFalsy();
    expect(spy).toHaveBeenCalled();
  });

  it('check returnFocus sets option to true', () => {
    const spy = spyOn((comp as any).ref, 'markForCheck');

    comp.returnFocus = true;

    fixture.detectChanges();

    expect((comp as any).options.returnFocus).toBeTruthy();
    expect((comp as any).menuButton.settings.returnFocus).toBeTruthy();
    expect(spy).toHaveBeenCalled();
  });

  it('check trigger sets option', () => {
    const spy = spyOn((comp as any).ref, 'markForCheck');

    comp.trigger = 'click';

    fixture.detectChanges();

    expect((comp as any).options.trigger).toEqual('click');
    expect((comp as any).menuButton.settings.trigger).toEqual('click');
    expect(spy).toHaveBeenCalled();
  });

  it('check menu sets options', () => {
    const spy = spyOn((comp as any).ref, 'markForCheck');

    comp.menu = 'mymenu';

    fixture.detectChanges();

    expect((comp as any).options.menu).toEqual('mymenu');
    expect((comp as any).menuButton.settings.menu).toEqual('mymenu');
    expect(spy).toHaveBeenCalled();
  });

  it('check ajaxBeforeOpenFunction sets options', () => {
    const spy = spyOn((comp as any).ref, 'markForCheck');

    comp.ajaxBeforeOpenFunction = () => { };

    fixture.detectChanges();

    expect((comp as any).options.ajaxBeforeOpenFunction).not.toBeNull('mymenu');
    expect((comp as any).menuButton.settings.ajaxBeforeOpenFunction).not.toBeNull('mymenu');
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('check fires `selected`', () => {
    const spy = spyOn((comp as any), 'onSelected');

    // @todo - work out how to fake the call from enterprise.
  });

  it('check open', () => {
    // comp.open(new JQuery.Event());
  });

  it('check close', () => {
    comp.close();
  });

  xit('check beforeopen is called when the menu is opened.', () => {
    const spy = spyOn((comp as any), 'onBeforeOpen');

    // @todo - work out how to fake the call from enterprise.
  });

  xit('check afteropen', () => {
    // @todo - work out how to fake the call from enterprise.
  });

  xit('check close', () => {
    // @todo - work out how to fake the call from enterprise.
  });

  xit('check open', () => {
    // @todo - work out how to fake the call from enterprise.
  });
});

@Component({
  template: `<button soho-menu-button icon="user" menu="action-popupmenu"></button>
<ul soho-popupmenu id="action-popupmenu">
  <li><a soho-popupmenu-label>Admin</a></li>
  <li soho-popupmenu-separator></li>
  <li soho-popupmenu-item><a id="signout">Sign out</a></li>
</ul>`
})
export class TestSohoMenuButtonComponent {
  @ViewChild(SohoMenuButtonComponent) menuButton;
}

describe('Soho Menu Button Render', () => {
  let menuButton: SohoMenuButtonComponent;
  let component: TestSohoMenuButtonComponent;
  let fixture: ComponentFixture<TestSohoMenuButtonComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestSohoMenuButtonComponent],
      imports: [FormsModule, SohoMenuButtonModule, SohoIconModule]
    });

    fixture = TestBed.createComponent(TestSohoMenuButtonComponent);
    component = fixture.componentInstance;
    menuButton = component.menuButton;

    de = fixture.debugElement;
    el = de.query(By.css('a[soho-popupmenu-label]')).nativeElement;

    fixture.detectChanges();
  });

  it('Check Item HTML content', () => {
    fixture.detectChanges();

    expect(el.nodeName).toEqual('A');
  });

});