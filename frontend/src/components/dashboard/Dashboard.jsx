import React from "react";
import Layout from "./Layout";
import DashboardIndex from "./DashboardIndex";
import { Helmet } from "react-helmet";
const Dashboard = () => {
  return (
    <Layout>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="text-2xl font-semibold mb-2">Admin Dashboard</div>
      <DashboardIndex />
    </Layout>
  );
};

export default Dashboard;
