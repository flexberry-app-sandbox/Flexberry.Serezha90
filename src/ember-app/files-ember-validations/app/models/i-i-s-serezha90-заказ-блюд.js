import {
  defineNamespace,
  defineProjections,
  Model as ЗаказБлюдMixin
} from '../mixins/regenerated/models/i-i-s-serezha90-заказ-блюд';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаказБлюдMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
