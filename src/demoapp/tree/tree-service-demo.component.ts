import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  ViewChild
} from '@angular/core';

/* tslint:disable */
import { Observable } from 'rxjs/Observable';
/* tslint:enable */
import { Subject } from 'rxjs/Subject';

import {
  SohoButtonComponent,
  SohoTreeComponent,
  SohoTreeService,
  SohoTreeNode,
  SohoTreeEvent
} from '../';

import { TreeDemoService } from './tree-demo.service';

@Component({
  moduleId: module.id,
  selector: 'tree-service-demo',
  templateUrl: 'tree-service-demo.component.html',
  providers: [{ provide: SohoTreeService, useClass: TreeDemoService }],
  directives: [SohoTreeComponent, SohoButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeServiceDemoComponent {

  private DATA: SohoTreeNode[] = [{
    'id': 'node1',
    'text': 'Data One',
    'open': false,
    'selected': false,
    'href': '/somelink/'
  }, {
      'id': 'node2',
      'text': 'Node Two',
      'open': true,
      'selected': true,
      'focus': true,
      'children': [{
        'id': 'node3',
        'text': 'Node 2.1'
      }, {
          'id': 'node4',
          'text': 'Node 2.2',
          'children': [{
            'id': 'node5',
            'text': 'Node 2.2.1',
            'icon': 'icon-tree-chart',
            'children': [{
              'id': 'node6',
              'text': 'Node 2.2.1.1',
              'icon': 'icon-tree-chart'
            }]
          }]
        }]
    }];

  @ViewChild(SohoTreeComponent) tree: SohoTreeComponent;

  private subject = new Subject<SohoTreeNode[]>();

  private source = this.subject.asObservable();

  // Is this component enabled.
  enabled = true;

  selected: SohoTreeNode;

  constructor(private el: ElementRef) {}

  expandAll() {
    this.tree.expandAll();
  }

  collapseAll() {
    this.tree.collapseAll();
  }

  toggleEnabled(event: any) {
    if (this.enabled) {
      this.tree.disable();
      this.enabled = false;
    } else {
      this.tree.enable();
      this.enabled = true;
    }
  }

  get dataset() {
    return this.source;
  }

  selectRoot() {
    this.tree.setSelectedNode('node1');
  }

  addNode() {
    let tn: SohoTreeNode = { text: 'New Item 1.2', disabled: true };
    this.tree.addNode(tn, this.selected);
  }

  reset() {
    this.subject.next(this.DATA);
  }

  onSelected(treeEvent: SohoTreeEvent) {
    this.selected = treeEvent.data;
    console.log(`Tree Event: ${this.selected}`);
  }
}
