import { Box } from "@chakra-ui/react";
import React from "react";

function Search() {
  return (
    <Box
      //   border={"2px solid red"}
      width={"52vw"}
      bgColor={"#f1f1f1"}
      borderRadius={"20px"}
      p={2}
      textAlign={"center"}
      _hover={{ cursor: "pointer" }}
    >
      Search
    </Box>
  );
}

export default Search;
