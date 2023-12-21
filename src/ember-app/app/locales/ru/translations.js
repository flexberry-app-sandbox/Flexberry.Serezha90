import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISSerezha90БлюдаLForm from './forms/i-i-s-serezha90-блюда-l';
import IISSerezha90ДолжностиLForm from './forms/i-i-s-serezha90-должности-l';
import IISSerezha90ЗаказыLForm from './forms/i-i-s-serezha90-заказы-l';
import IISSerezha90КлиентыLForm from './forms/i-i-s-serezha90-клиенты-l';
import IISSerezha90НапиткиLForm from './forms/i-i-s-serezha90-напитки-l';
import IISSerezha90НомераLForm from './forms/i-i-s-serezha90-номера-l';
import IISSerezha90ОплатаLForm from './forms/i-i-s-serezha90-оплата-l';
import IISSerezha90ПродуктыLForm from './forms/i-i-s-serezha90-продукты-l';
import IISSerezha90РегистрLForm from './forms/i-i-s-serezha90-регистр-l';
import IISSerezha90СотрудникLForm from './forms/i-i-s-serezha90-сотрудник-l';
import IISSerezha90БлюдаEForm from './forms/i-i-s-serezha90-блюда-e';
import IISSerezha90ДолжностиEForm from './forms/i-i-s-serezha90-должности-e';
import IISSerezha90ЗаказыEForm from './forms/i-i-s-serezha90-заказы-e';
import IISSerezha90КлиентыEForm from './forms/i-i-s-serezha90-клиенты-e';
import IISSerezha90НапиткиEForm from './forms/i-i-s-serezha90-напитки-e';
import IISSerezha90НомераEForm from './forms/i-i-s-serezha90-номера-e';
import IISSerezha90ОплатаEForm from './forms/i-i-s-serezha90-оплата-e';
import IISSerezha90ПродуктыEForm from './forms/i-i-s-serezha90-продукты-e';
import IISSerezha90РегистрEForm from './forms/i-i-s-serezha90-регистр-e';
import IISSerezha90СотрудникEForm from './forms/i-i-s-serezha90-сотрудник-e';
import IISSerezha90БлюдаModel from './models/i-i-s-serezha90-блюда';
import IISSerezha90ДолжностиModel from './models/i-i-s-serezha90-должности';
import IISSerezha90ЗаказБлюдModel from './models/i-i-s-serezha90-заказ-блюд';
import IISSerezha90ЗаказНапитковModel from './models/i-i-s-serezha90-заказ-напитков';
import IISSerezha90ЗаказыModel from './models/i-i-s-serezha90-заказы';
import IISSerezha90КлиентыModel from './models/i-i-s-serezha90-клиенты';
import IISSerezha90НапиткиModel from './models/i-i-s-serezha90-напитки';
import IISSerezha90НомераModel from './models/i-i-s-serezha90-номера';
import IISSerezha90ОплатаModel from './models/i-i-s-serezha90-оплата';
import IISSerezha90ПродуктыModel from './models/i-i-s-serezha90-продукты';
import IISSerezha90РегистрModel from './models/i-i-s-serezha90-регистр';
import IISSerezha90СоставБлюдаModel from './models/i-i-s-serezha90-состав-блюда';
import IISSerezha90СоставНапитковModel from './models/i-i-s-serezha90-состав-напитков';
import IISSerezha90СотрудникModel from './models/i-i-s-serezha90-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-serezha90-блюда': IISSerezha90БлюдаModel,
    'i-i-s-serezha90-должности': IISSerezha90ДолжностиModel,
    'i-i-s-serezha90-заказ-блюд': IISSerezha90ЗаказБлюдModel,
    'i-i-s-serezha90-заказ-напитков': IISSerezha90ЗаказНапитковModel,
    'i-i-s-serezha90-заказы': IISSerezha90ЗаказыModel,
    'i-i-s-serezha90-клиенты': IISSerezha90КлиентыModel,
    'i-i-s-serezha90-напитки': IISSerezha90НапиткиModel,
    'i-i-s-serezha90-номера': IISSerezha90НомераModel,
    'i-i-s-serezha90-оплата': IISSerezha90ОплатаModel,
    'i-i-s-serezha90-продукты': IISSerezha90ПродуктыModel,
    'i-i-s-serezha90-регистр': IISSerezha90РегистрModel,
    'i-i-s-serezha90-состав-блюда': IISSerezha90СоставБлюдаModel,
    'i-i-s-serezha90-состав-напитков': IISSerezha90СоставНапитковModel,
    'i-i-s-serezha90-сотрудник': IISSerezha90СотрудникModel
  },

  'application-name': 'Serezha90',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Serezha90',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Serezha90',
          title: 'Serezha90'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'меню-ресторана': {
          caption: 'Меню ресторана',
          title: 'Меню ресторана',
          'i-i-s-serezha90-напитки-l': {
            caption: 'Напитки',
            title: 'Напитки'
          },
          'i-i-s-serezha90-блюда-l': {
            caption: 'Блюда',
            title: 'Блюда'
          },
          'i-i-s-serezha90-продукты-l': {
            caption: 'Продукты',
            title: 'Продукты'
          }
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-serezha90-сотрудник-l': {
            caption: 'Сотрудник',
            title: 'Сотрудник'
          },
          'i-i-s-serezha90-должности-l': {
            caption: 'Должности',
            title: 'Должности'
          }
        },
        оплата: {
          caption: 'Оплата',
          title: 'Оплата',
          'i-i-s-serezha90-оплата-l': {
            caption: 'Оплата',
            title: 'Оплата'
          },
          'i-i-s-serezha90-регистр-l': {
            caption: 'Регистр',
            title: 'Регистр'
          }
        },
        заказы: {
          caption: 'Заказы',
          title: 'Заказы',
          'i-i-s-serezha90-заказы-l': {
            caption: 'Заказы',
            title: 'Заказы'
          }
        },
        клиенты: {
          caption: 'Клиенты',
          title: 'Клиенты',
          'i-i-s-serezha90-клиенты-l': {
            caption: 'Клиенты',
            title: 'Клиенты'
          }
        },
        номера: {
          caption: 'Номера',
          title: 'Номера',
          'i-i-s-serezha90-номера-l': {
            caption: 'Номера',
            title: 'Номера'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-serezha90-блюда-l': IISSerezha90БлюдаLForm,
    'i-i-s-serezha90-должности-l': IISSerezha90ДолжностиLForm,
    'i-i-s-serezha90-заказы-l': IISSerezha90ЗаказыLForm,
    'i-i-s-serezha90-клиенты-l': IISSerezha90КлиентыLForm,
    'i-i-s-serezha90-напитки-l': IISSerezha90НапиткиLForm,
    'i-i-s-serezha90-номера-l': IISSerezha90НомераLForm,
    'i-i-s-serezha90-оплата-l': IISSerezha90ОплатаLForm,
    'i-i-s-serezha90-продукты-l': IISSerezha90ПродуктыLForm,
    'i-i-s-serezha90-регистр-l': IISSerezha90РегистрLForm,
    'i-i-s-serezha90-сотрудник-l': IISSerezha90СотрудникLForm,
    'i-i-s-serezha90-блюда-e': IISSerezha90БлюдаEForm,
    'i-i-s-serezha90-должности-e': IISSerezha90ДолжностиEForm,
    'i-i-s-serezha90-заказы-e': IISSerezha90ЗаказыEForm,
    'i-i-s-serezha90-клиенты-e': IISSerezha90КлиентыEForm,
    'i-i-s-serezha90-напитки-e': IISSerezha90НапиткиEForm,
    'i-i-s-serezha90-номера-e': IISSerezha90НомераEForm,
    'i-i-s-serezha90-оплата-e': IISSerezha90ОплатаEForm,
    'i-i-s-serezha90-продукты-e': IISSerezha90ПродуктыEForm,
    'i-i-s-serezha90-регистр-e': IISSerezha90РегистрEForm,
    'i-i-s-serezha90-сотрудник-e': IISSerezha90СотрудникEForm
  },

});

export default translations;
