import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  ViewChild
} from '@angular/core';

import { TreeDemoService } from './tree-demo.service';
import { SohoButtonComponent } from '../../components/button';

import {
  SohoTreeComponent,
  SohoTreeService,
  SohoTreeNode,
  SohoTreeEvent
} from '../../components/tree';

@Component({
  selector: 'tree-service-demo',
  templateUrl: 'tree-service.demo.html',
  providers: [{ provide: SohoTreeService, useClass: TreeDemoService }],
  directives: [SohoTreeComponent, SohoButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeServiceDemoComponent {
  @ViewChild(SohoTreeComponent) tree: SohoTreeComponent;

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

  selectRoot() {
    this.tree.setSelectedNode('node1');
  }

  addNode() {
    let tn: SohoTreeNode = { text: 'New Item 1.2', disabled: true };
    this.tree.addNode(tn, this.selected);
  }

  reset() {
    this.tree.reset();
  }

  onSelected(treeEvent: SohoTreeEvent) {
    this.selected = treeEvent.data;
    console.log('Tree Event: ${this.selected}');
  }
}