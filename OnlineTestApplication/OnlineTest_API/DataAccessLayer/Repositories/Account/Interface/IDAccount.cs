﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ViewModels.Account;

namespace DataAccessLayer
{
    public interface IDAccount
    {
        Login GetUserDetails(Login user);
        string UpdateDeviceToken(DeviceTokenViewModel objDeviceToken);
        ForgetPassword ForgetPassword(ForgetPassword objForgetPassword);
    }
}
