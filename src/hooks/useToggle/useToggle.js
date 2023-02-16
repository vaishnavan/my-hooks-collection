import { useState } from "react";

export default function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  return [
    value,
    (val) =>
      setValue((cur) => {
        return typeof val === "boolean" ? val : !cur;
      }),
  ];
}
