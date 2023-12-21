import { Serializer as ЗаказНапитковSerializer } from
  '../mixins/regenerated/serializers/i-i-s-serezha90-заказ-напитков';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаказНапитковSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
