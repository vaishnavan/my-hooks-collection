import React from "react";
import { Button, Text, Flex } from "./toggle.styled";
import useToggle from "./useToggle";

const Toggle = () => {
  const [value, toggleValue] = useToggle(false);
  return (
    <div>
      <Text>{value.toString()}</Text>
      <Flex>
      <Button  onClick={toggleValue}>Toggle</Button>
      <Button data-testid="togglecheck" onClick={() => toggleValue(true)}>Make True</Button>
      <Button onClick={() => toggleValue(false)}>Make False</Button>
      </Flex>
    </div>
  );
};

export default Toggle