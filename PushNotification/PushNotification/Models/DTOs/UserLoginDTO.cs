﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PushNotification.Models.DTOs
{
    public class UserLoginDTO
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public bool RememberMe { get; set; }
    }
}