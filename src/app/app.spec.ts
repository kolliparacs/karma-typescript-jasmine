/* tslint:disable:no-unused-variable */
require('core-js/es7/reflect');
import 'zone.js/dist/zone.js';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
describe('AppComponent', () => {
  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ]
    }).compileComponents().then(done);
  });
  it('should be truthy',async(()=> {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should be title',()=> {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  });
  it('should be title',()=> {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  });

});
