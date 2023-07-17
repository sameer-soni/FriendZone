import { Box, Flex } from "@chakra-ui/react";
import React from "react";

function Body() {
  return (
    <Box
      // border={"2px solid brown"}
      h={"100%"}
      backgroundColor={"#e0e0e0"}
    >
      <Flex
        // border={"2px solid blue"}
        h={"100%"}
        p={2}
        m={"0px 4px"}
        borderRadius={"10px"}
        backgroundColor={"white"}
      >
        body
      </Flex>
    </Box>
  );
}

export default Body;
