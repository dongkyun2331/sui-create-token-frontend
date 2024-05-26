import { Box } from "@interest-protocol/ui-kit";
import { FC } from "react";

const Footer: FC = () => (
  <Box display="flex" flexDirection="column" textTransform="uppercase">
    <Box
      py="m"
      display="flex"
      borderTop="1px solid"
      borderColor="#C6C6CA"
      justifyContent="center"
    ></Box>
  </Box>
);

export default Footer;
