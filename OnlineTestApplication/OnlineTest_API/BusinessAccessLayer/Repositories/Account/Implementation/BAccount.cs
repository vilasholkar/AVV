﻿using DataAccessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ViewModels;
using ViewModels.Account;

namespace BusinessAccessLayer
{
    public class BAccount : IBAccount
    {
        private readonly IDAccount _iDAccount;
        public BAccount(IDAccount iDAccount)
        {
            _iDAccount = iDAccount;
        }
        public Response<Login> GetUserDetails(Login user)
        {
            var loginData = _iDAccount.GetUserDetails(user);
            if (loginData != null)
            {
                return new Response<Login>
                {
                    IsSuccessful = true,
                    Object = loginData,
                    Message = "Success"
                };
            }
            else
            {
                return new Response<Login>
                {
                    IsSuccessful = false,
                    Message = "error",
                    Object = null
                };
            }
        }
    }
}
