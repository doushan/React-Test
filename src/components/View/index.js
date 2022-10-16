import React from "react";
import { useHistory } from "react-router";
import { format } from "date-fns";
import { Box, Button, Flex, Header } from "../styled";
import EmployeesTable from "./EmployeeList";

const View = () => {
  const history = useHistory();

  return (
    <>
      <Header data-cy="header">View Employees</Header>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginTop="lg"
      >
        <EmployeesTable />

        <span> Records for today {format(new Date(), "eeee dd MMM")} </span>

        <Box marginTop="lg">
          <Button data-cy="all-employee" marginRight="10px">
            View all employees
          </Button>
          <Button data-cy="download-csv">Download CSV (all employees)</Button>
        </Box>

        <Box marginTop="lg">
          <Button data-cy="backButton" onClick={() => history.goBack()}>
            Back
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default View;
