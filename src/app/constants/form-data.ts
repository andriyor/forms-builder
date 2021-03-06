import { Field, FormItem } from '../models/form-item.types';

const form1Fields: Field[] = [
  {
    id: 1,
    value: 'default text',
    control: 'firstName',
    title: 'First Name',
    type: 'short',
    inputType: 'text',
    validation: {
      required: true,
      minLength: 15,
    }
  },
  {
    id: 2,
    control: 'lastName',
    title: 'Last Name',
    type: 'short',
    inputType: 'text',
    validation: {
      required: false,
    }
  },
  {
    id: 21,
    control: 'email',
    title: 'EMail',
    type: 'short',
    inputType: 'email',
    validation: {
      email: true,
      required: true,
    }
  },
  {
    id: 3,
    control: 'age',
    title: 'Age',
    type: 'short',
    inputType: 'number',
    validation: {
      min: 18,
      required: true,
    }
  },
  {
    id: 4,
    control: 'about',
    title: 'About',
    type: 'paragraph',
    validation: {
      maxLength: 140,
      required: true,
    }
  },
  {
    id: 5,
    control: 'date',
    title: 'Date',
    type: 'date',
    validation: {
      required: true,
    }
  },
  {
    id: 6,
    control: 'time',
    title: 'Time',
    type: 'time',
    validation: {
      required: true,
    }
  },
];

const form2Fields: Field[] = [
  {
    id: 7,
    control: 'dropdown',
    title: 'Dropdown',
    type: 'dropdown',
    validation: {
      required: true,
    },
    options: [
      {label: 'Iron Man', value: 'iron_man'},
      {label: 'Captain America', value: 'captain_america'},
      {label: 'Black Widow', value: 'black_widow'},
      {label: 'Hulk', value: 'hulk'},
      {label: 'Captain Marvel', value: 'captain_marvel'},
    ],
  },
  {
    id: 8,
    control: 'multiple-choices',
    title: 'Multiple choices',
    type: 'multiple-choices',
    validation: {
      required: true,
    },
    options: [
      { value: 1, label: 'Option 1' },
      { value: 2, label: 'Option 2' },
      { value: 3, label: 'Option 3' },
      { value: 4, label: 'Option 4' },
    ],
  },
  {
    id: 9,
    control: 'checkboxes',
    title: 'Checkboxes',
    type: 'checkboxes',
    options: [
      { value: true, label: 'Checkbox 1' },
      { value: false, label: 'Checkbox 2' },
      { value: true, label: 'Checkbox 3' },
      { value: false, label: 'Checkbox 4' },
    ],
    validation: {
      required: true,
    }
  }
];

export const forms: FormItem[] = [
  {id: 1, title: 'Form1 title', description: 'Form1 description', fields: form1Fields},
  {id: 2, title: 'Form2 title', description: 'Form2 description', fields: form2Fields},
];
