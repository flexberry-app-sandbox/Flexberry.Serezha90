﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Serezha90
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Оплата.
    /// </summary>
    // *** Start programmer edit section *** (Оплата CustomAttributes)

    // *** End programmer edit section *** (Оплата CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОплатаE", new string[] {
            "Оплачено as \'Оплачено\'",
            "ТипОплаты as \'Тип оплаты\'",
            "Заказы as \'Заказы\'",
            "Заказы.Время as \'Время\'",
            "Заказы.Клиенты.Фамилия as \'Фамилия клиента\'",
            "Заказы.Сотрудник.Фамилия as \'Фамилия сотрудника\'"}, Hidden=new string[] {
            "Заказы.Время"})]
    [MasterViewDefineAttribute("ОплатаE", "Заказы", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Время")]
    [View("ОплатаL", new string[] {
            "Оплачено as \'Оплачено\'",
            "ТипОплаты as \'Тип оплаты\'",
            "Заказы.Время as \'Время\'"})]
    public class Оплата : ICSSoft.STORMNET.DataObject
    {
        
        private bool fОплачено;
        
        private IIS.Serezha90.ТипОплаты fТипОплаты;
        
        private IIS.Serezha90.Заказы fЗаказы;
        
        // *** Start programmer edit section *** (Оплата CustomMembers)

        // *** End programmer edit section *** (Оплата CustomMembers)

        
        /// <summary>
        /// Оплачено.
        /// </summary>
        // *** Start programmer edit section *** (Оплата.Оплачено CustomAttributes)

        // *** End programmer edit section *** (Оплата.Оплачено CustomAttributes)
        public virtual bool Оплачено
        {
            get
            {
                // *** Start programmer edit section *** (Оплата.Оплачено Get start)

                // *** End programmer edit section *** (Оплата.Оплачено Get start)
                bool result = this.fОплачено;
                // *** Start programmer edit section *** (Оплата.Оплачено Get end)

                // *** End programmer edit section *** (Оплата.Оплачено Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оплата.Оплачено Set start)

                // *** End programmer edit section *** (Оплата.Оплачено Set start)
                this.fОплачено = value;
                // *** Start programmer edit section *** (Оплата.Оплачено Set end)

                // *** End programmer edit section *** (Оплата.Оплачено Set end)
            }
        }
        
        /// <summary>
        /// ТипОплаты.
        /// </summary>
        // *** Start programmer edit section *** (Оплата.ТипОплаты CustomAttributes)

        // *** End programmer edit section *** (Оплата.ТипОплаты CustomAttributes)
        public virtual IIS.Serezha90.ТипОплаты ТипОплаты
        {
            get
            {
                // *** Start programmer edit section *** (Оплата.ТипОплаты Get start)

                // *** End programmer edit section *** (Оплата.ТипОплаты Get start)
                IIS.Serezha90.ТипОплаты result = this.fТипОплаты;
                // *** Start programmer edit section *** (Оплата.ТипОплаты Get end)

                // *** End programmer edit section *** (Оплата.ТипОплаты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оплата.ТипОплаты Set start)

                // *** End programmer edit section *** (Оплата.ТипОплаты Set start)
                this.fТипОплаты = value;
                // *** Start programmer edit section *** (Оплата.ТипОплаты Set end)

                // *** End programmer edit section *** (Оплата.ТипОплаты Set end)
            }
        }
        
        /// <summary>
        /// Оплата.
        /// </summary>
        // *** Start programmer edit section *** (Оплата.Заказы CustomAttributes)

        // *** End programmer edit section *** (Оплата.Заказы CustomAttributes)
        [PropertyStorage(new string[] {
                "Заказы"})]
        [NotNull()]
        public virtual IIS.Serezha90.Заказы Заказы
        {
            get
            {
                // *** Start programmer edit section *** (Оплата.Заказы Get start)

                // *** End programmer edit section *** (Оплата.Заказы Get start)
                IIS.Serezha90.Заказы result = this.fЗаказы;
                // *** Start programmer edit section *** (Оплата.Заказы Get end)

                // *** End programmer edit section *** (Оплата.Заказы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оплата.Заказы Set start)

                // *** End programmer edit section *** (Оплата.Заказы Set start)
                this.fЗаказы = value;
                // *** Start programmer edit section *** (Оплата.Заказы Set end)

                // *** End programmer edit section *** (Оплата.Заказы Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОплатаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОплатаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОплатаE", typeof(IIS.Serezha90.Оплата));
                }
            }
            
            /// <summary>
            /// "ОплатаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОплатаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОплатаL", typeof(IIS.Serezha90.Оплата));
                }
            }
        }
    }
}
