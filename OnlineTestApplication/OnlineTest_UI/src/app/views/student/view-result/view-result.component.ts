import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { OT_Result } from '../../../models/result';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { HelperService } from '../../../services/helper.service'
import { APIUrl } from "../../../shared/API-end-points";
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.scss']
})
export class ViewResultComponent implements OnInit {
  SID: number;
  TestTypeName = "NEET";
  IsEmpty: boolean = false;
  PaginationConfig: any;
  @Input() StudentID: any;
  //Element For Material
  displayedColumns: string[] = ['Rank','TestName', 'TotalAttempt', 'TotalCorrect', 'TotalWrong', 'TotalMarks', 'TotalMarksObtained', 'Percentage',
    'Physics_Right', 'Physics_Wrong', 'Chemistry_Right', 'Chemistry_Wrong', 'Biology_Right', 'Biology_Wrong', 'button', 'button1'];
  dataSource: any = [];
  selection = new SelectionModel<OT_Result>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private helperSvc: HelperService,
    private router: Router
  ) { }

  ngOnInit() {
    this.PaginationConfig = this.helperSvc.PaginationConfig;
    let sessionStudentID = sessionStorage.getItem("StudentID");
    if (!!this.StudentID) {
      this.GetOnlineTestResultByStudentID(this.StudentID);
      //this.GetOnlineTestResultByStudentID(5110);
    }
    else if (!!sessionStudentID) {
      this.GetOnlineTestResultByStudentID(sessionStudentID);
      //this.GetOnlineTestResultByStudentID(5110);
    }
  }
  NavigateToResponse(StudentID, TestID) {
    ///result/result-analysis/
    this.router.navigate(['/result/student-response/' + StudentID + '/' + TestID], { queryParams: { StudentID: StudentID, TestID: TestID }, skipLocationChange: true });
  }
  NavigateToAnalysis(StudentID, TestID) {
    ///result/result-analysis/
    debugger
    this.router.navigate(['/result/result-analysis/' + StudentID + '/' + TestID], { queryParams: { StudentID: StudentID, TestID: TestID }, skipLocationChange: true });

  }
  ngOnChanges() {
    if (!!this.StudentID) {
      this.GetOnlineTestResultByStudentID(this.StudentID);
    }
  }
  GetOnlineTestResultByStudentID(StudentID: any) {
    debugger;
    this.SID = StudentID;
    this.helperSvc.getService(APIUrl.GetOnlineTestResultByID + "?StudentID=" + StudentID + "&TestID=" + 0)
      .subscribe(res => {
        if (res.Message === 'Success') {
          if (res.Object.length > 0) {
            if (this.TestTypeName === 'NEET') {
              this.displayedColumns = ['Rank','TestName', 'TotalAttempt', 'TotalCorrect', 'TotalWrong', 'TotalMarks', 'TotalMarksObtained', 'Percentage',
                'Physics_Right', 'Physics_Wrong', 'Chemistry_Right', 'Chemistry_Wrong', 'Biology_Right', 'Biology_Wrong', 'button', 'button1'];
              res.Object = res.Object.filter(f => f.TestTypeName == this.TestTypeName)
            }
            else if (this.TestTypeName === 'AIIMS') {
              this.displayedColumns = ['Rank','TestName', 'TotalAttempt', 'TotalCorrect', 'TotalWrong', 'TotalMarks', 'TotalMarksObtained', 'Percentage',
                'Physics_Right', 'Physics_Wrong', 'Chemistry_Right', 'Chemistry_Wrong', 'Biology_Right', 'Biology_Wrong', 'Aptitude_Right', 'Aptitude_Wrong', 'button', 'button1'];
              res.Object = res.Object.filter(f => f.TestTypeName == this.TestTypeName)
            }
            this.dataSource = new MatTableDataSource(res.Object as OT_Result[]);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
          !this.dataSource.filteredData.length ? this.IsEmpty = true : this.IsEmpty = false;
        }
      }, error => {
        alert('error');
        this.helperSvc.errorHandler(error.error);
        console.log(error);
      });
    // this.resultAnalysisService.GetOnlineTestResultByStudentID(parseInt(StudentID)).subscribe(res => {
    //   this.dataSource = new MatTableDataSource(res);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // })

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    !this.dataSource.filteredData.length ? this.IsEmpty = true : this.IsEmpty = false;
  }
}