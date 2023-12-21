import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as ЗаказыMixin
} from '../mixins/regenerated/models/i-i-s-serezha90-заказы';

import РегистрModel from './i-i-s-serezha90-регистр';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-serezha90-регистр';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = РегистрModel.extend(ЗаказыMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
