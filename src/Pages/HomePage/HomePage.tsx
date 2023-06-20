import React from "react";
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import Container from "../../Component/Container/Container";
import Cards from "../../Component/Cards/Cards";
import {
  ChatBubbleLeftIcon,
  DocumentCheckIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import Image from "../../Component/Image/Image";
import EmptyState from "../../Component/EmptyState/EmptyState";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <EmptyState
        title="You are yet to create a resume"
        description=" Make sure to customize your timeline first and fill it with
              eye-catching articles and products."
        btn_title="Create Cv"
        action={() => {
          navigate("/templates");
        }}
      />
    </>
  );
};

export default HomePage;
