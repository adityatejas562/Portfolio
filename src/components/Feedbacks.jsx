  import React from "react";
  import { motion } from "framer-motion";

  import { styles } from "../styles";
  import { SectionWrapper } from "../hoc";
  import { fadeIn, textVariant } from "../utils/motion";

  const Feedbacks = () => {
    return (
      <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        {/* Remove the blue rectangle section completely */}
      </div>
    );
  };

  export default SectionWrapper(Feedbacks, "");
