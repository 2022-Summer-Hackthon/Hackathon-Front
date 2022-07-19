import { memo } from "react";
import Template1Front from "./templateFront.style";

const Template1 = memo(({ size }) => {
  return (
    <Template1Front>
      <div className={`${size}-front`}>
        <div>
          <h1 className={`${size}-title1`}>DGSW</h1>
          <h2 className={`${size}-title2`}>dgsw.hs.kr</h2>
        </div>
      </div>
    </Template1Front>
  );
});

export default Template1;
