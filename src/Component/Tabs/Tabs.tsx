import { Box, HStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useQueryParams from "../../hooks/useQueryParams";

interface props {
  tabs?: any;
}
export const Tabs = ({ tabs }: props) => {
  let currentTab = useQueryParams().get("tab");
  currentTab = currentTab || tabs[0].id;

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  useEffect(() => {
    setActiveTab(currentTab);
  }, [currentTab]);

  return (
    <Box>
      <Box
        overflowX="auto"
        overflowY="hidden"
        mb={5}
        sx={{
          "&::-webkit-scrollbar": {
            width: 0,
            height: 0,
          },
        }}
      >
        <HStack
          borderBottom="2px"
          borderColor={{ base: "transparent", md: "gray.200" }}
          spacing={{ base: 3, md: 5 }}
          display="flex"
          alignItems="center"
        >
          {tabs.map((t?: any) => (
            <Link key={t.id} to={`?tab=${t.id}`}>
              <Box
                minWidth="100px"
                transform="translateY(2.5px)"
                cursor="pointer"
                fontWeight="semibold"
                fontSize={{ base: "sm", md: "md" }}
                pb={{ base: 2, md: 3 }}
                textAlign="center"
                borderBottom="3px solid blue"
                borderColor={
                  activeTab === t.id ? "primary.base" : "transparent"
                }
                color={activeTab === t.id ? "black" : "gray.500"}
              >
                {t.label}
              </Box>
            </Link>
          ))}
        </HStack>
      </Box>

      <Box>{tabs?.find((t?: any) => t.id === activeTab).content}</Box>
    </Box>
  );
};
