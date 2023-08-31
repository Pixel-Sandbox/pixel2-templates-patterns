import Vue from "vue";
import Router from "vue-router";

import Subscription from "./views/all/Subscription";
import CreateSubscription from "./views/all/CreateSubscription";
import ViewSubscription from "./views/all/ViewSubscription";
import ApprovalRequest from "./views/approval-request/ApprovalRequest";
import ViewApprovalRequest from "./views/approval-request/ViewApprovalRequest";
import ProformaInvoice from "./views/proforma-invoice/ProformaInvoice";
import ViewProformaInvoice from "./views/proforma-invoice/ViewProformaInvoice";
import ClientInvoice from "./views/client-invoice/ClientInvoice";
import ViewClientInvoice from "./views/client-invoice/ViewClientInvoice";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Subscription",
      component: Subscription
    },
    {
      path: "/create-performa-invoice",
      name: "CreateSubscription",
      component: CreateSubscription
    },
    {
      path: "/view-subscription",
      name: "ViewSubscription",
      component: ViewSubscription
    },
    {
      path: "/approval-request",
      name: "ApprovalRequest",
      component: ApprovalRequest
    },
    {
      path: "/view-approval-request",
      name: "ViewApprovalRequest",
      component: ViewApprovalRequest
    },
    {
      path: "/proforma-invoice",
      name: "ProformaInvoice",
      component: ProformaInvoice
    },
    {
      path: "/view-proforma-invoice",
      name: "ViewProformaInvoice",
      component: ViewProformaInvoice
    },
    {
      path: "/client-invoice",
      name: "ClientInvoice",
      component: ClientInvoice
    },
    {
      path: "/view-client-invoice",
      name: "ViewClientInvoice",
      component: ViewClientInvoice
    }
  ]
});
