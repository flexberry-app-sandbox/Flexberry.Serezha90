import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.меню-ресторана.caption'),
          title: i18n.t('forms.application.sitemap.меню-ресторана.title'),
          children: [{
            link: 'i-i-s-serezha90-напитки-l',
            caption: i18n.t('forms.application.sitemap.меню-ресторана.i-i-s-serezha90-напитки-l.caption'),
            title: i18n.t('forms.application.sitemap.меню-ресторана.i-i-s-serezha90-напитки-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-serezha90-блюда-l',
            caption: i18n.t('forms.application.sitemap.меню-ресторана.i-i-s-serezha90-блюда-l.caption'),
            title: i18n.t('forms.application.sitemap.меню-ресторана.i-i-s-serezha90-блюда-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-serezha90-продукты-l',
            caption: i18n.t('forms.application.sitemap.меню-ресторана.i-i-s-serezha90-продукты-l.caption'),
            title: i18n.t('forms.application.sitemap.меню-ресторана.i-i-s-serezha90-продукты-l.title'),
            icon: 'address card',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.сотрудники.title'),
          children: [{
            link: 'i-i-s-serezha90-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-serezha90-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-serezha90-сотрудник-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-serezha90-должности-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-serezha90-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-serezha90-должности-l.title'),
            icon: 'archive',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.оплата.caption'),
          title: i18n.t('forms.application.sitemap.оплата.title'),
          children: [{
            link: 'i-i-s-serezha90-оплата-l',
            caption: i18n.t('forms.application.sitemap.оплата.i-i-s-serezha90-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.оплата.i-i-s-serezha90-оплата-l.title'),
            children: null
          }, {
            link: 'i-i-s-serezha90-регистр-l',
            caption: i18n.t('forms.application.sitemap.оплата.i-i-s-serezha90-регистр-l.caption'),
            title: i18n.t('forms.application.sitemap.оплата.i-i-s-serezha90-регистр-l.title'),
            icon: 'folder open',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.заказы.caption'),
          title: i18n.t('forms.application.sitemap.заказы.title'),
          children: [{
            link: 'i-i-s-serezha90-заказы-l',
            caption: i18n.t('forms.application.sitemap.заказы.i-i-s-serezha90-заказы-l.caption'),
            title: i18n.t('forms.application.sitemap.заказы.i-i-s-serezha90-заказы-l.title'),
            icon: 'file',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.клиенты.caption'),
          title: i18n.t('forms.application.sitemap.клиенты.title'),
          children: [{
            link: 'i-i-s-serezha90-клиенты-l',
            caption: i18n.t('forms.application.sitemap.клиенты.i-i-s-serezha90-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.клиенты.i-i-s-serezha90-клиенты-l.title'),
            icon: 'chart line',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.номера.caption'),
          title: i18n.t('forms.application.sitemap.номера.title'),
          children: [{
            link: 'i-i-s-serezha90-номера-l',
            caption: i18n.t('forms.application.sitemap.номера.i-i-s-serezha90-номера-l.caption'),
            title: i18n.t('forms.application.sitemap.номера.i-i-s-serezha90-номера-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})