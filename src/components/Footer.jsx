import {  Box, Stack, Text, VStack,Image } from "@chakra-ui/react";
import React from "react";
import  btcSrc from '../assets/btc.png';




const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
     
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
          We are the best crypto trading app in India, we provide our guidance
            at a very cheap price. then very usefull in crypto app.
          </Text>
        </VStack>

        <VStack>
        <Image boxSize={"28"} mt={["4", "2"]} src={btcSrc} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;