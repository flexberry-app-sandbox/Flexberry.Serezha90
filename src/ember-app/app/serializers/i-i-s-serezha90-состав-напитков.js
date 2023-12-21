import { Serializer as СоставНапитковSerializer } from
  '../mixins/regenerated/serializers/i-i-s-serezha90-состав-напитков';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СоставНапитковSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
