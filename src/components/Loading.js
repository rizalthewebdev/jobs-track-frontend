import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

const override = css`
   display: block;
   margin: 0 auto;
   border-color: red;
`;

function Loading() {
   return (
      <div className="w-full h-full mx-auto">
         <HashLoader
            color={"#6517BE"}
            loading={true}
            css={override}
            size={50}
         />
      </div>
   );
}

export default Loading;
