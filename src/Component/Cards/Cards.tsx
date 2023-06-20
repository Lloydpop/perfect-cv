import React from "react";
import {
  Card,
  CardHeader,
  Stack,
  StackDivider,
  Heading,
  CardBody,
  Box,
} from "@chakra-ui/react";
interface CardProps {
  title: string;
  children?: any;
}
const Cards = ({ title, children }: CardProps) => {
  return (
    <Card className="mt-2 shadow-md border-5 cursor-pointer">
      <CardHeader></CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="1">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              {title}
            </Heading>
            <Box pt="4" fontSize="sm">
              {children}
            </Box>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Cards;
