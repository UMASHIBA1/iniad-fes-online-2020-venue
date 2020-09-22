import { useEffect } from "react";

// TODO: bodyがスクロール不可になってるかテストを書く
const useRestrictBodyScroll = (isRestrictScroll: boolean) => {
  useEffect(() => {
    if (isRestrictScroll) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isRestrictScroll]);
};

export default useRestrictBodyScroll;
