import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипПолученияEnum from '../enums/i-i-s-serezha90-тип-получения';

export default FlexberryEnum.extend({
  enum: ТипПолученияEnum,
  sourceType: 'IIS.Serezha90.ТипПолучения'
});
