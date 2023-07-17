import React from "react";
import Header from "./Header";
import Body from "./Body";
import { Avatar, Box, useMediaQuery } from "@chakra-ui/react";

function Main() {
  const [mobileView] = useMediaQuery("(max-width: 425px)");
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ flex: "0.1" }}>
        <Header />
      </div>
      <div style={{ flex: "1" }}>
        <Body />
      </div>

      {/* profile pic in bottom */}
      {mobileView ? (
        <Box backgroundColor={"blackAlpha.900"} p={1}>
          <Box align={"right"} mr={2}>
            <Avatar
              name="Dan Abrahmov"
              size="sm"
              src="https://bit.ly/dan-abramov"
            />
          </Box>
        </Box>
      ) : null}
    </div>
  );
}

export default Main;
