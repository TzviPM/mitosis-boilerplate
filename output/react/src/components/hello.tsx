import * as React from "react";

export type Props = {
  name?: string;
};

function Hello(props: Props) {
  return (
    <div className="text-red-900">
      Hello
      {props.name ?? "World"}!
    </div>
  );
}

export default Hello;
