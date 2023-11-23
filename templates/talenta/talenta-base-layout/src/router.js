import Vue from "vue";
import Router from "vue-router";

import Global from "./views/Global";
import Employee from "./views/employee/Employee";
import EmployeeDetail from "./views/employee/EmployeeDetail";
import ReportBuilder from "./views/report-builder/ReportBuilder";
import CreateReportBuilder from "./views/report-builder/CreateReportBuilder";
import EditorReportBuilder from "./views/report-builder/EditorReportBuilder";
import NewActiveEmployee from "./views/new-active-employee/NewActiveEmployee";
import Forms from "./views/forms/Forms";
import TimesOff from "./views/times-off/TimesOff";
import Dashboard from "./views/dashboard/Dashboard";
import NotFound from "./views/NotFound";

Vue.use(Router);

const globalPrototypeRoute = [
  { path: "/", name: "Dashboard", component: Dashboard },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/personal", name: "Personal", component: Global },
  { path: "/manpower-planning", name: "Manpower planning", component: Global },
  { path: "/attendance", name: "Attendance", component: Global },
  { path: "/overtime", name: "Overtime", component: Global },
  { path: "/time-off", name: "Time off", component: Global },
  { path: "/scheduler", name: "Scheduler", component: Global },
  { path: "/schedule", name: "Schedule", component: Global },
  { path: "/timesheet", name: "Timesheet", component: Global },
  { path: "/calendar", name: "Calendar", component: Global },
  { path: "/reimbursement", name: "Reimbursement", component: Global },
  { path: "/loan", name: "Loan", component: Global },
  { path: "/payroll-financing", name: "Payroll financing", component: Global },
  { path: "/payroll", name: "Payroll", component: Global },
  { path: "/assets", name: "Assets", component: Global },
  { path: "/announcement", name: "Announcement", component: Global },
  { path: "/reprimand", name: "Reprimand", component: Global },
  { path: "/task", name: "Task", component: Global },
  { path: "/activity-log", name: "Activity log", component: Global },
  { path: "/notification", name: "Notification", component: Global },
  { path: "/onboarding", name: "Onboarding", component: Global },
  { path: "/offboarding", name: "Offboarding", component: Global },
  { path: "/files", name: "Files", component: Global },
  { path: "/forms", name: "All forms", component: Forms },
  { path: "/my-submission", name: "My submission", component: Global },
  { path: "/document-template", name: "Document template", component: Global },
  { path: "/company-files", name: "Company files", component: Global },
  { path: "/integrations", name: "Integrations", component: Global },
  { path: "/account", name: "Account", component: Global },
  { path: "/company-info", name: "Company info", component: Global },
  { path: "/group-structure", name: "Group structure", component: Global },
  { path: "/branch", name: "Branch", component: Global },
  { path: "/organization", name: "Organization", component: Global },
  { path: "/job-level", name: "Job level", component: Global },
  { path: "/job-position", name: "Job position", component: Global },
  { path: "/grade-class", name: "Grade & class", component: Global },
  {
    path: "/auto-generate-format",
    name: "Auto generate format",
    component: Global
  },
  { path: "/files-category", name: "Files category", component: Global },
  { path: "/custom-fields", name: "Custom fields", component: Global },
  { path: "/npp", name: "NPP", component: Global },
  { path: "/employment-status", name: "Employment status", component: Global },
  { path: "/attendances", name: "Attendances", component: Global },
  { path: "/live-attendance", name: "Live attendance", component: Global },
  { path: "/portal", name: "Portal", component: Global },
  { path: "/times-off", name: "Times off", component: TimesOff },
  { path: "/overtimes", name: "Overtimes", component: Global },
  { path: "/holiday", name: "Holiday", component: Global },

  { path: "/payroll-schedule", name: "Payroll schedule", component: Global },
  {
    path: "/cut-off-tax-setting",
    name: "Cut off & tax setting",
    component: Global
  },
  { path: "/payroll-component", name: "Payroll component", component: Global },
  { path: "/payslip", name: "Payslip", component: Global },
  { path: "/taxslip", name: "Taxslip", component: Global },
  { path: "/pro-rate", name: "Pro-rate", component: Global },
  { path: "/absence", name: "Absence", component: Global },
  { path: "/thr", name: "THR", component: Global },
  {
    path: "/time-off-compensation",
    name: "Time off compensation",
    component: Global
  },
  { path: "/payment-schedule", name: "Payment schedule", component: Global },
  {
    path: "/resign-compensation",
    name: "Resign compensation",
    component: Global
  },
  { path: "/reimbursements", name: "Reimbursements", component: Global },
  { path: "/cash-advance", name: "Cash advance", component: Global },
  { path: "/ess", name: "ESS", component: Global },
  { path: "/users", name: "Users", component: Global },
  { path: "/access-role", name: "Access role", component: Global },
  { path: "/onboardings", name: "Onboardings", component: Global },
  { path: "/offboardings", name: "Offboardings", component: Global },
  { path: "/api-data-masking", name: "API data masking", component: Global }
];

export default new Router({
  routes: [
    ...globalPrototypeRoute,
    {
      path: "/employee-directory",
      name: "Employee directory",
      component: Employee
    },
    {
      path: "/employee-directory/1",
      name: "Employee directory detail",
      component: EmployeeDetail
    },
    {
      path: "/report-builder",
      name: "ReportBuilder",
      component: ReportBuilder
    },
    {
      path: "/report-builder/create",
      name: "CreateReportBuilder",
      component: CreateReportBuilder
    },
    {
      path: "/report-builder/editor",
      name: "EditorReportBuilder",
      component: EditorReportBuilder
    },
    {
      path: "/new-active-employee",
      name: "NewActiveEmployee",
      component: NewActiveEmployee
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    }
  ]
});
