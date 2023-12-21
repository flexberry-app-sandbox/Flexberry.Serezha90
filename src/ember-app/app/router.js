import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-serezha90-блюда-l');
  this.route('i-i-s-serezha90-блюда-e',
  { path: 'i-i-s-serezha90-блюда-e/:id' });
  this.route('i-i-s-serezha90-блюда-e.new',
  { path: 'i-i-s-serezha90-блюда-e/new' });
  this.route('i-i-s-serezha90-должности-l');
  this.route('i-i-s-serezha90-должности-e',
  { path: 'i-i-s-serezha90-должности-e/:id' });
  this.route('i-i-s-serezha90-должности-e.new',
  { path: 'i-i-s-serezha90-должности-e/new' });
  this.route('i-i-s-serezha90-заказы-l');
  this.route('i-i-s-serezha90-заказы-e',
  { path: 'i-i-s-serezha90-заказы-e/:id' });
  this.route('i-i-s-serezha90-заказы-e.new',
  { path: 'i-i-s-serezha90-заказы-e/new' });
  this.route('i-i-s-serezha90-клиенты-l');
  this.route('i-i-s-serezha90-клиенты-e',
  { path: 'i-i-s-serezha90-клиенты-e/:id' });
  this.route('i-i-s-serezha90-клиенты-e.new',
  { path: 'i-i-s-serezha90-клиенты-e/new' });
  this.route('i-i-s-serezha90-напитки-l');
  this.route('i-i-s-serezha90-напитки-e',
  { path: 'i-i-s-serezha90-напитки-e/:id' });
  this.route('i-i-s-serezha90-напитки-e.new',
  { path: 'i-i-s-serezha90-напитки-e/new' });
  this.route('i-i-s-serezha90-номера-l');
  this.route('i-i-s-serezha90-номера-e',
  { path: 'i-i-s-serezha90-номера-e/:id' });
  this.route('i-i-s-serezha90-номера-e.new',
  { path: 'i-i-s-serezha90-номера-e/new' });
  this.route('i-i-s-serezha90-оплата-l');
  this.route('i-i-s-serezha90-оплата-e',
  { path: 'i-i-s-serezha90-оплата-e/:id' });
  this.route('i-i-s-serezha90-оплата-e.new',
  { path: 'i-i-s-serezha90-оплата-e/new' });
  this.route('i-i-s-serezha90-продукты-l');
  this.route('i-i-s-serezha90-продукты-e',
  { path: 'i-i-s-serezha90-продукты-e/:id' });
  this.route('i-i-s-serezha90-продукты-e.new',
  { path: 'i-i-s-serezha90-продукты-e/new' });
  this.route('i-i-s-serezha90-регистр-l');
  this.route('i-i-s-serezha90-регистр-e',
  { path: 'i-i-s-serezha90-регистр-e/:id' });
  this.route('i-i-s-serezha90-регистр-e.new',
  { path: 'i-i-s-serezha90-регистр-e/new' });
  this.route('i-i-s-serezha90-сотрудник-l');
  this.route('i-i-s-serezha90-сотрудник-e',
  { path: 'i-i-s-serezha90-сотрудник-e/:id' });
  this.route('i-i-s-serezha90-сотрудник-e.new',
  { path: 'i-i-s-serezha90-сотрудник-e/new' });
});

export default Router;
