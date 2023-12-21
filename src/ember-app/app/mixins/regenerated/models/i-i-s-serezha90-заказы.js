import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date'),
  кодЗаказа: DS.attr('number'),
  колПерсон: DS.attr('number'),
  комментарий: DS.attr('string'),
  сумма: DS.attr('decimal'),
  типВручения: DS.attr('i-i-s-serezha90-тип-получения'),
  типОплаты: DS.attr('i-i-s-serezha90-тип-оплаты'),
  клиенты: DS.belongsTo('i-i-s-serezha90-клиенты', { inverse: null, async: false }),
  номера: DS.belongsTo('i-i-s-serezha90-номера', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-serezha90-сотрудник', { inverse: null, async: false }),
  заказБлюд: DS.hasMany('i-i-s-serezha90-заказ-блюд', { inverse: 'заказы', async: false }),
  заказНапитков: DS.hasMany('i-i-s-serezha90-заказ-напитков', { inverse: 'заказы', async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-serezha90-заказы.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-serezha90-заказы.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗаказа: {
    descriptionKey: 'models.i-i-s-serezha90-заказы.validations.кодЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  колПерсон: {
    descriptionKey: 'models.i-i-s-serezha90-заказы.validations.колПерсон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комментарий: {
    descriptionKey: 'models.i-i-s-serezha90-заказы.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-serezha90-заказы.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  типВручения: {
    descriptionKey: 'models.i-i-s-serezha90-заказы.validations.типВручения.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  типОплаты: {
    descriptionKey: 'models.i-i-s-serezha90-заказы.validations.типОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-serezha90-заказы.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  номера: {
    descriptionKey: 'models.i-i-s-serezha90-заказы.validations.номера.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-serezha90-заказы.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказБлюд: {
    descriptionKey: 'models.i-i-s-serezha90-заказы.validations.заказБлюд.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  заказНапитков: {
    descriptionKey: 'models.i-i-s-serezha90-заказы.validations.заказНапитков.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-serezha90-регистр'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказыE', 'i-i-s-serezha90-заказы', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    время: attr('Время', { index: 2 }),
    типОплаты: attr('Тип оплаты', { index: 3 }),
    типВручения: attr('Тип вручения', { index: 4 }),
    колПерсон: attr('Кол персон', { index: 5 }),
    комментарий: attr('Комментарий', { index: 6 }),
    сумма: attr('Сумма', { index: 7 }),
    кодЗазака: attr('Код зазака', { index: 8 }),
    номера: belongsTo('i-i-s-serezha90-номера', 'Номера', {
      номерКомнаты: attr('Номер комнаты', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'номерКомнаты' }),
    сотрудник: belongsTo('i-i-s-serezha90-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 12, hidden: true })
    }, { index: 11, displayMemberPath: 'фамилия' }),
    клиенты: belongsTo('i-i-s-serezha90-клиенты', 'Клиенты', {
      фамилия: attr('Фамилия', { index: 14, hidden: true })
    }, { index: 13, displayMemberPath: 'фамилия' }),
    заказы: belongsTo('i-i-s-serezha90-заказы', 'Заказы', {
      время: attr('Время', { index: 16, hidden: true })
    }, { index: 15, displayMemberPath: 'время' }),
    заказБлюд: hasMany('i-i-s-serezha90-заказ-блюд', 'Заказ блюд', {
      комментарий: attr('Комментарий', { index: 0 }),
      блюда: belongsTo('i-i-s-serezha90-блюда', 'Блюда', {
        наименование: attr('Наименование', { index: 2, hidden: true }),
        стоимость: attr('', { index: 3 })
      }, { index: 1, displayMemberPath: 'наименование' })
    }),
    заказНапитков: hasMany('i-i-s-serezha90-заказ-напитков', 'Заказ напитков', {
      комментарий: attr('Комментарий', { index: 0 }),
      напитки: belongsTo('i-i-s-serezha90-напитки', 'Напитки', {
        наименование: attr('Наименование', { index: 2, hidden: true }),
        стоимость: attr('', { index: 3 })
      }, { index: 1, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ЗаказыL', 'i-i-s-serezha90-заказы', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    время: attr('Время', { index: 2 }),
    типОплаты: attr('Тип оплаты', { index: 3 }),
    типВручения: attr('Тип вручения', { index: 4 }),
    колПерсон: attr('Кол персон', { index: 5 }),
    комментарий: attr('Комментарий', { index: 6 }),
    сумма: attr('Сумма', { index: 7 }),
    кодЗазака: attr('Код зазака', { index: 8 }),
    номера: belongsTo('i-i-s-serezha90-номера', 'Номер комнаты', {
      номерКомнаты: attr('Номер комнаты', { index: 9 })
    }, { index: -1, hidden: true }),
    сотрудник: belongsTo('i-i-s-serezha90-сотрудник', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 10 })
    }, { index: -1, hidden: true }),
    клиенты: belongsTo('i-i-s-serezha90-клиенты', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 11 })
    }, { index: -1, hidden: true }),
    заказы: belongsTo('i-i-s-serezha90-заказы', 'Время', {
      время: attr('Время', { index: 12 })
    }, { index: -1, hidden: true })
  });
};
