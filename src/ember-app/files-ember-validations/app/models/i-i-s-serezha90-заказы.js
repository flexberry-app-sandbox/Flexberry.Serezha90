import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as ЗаказыMixin
} from '../mixins/regenerated/models/i-i-s-serezha90-заказы';

import РегистрModel from './i-i-s-serezha90-регистр';

let Model = РегистрModel.extend(ЗаказыMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
