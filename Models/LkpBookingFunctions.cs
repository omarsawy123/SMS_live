﻿using System;
using System.Collections.Generic;

namespace SMS.Models
{
    public partial class LkpBookingFunctions
    {
        public int BookingFunctionId { get; set; }
        public string NameEn { get; set; }
        public string NameAr { get; set; }
        public string FunctionUrl { get; set; }
        public bool IsDefault { get; set; }
        public int CreatorUserId { get; set; }
        public DateTime CreationDate { get; set; }
        public int ModifiedUserId { get; set; }
        public DateTime LastDateModified { get; set; }
        public bool IsDeleted { get; set; }
        public bool? IsImport { get; set; }
        public int? TransportTypeId { get; set; }

        public virtual LkpTransportTypes TransportType { get; set; }
    }
}
