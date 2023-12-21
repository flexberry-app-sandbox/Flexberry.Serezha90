import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗаказНапитковMixin
} from '../mixins/regenerated/models/i-i-s-serezha90-заказ-напитков';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗаказНапитковMixin, Validations, {
});

defineProjections(Model);

export default Model;
