import React from "react";
import { Flex } from "../styled";

const RadioField = () => {
  return (
    <Flex justifyContent="center">
      <div role="group" className="radio-status" aria-labelledby="status-group">
        <label>
          <input type="radio" name="status" value="ACTIVE" />
          Active
        </label>
        <label>
          <input type="radio" name="status" value="LEAVE_OF_ABSENCE" />
          Leave of Absence
        </label>
        <label>
          <input type="radio" name="status" value="TERMINATED" />
          Terminated
        </label>
      </div>
    </Flex>
  );
};

export default RadioField;
