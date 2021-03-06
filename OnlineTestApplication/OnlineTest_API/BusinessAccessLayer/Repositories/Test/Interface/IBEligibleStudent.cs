﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ViewModels;
using ViewModels.Test;

namespace BusinessAccessLayer
{
    public interface IBEligibleStudent
    {
        Response<List<EligibleStudentViewModel>> GetEligibleStudent(int OnlineTestID);

        string AddEligibleStudent(List<EligibleStudentViewModel> EligibleStudentData);

        Response<List<EligibleStudentViewModel>> GetEligibleStudentByTestID(int OnlineTestID);
        string UpdateEligibleStudentTestStatus(List<EligibleStudentViewModel> EligibleStudentData);

    }
}
