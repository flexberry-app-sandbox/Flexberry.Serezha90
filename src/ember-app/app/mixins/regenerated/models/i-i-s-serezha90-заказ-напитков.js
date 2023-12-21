import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  комментарий: DS.attr('string'),
  напитки: DS.belongsTo('i-i-s-serezha90-напитки', { inverse: null, async: false }),
  заказы: DS.belongsTo('i-i-s-serezha90-заказы', { inverse: 'заказНапитков', async: false })
});

export let ValidationRules = {
  комментарий: {
    descriptionKey: 'models.i-i-s-serezha90-заказ-напитков.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  напитки: {
    descriptionKey: 'models.i-i-s-serezha90-заказ-напитков.validations.напитки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказы: {
    descriptionKey: 'models.i-i-s-serezha90-заказ-напитков.validations.заказы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказНапитковE', 'i-i-s-serezha90-заказ-напитков', {
    комментарий: attr('Комментарий', { index: 0 }),
    напитки: belongsTo('i-i-s-serezha90-напитки', 'Напитки', {
      наименование: attr('Наименование', { index: 2, hidden: true }),
      стоимость: attr('', { index: 3 })
    }, { index: 1, displayMemberPath: 'наименование' })
  });
};
