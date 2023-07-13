import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <Typography>uh ...</Typography>
    </Box>
  );
};

export default Home;

Home.getLayout = (page: ReactNode) => {
  return (
    <>
      {page}
      <Box>
        <Typography>skt_t1</Typography>
      </Box>
    </>
  );
};
