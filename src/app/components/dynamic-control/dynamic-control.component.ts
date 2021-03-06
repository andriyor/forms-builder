import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AnswerDirective } from '../../answer.directive';
import { ComponentType } from '../../models/component.types';
import { componentsTypes } from '../../constants/components-types';
import { Field } from '../../models/form-item.types';

@Component({
  selector: 'app-dynamic-control',
  templateUrl: './dynamic-control.component.html',
  styleUrls: ['./dynamic-control.component.scss']
})
export class DynamicControlComponent implements OnInit {
  types: ComponentType[] = componentsTypes;
  @Input() field: Field;
  @Input() formGroup: FormGroup;
  @ViewChild(AnswerDirective, {static: true}) adHost: AnswerDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.onValueChange();
  }

  onValueChange(): void {
    const selectedAnswerTypeIndex = this.types.findIndex(type => type.value === this.field.type );
    const answerItem = this.types[selectedAnswerTypeIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(answerItem.viewComponent);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.field = this.field;
    componentRef.instance.formGroup = this.formGroup;
  }
}
