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
    /// Блюда.
    /// </summary>
    [TrimmedStringStorage(false)]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("БлюдаE", new string[] {
            "КодБлюда as \'Код блюда\'",
            "Наименование as \'Наименование\'",
            "Стоимость as \'Стоимость\'"})]
    [AssociatedDetailViewAttribute("БлюдаE", "СоставБлюда", "СоставБлюдаE", true, "", "Состав блюда", true, new string[] {
            ""})]
    [View("БлюдаL", new string[] {
            "КодБлюда as \'Код блюда\'",
            "Наименование as \'Наименование\'",
            "Стоимость as \'Стоимость\'"})]
    public class Блюда : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодБлюда;
        
        private string fНаименование;
        
        private double fСтоимость;
        
        private IIS.Serezha90.DetailArrayOfСоставБлюда fСоставБлюда;
        
        /// <summary>
        /// КодБлюда.
        /// </summary>
        // *** Start programmer edit section *** (Блюда.КодБлюда CustomAttributes)

        // *** End programmer edit section *** (Блюда.КодБлюда CustomAttributes)
        public virtual int КодБлюда
        {
            get
            {
                // *** Start programmer edit section *** (Блюда.КодБлюда Get start)

                // *** End programmer edit section *** (Блюда.КодБлюда Get start)
                int result = this.fКодБлюда;
                // *** Start programmer edit section *** (Блюда.КодБлюда Get end)

                // *** End programmer edit section *** (Блюда.КодБлюда Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Блюда.КодБлюда Set start)

                // *** End programmer edit section *** (Блюда.КодБлюда Set start)
                this.fКодБлюда = value;
                // *** Start programmer edit section *** (Блюда.КодБлюда Set end)

                // *** End programmer edit section *** (Блюда.КодБлюда Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Блюда.Наименование CustomAttributes)

        // *** End programmer edit section *** (Блюда.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Блюда.Наименование Get start)

                // *** End programmer edit section *** (Блюда.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Блюда.Наименование Get end)

                // *** End programmer edit section *** (Блюда.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Блюда.Наименование Set start)

                // *** End programmer edit section *** (Блюда.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Блюда.Наименование Set end)

                // *** End programmer edit section *** (Блюда.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Стоимость.
        /// </summary>
        // *** Start programmer edit section *** (Блюда.Стоимость CustomAttributes)

        // *** End programmer edit section *** (Блюда.Стоимость CustomAttributes)
        public virtual double Стоимость
        {
            get
            {
                // *** Start programmer edit section *** (Блюда.Стоимость Get start)

                // *** End programmer edit section *** (Блюда.Стоимость Get start)
                double result = this.fСтоимость;
                // *** Start programmer edit section *** (Блюда.Стоимость Get end)

                // *** End programmer edit section *** (Блюда.Стоимость Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Блюда.Стоимость Set start)

                // *** End programmer edit section *** (Блюда.Стоимость Set start)
                this.fСтоимость = value;
                // *** Start programmer edit section *** (Блюда.Стоимость Set end)

                // *** End programmer edit section *** (Блюда.Стоимость Set end)
            }
        }
        
        /// <summary>
        /// Блюда.
        /// </summary>
        // *** Start programmer edit section *** (Блюда.СоставБлюда CustomAttributes)

        // *** End programmer edit section *** (Блюда.СоставБлюда CustomAttributes)
        public virtual IIS.Serezha90.DetailArrayOfСоставБлюда СоставБлюда
        {
            get
            {
                // *** Start programmer edit section *** (Блюда.СоставБлюда Get start)

                // *** End programmer edit section *** (Блюда.СоставБлюда Get start)
                if ((this.fСоставБлюда == null))
                {
                    this.fСоставБлюда = new IIS.Serezha90.DetailArrayOfСоставБлюда(this);
                }
                IIS.Serezha90.DetailArrayOfСоставБлюда result = this.fСоставБлюда;
                // *** Start programmer edit section *** (Блюда.СоставБлюда Get end)

                // *** End programmer edit section *** (Блюда.СоставБлюда Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Блюда.СоставБлюда Set start)

                // *** End programmer edit section *** (Блюда.СоставБлюда Set start)
                this.fСоставБлюда = value;
                // *** Start programmer edit section *** (Блюда.СоставБлюда Set end)

                // *** End programmer edit section *** (Блюда.СоставБлюда Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "БлюдаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View БлюдаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("БлюдаE", typeof(IIS.Serezha90.Блюда));
                }
            }
            
            /// <summary>
            /// "БлюдаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View БлюдаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("БлюдаL", typeof(IIS.Serezha90.Блюда));
                }
            }
        }
    }
}
