import React from 'react';
import Charts from '../components/Charts';
import BugsPriorityPie from '../components/Charts/BugsPriorityPie';
import BugsSolvedPie from '../components/Charts/BugsSolvedPie';
import BugsSolvedByAssigneeBar from '../components/Charts/BugsSolvedByAssigneeBar';

const Dashboard = ({ priorityData, solvedCount, solvedBy }) => {
  return (
    <Charts>
      <BugsPriorityPie priorityData={priorityData} />
      <BugsSolvedPie solvedCount={solvedCount} />
      <BugsSolvedByAssigneeBar solvedBy={solvedBy} />
    </Charts>
  );
};

export default Dashboard;
