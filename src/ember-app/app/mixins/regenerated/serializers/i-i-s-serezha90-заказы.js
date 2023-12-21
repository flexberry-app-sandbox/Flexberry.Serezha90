import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      клиенты: { serialize: 'odata-id', deserialize: 'records' },
      номера: { serialize: 'odata-id', deserialize: 'records' },
      сотрудник: { serialize: 'odata-id', deserialize: 'records' },
      заказБлюд: { serialize: false, deserialize: 'records' },
      заказНапитков: { serialize: false, deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
