import { Dispatch, SetStateAction } from "react";


 function scroll(isTop: boolean, setIsTop: Dispatch<SetStateAction<boolean>>) {
  
  document.addEventListener("scroll", () => {
    
    if (isTop == true && window.scrollY > 0) {
      setIsTop(false);
    }

    if (!isTop && window.scrollY == 0) {
      setIsTop(true);
    }
  });
}

export default scroll;
