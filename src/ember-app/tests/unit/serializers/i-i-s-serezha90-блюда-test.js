import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-serezha90-блюда', 'Unit | Serializer | i-i-s-serezha90-блюда', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-serezha90-блюда',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-serezha90-единицы',
    'transform:i-i-s-serezha90-класс-номера',
    'transform:i-i-s-serezha90-тип-оплаты',
    'transform:i-i-s-serezha90-тип-получения',

    'model:i-i-s-serezha90-блюда',
    'model:i-i-s-serezha90-должности',
    'model:i-i-s-serezha90-заказ-блюд',
    'model:i-i-s-serezha90-заказ-напитков',
    'model:i-i-s-serezha90-заказы',
    'model:i-i-s-serezha90-клиенты',
    'model:i-i-s-serezha90-напитки',
    'model:i-i-s-serezha90-номера',
    'model:i-i-s-serezha90-оплата',
    'model:i-i-s-serezha90-продукты',
    'model:i-i-s-serezha90-регистр',
    'model:i-i-s-serezha90-состав-блюда',
    'model:i-i-s-serezha90-состав-напитков',
    'model:i-i-s-serezha90-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
