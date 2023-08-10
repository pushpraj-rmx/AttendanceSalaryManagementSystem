import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdownContent = `
# Attendance and Salary Management System

The **Attendance and Salary Management System** is a web application designed to help companies and organizations manage employee attendance records and calculate salary information.

## Project Overview

The project aims to provide a comprehensive solution for tracking employee attendance, generating salary slips, and managing other HR-related tasks. The system will include various components that work together to create a seamless user experience.

## Key Features

- **Login**: Allows employees and administrators to log in using their credentials.

- **Dashboard**: Provides an overview of attendance and salary-related information.

- **Attendance Tracking**: Enables employees to record their daily attendance, including check-in and check-out times.

- **Salary Calculation**: Automatically calculates employee salaries based on attendance and predefined salary components.

- **Employee Directory**: Displays a list of all employees along with their basic details.

- **Employee Details**: Shows detailed information about a specific employee, including attendance history and salary details.

- **Leave Management**: Allows employees to apply for leave and tracks their leave balances.

- **Reports Generation**: Generates reports related to attendance, salary, and other relevant metrics.

- **Notifications**: Sends notifications to employees about their attendance, salary, and other important updates.

## Components

The project is organized into various components, each serving a specific purpose:

- **Login**: Provides a login form for users to access the system.

- **Dashboard**: Displays relevant information at a glance, such as recent attendance data and salary summaries.

- **Attendance Tracking**: Allows employees to record their daily attendance through a user-friendly interface.

- **Salary Details**: Displays a breakdown of an employee's salary components, including earnings and deductions.

- **Employee Directory**: Lists all employees and provides quick access to their profiles.

- **Employee Details**: Displays comprehensive information about a specific employee, including attendance history and salary details.

- **Leave Management**: Enables employees to request leave and tracks their leave balances.

- **Reports Generation**: Provides options to generate reports related to attendance and salary data.

- **Notifications**: Sends notifications to employees regarding attendance updates, salary slips, and other important announcements.

## Technologies Used

- **Frontend**: React.js for building the user interface and handling frontend logic.

- **Backend**: Node.js with Express.js for creating API endpoints and handling server-side logic.

- **Database**: MongoDB for storing employee data, attendance records, and salary information.

- **Styling**: CSS for styling the components and creating a cohesive design.

## Next Steps

The project is currently in progress, with basic components such as Login, Dashboard, Attendance Tracking, Salary Details, Employee Directory, and Employee Details already implemented. The next steps involve integrating backend functionality, connecting to the MongoDB database, implementing authentication, and deploying the application.
`;

const ProjectInfo = () => {
  return (
    <div className="project-info">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default ProjectInfo;
