import { Serializer as ЗаказБлюдSerializer } from
  '../mixins/regenerated/serializers/i-i-s-serezha90-заказ-блюд';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаказБлюдSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
