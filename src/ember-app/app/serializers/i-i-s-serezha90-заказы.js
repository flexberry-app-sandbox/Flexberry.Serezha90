import { Serializer as ЗаказыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-serezha90-заказы';
import РегистрSerializer from './i-i-s-serezha90-регистр';

export default РегистрSerializer.extend(ЗаказыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
