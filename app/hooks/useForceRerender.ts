import { useCallback, useState } from "react";

const useForceRerender = () => {
  const [, update] = useState<{}>();
  return useCallback(() => update({}), []);
};

export default useForceRerender;
