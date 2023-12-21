import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import КлассНомераEnum from '../enums/i-i-s-serezha90-класс-номера';

export default FlexberryEnum.extend({
  enum: КлассНомераEnum,
  sourceType: 'IIS.Serezha90.КлассНомера'
});
