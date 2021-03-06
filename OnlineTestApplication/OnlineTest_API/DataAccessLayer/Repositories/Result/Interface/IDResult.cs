﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ViewModels.Result;

namespace DataAccessLayer
{
   public interface IDResult
    {
       string ResultAnalysis(int TestID);

       ResultAnalysisViewModel GetResultAnalysis(int StudentID, int TestID);
       PaperAnalysisViewModel GetPaperAnalysis(int TestID);
       StudentAttemptViewModel GetStudentAttempt(int StudentID, int TestID);
       List<OnlineTestResultViewModel> GetOnlineTestResultByID(int StudentID, int TestID);
       List<Topper_AverageViewModel> GetTopper_Average(int TestID);
       List<StudentResponseViewModel> GetStudentResponse(int StudentID, int TestID);
   }
}
