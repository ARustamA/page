import { useEffect, useState } from 'react';
import CV from './../../assets/resume.pdf';
import { motion } from 'framer-motion';
import { Document, Page } from "react-pdf";

export const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <motion.section id="resume" key="resume" className="p-4 sm:px-4 pt-16">
      <h2 className="sm:text-xl  "> Резюме</h2>
      <Document file={CV} className="d-flex justify-content-center">
        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
      </Document>
    </motion.section>
  );
};
