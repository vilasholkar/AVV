﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModels.Test
{
   public class StudentOnlineTestViewModel
    {
       public int EligibleStudentID { get; set; }
       public int StudentID { get; set; }
       public int TestStatusID { get; set; } 
        public int OnlineTestID { get; set; }
        public string OnlineTestNo { get; set; }
        public int TestSeriesID { get; set; }
        public string TestSeries { get; set; }
        public int TestTypeID { get; set; }
        public string TestType { get; set; }
        public string TestName { get; set; }
        public string TestDuration { get; set; }
        public int SessionID { get; set; }
        public int StreamID { get; set; }
        public int CourseID { get; set; }
        public int BatchID { get; set; }
        public int SubjectID { get; set; }
        public int SubjectName { get; set; }
        public string Topic { get; set; }
        public string Instructions { get; set; }
        public string TestMarks { get; set; }
        public string PassingPercentage { get; set; }
        public bool IsNegativeMarking { get; set; }
        public string StartDate { get; set; }
        public string StartTime { get; set; }
        public string EndDate { get; set; }
        public string EndTime { get; set; }
        public bool IsVisible { get; set; }
        public bool IsActive { get; set; }
        public int CreatedByUserID { get; set; }
        public DateTime CreatedOnDate { get; set; }
        public string TestStatus { get; set; } 

    }
}
