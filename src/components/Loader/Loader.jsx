import { FallingLines } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div>
      <FallingLines
        color="#3289a8"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
    </div>
  );
};
