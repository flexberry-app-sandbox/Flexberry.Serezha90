import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-serezha90-продукты', 'Unit | Model | i-i-s-serezha90-продукты', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
