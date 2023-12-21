import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  кодЗазака: DS.attr('number'),
  сумма: DS.attr('decimal'),
  заказы: DS.belongsTo('i-i-s-serezha90-заказы', { inverse: null, async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-serezha90-регистр.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-serezha90-регистр.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗазака: {
    descriptionKey: 'models.i-i-s-serezha90-регистр.validations.кодЗазака.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-serezha90-регистр.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  заказы: {
    descriptionKey: 'models.i-i-s-serezha90-регистр.validations.заказы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрE', 'i-i-s-serezha90-регистр', {
    дата: attr('Дата', { index: 0 }),
    время: attr('Время', { index: 1 }),
    сумма: attr('Сумма', { index: 2 }),
    кодЗазака: attr('Код зазака', { index: 3 }),
    заказы: belongsTo('i-i-s-serezha90-заказы', 'Заказы', {
      время: attr('Время', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'время' })
  });

  modelClass.defineProjection('РегистрL', 'i-i-s-serezha90-регистр', {
    дата: attr('Дата', { index: 0 }),
    время: attr('Время', { index: 1 }),
    сумма: attr('Сумма', { index: 2 }),
    кодЗазака: attr('Код зазака', { index: 3 }),
    заказы: belongsTo('i-i-s-serezha90-заказы', 'Время', {
      время: attr('Время', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
