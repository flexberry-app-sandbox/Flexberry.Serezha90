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
    /// Продукты.
    /// </summary>
    [TrimmedStringStorage(false)]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПродуктыE", new string[] {
            "КодПродукта as \'Код продукта\'",
            "Наименование as \'Наименование\'",
            "Производитель as \'Производитель\'"})]
    [View("ПродуктыL", new string[] {
            "КодПродукта as \'Код продукта\'",
            "Наименование as \'Наименование\'",
            "Производитель as \'Производитель\'"})]
    public class Продукты : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодПродукта;
        
        private string fНаименование;
        
        private string fПроизводитель;
        
        /// <summary>
        /// КодПродукта.
        /// </summary>
        // *** Start programmer edit section *** (Продукты.КодПродукта CustomAttributes)

        // *** End programmer edit section *** (Продукты.КодПродукта CustomAttributes)
        public virtual int КодПродукта
        {
            get
            {
                // *** Start programmer edit section *** (Продукты.КодПродукта Get start)

                // *** End programmer edit section *** (Продукты.КодПродукта Get start)
                int result = this.fКодПродукта;
                // *** Start programmer edit section *** (Продукты.КодПродукта Get end)

                // *** End programmer edit section *** (Продукты.КодПродукта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Продукты.КодПродукта Set start)

                // *** End programmer edit section *** (Продукты.КодПродукта Set start)
                this.fКодПродукта = value;
                // *** Start programmer edit section *** (Продукты.КодПродукта Set end)

                // *** End programmer edit section *** (Продукты.КодПродукта Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Продукты.Наименование CustomAttributes)

        // *** End programmer edit section *** (Продукты.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Продукты.Наименование Get start)

                // *** End programmer edit section *** (Продукты.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Продукты.Наименование Get end)

                // *** End programmer edit section *** (Продукты.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Продукты.Наименование Set start)

                // *** End programmer edit section *** (Продукты.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Продукты.Наименование Set end)

                // *** End programmer edit section *** (Продукты.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Производитель.
        /// </summary>
        // *** Start programmer edit section *** (Продукты.Производитель CustomAttributes)

        // *** End programmer edit section *** (Продукты.Производитель CustomAttributes)
        [StrLen(255)]
        public virtual string Производитель
        {
            get
            {
                // *** Start programmer edit section *** (Продукты.Производитель Get start)

                // *** End programmer edit section *** (Продукты.Производитель Get start)
                string result = this.fПроизводитель;
                // *** Start programmer edit section *** (Продукты.Производитель Get end)

                // *** End programmer edit section *** (Продукты.Производитель Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Продукты.Производитель Set start)

                // *** End programmer edit section *** (Продукты.Производитель Set start)
                this.fПроизводитель = value;
                // *** Start programmer edit section *** (Продукты.Производитель Set end)

                // *** End programmer edit section *** (Продукты.Производитель Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПродуктыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПродуктыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПродуктыE", typeof(IIS.Serezha90.Продукты));
                }
            }
            
            /// <summary>
            /// "ПродуктыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПродуктыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПродуктыL", typeof(IIS.Serezha90.Продукты));
                }
            }
        }
    }
}
