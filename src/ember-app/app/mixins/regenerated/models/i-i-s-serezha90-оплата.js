import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  оплачено: DS.attr('boolean'),
  типОплаты: DS.attr('i-i-s-serezha90-тип-оплаты'),
  заказы: DS.belongsTo('i-i-s-serezha90-заказы', { inverse: null, async: false })
});

export let ValidationRules = {
  оплачено: {
    descriptionKey: 'models.i-i-s-serezha90-оплата.validations.оплачено.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  типОплаты: {
    descriptionKey: 'models.i-i-s-serezha90-оплата.validations.типОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заказы: {
    descriptionKey: 'models.i-i-s-serezha90-оплата.validations.заказы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОплатаE', 'i-i-s-serezha90-оплата', {
    оплачено: attr('Оплачено', { index: 0 }),
    типОплаты: attr('Тип оплаты', { index: 1 }),
    заказы: belongsTo('i-i-s-serezha90-заказы', 'Заказы', {
      время: attr('Время', { index: 3, hidden: true }),
      клиенты: belongsTo('i-i-s-serezha90-клиенты', '', {
        фамилия: attr('Фамилия клиента', { index: 4 })
      }, { index: -1, hidden: true }),
      сотрудник: belongsTo('i-i-s-serezha90-сотрудник', '', {
        фамилия: attr('Фамилия сотрудника', { index: 5 })
      }, { index: -1, hidden: true })
    }, { index: 2, displayMemberPath: 'время' })
  });

  modelClass.defineProjection('ОплатаL', 'i-i-s-serezha90-оплата', {
    оплачено: attr('Оплачено', { index: 0 }),
    типОплаты: attr('Тип оплаты', { index: 1 }),
    заказы: belongsTo('i-i-s-serezha90-заказы', 'Время', {
      время: attr('Время', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
