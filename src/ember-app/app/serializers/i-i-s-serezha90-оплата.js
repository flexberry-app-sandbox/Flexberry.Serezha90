import { Serializer as ОплатаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-serezha90-оплата';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОплатаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
