import {
  Avatar,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import Search from "./Search";
import pfp from "./pfp.jpg";
import { useMediaQuery } from "@chakra-ui/react";
import ProfileModel from "./ProfileModel";

function Header() {
  const [mobileView] = useMediaQuery("(max-width: 425px)");
  return (
    <Flex
      //   border={"2px solid red"}
      h={"100%"}
      align={"center"}
      backgroundColor={"#e0e0e0"}
    >
      <Flex
        // border={"2px solid green"}
        flex={"1"}
        p={2}
        m={"0px 4px"}
        align={"center"}
        borderRadius={"10px"}
        backgroundColor={"white"}
      >
        <Box
          flex={"0.15"}
          ml={4}
          fontFamily={"'Kanit', sans-serifs"}
          fontSize={16}
        >
          SOCIALAPP
        </Box>
        <Box flex={"0.8"} align={!mobileView ? "center" : "right"}>
          <Search />
        </Box>

        {/* profile pic div */}
        {!mobileView ? (
          <Box flex={"0.2"} align={"right"}>
            <Menu>
              <MenuButton colorScheme="pink">
                <Avatar
                  name="Dan Abrahmov"
                  size="md"
                  src="https://bit.ly/dan-abramov"
                  mr={4}
                />
              </MenuButton>
              <MenuList
                border={"2px solid #00a8fc"}
                backgroundColor={"#293141"}
                color={"white"}
              >
                <MenuGroup title="PROFILE" color={"#11b2ff"}>
                  <ProfileModel>
                    <MenuItem
                      backgroundColor={"#293141"}
                      _hover={{ backgroundColor: "#3b475e" }}
                    >
                      My Account
                    </MenuItem>
                  </ProfileModel>
                  <MenuItem
                    backgroundColor={"#293141"}
                    _hover={{ backgroundColor: "#3b475e" }}
                  >
                    Logout
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Box>
        ) : null}
      </Flex>
    </Flex>
  );
}

export default Header;
