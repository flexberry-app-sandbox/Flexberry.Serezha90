import {
  defineNamespace,
  defineProjections,
  Model as ОплатаMixin
} from '../mixins/regenerated/models/i-i-s-serezha90-оплата';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОплатаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
