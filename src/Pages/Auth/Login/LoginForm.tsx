import { Box, Flex, FormControl, Img, Text } from "@chakra-ui/react";
import React from "react";
import { InputElement } from "../../../Component/Form/Input/Input";
import ButtonElement from "../../../Component/Button/Button";
import { NavLink } from "../../../Component/Link/Link";
import { useNavigate } from "react-router-dom";
import google from "../../../Assets/google.png";
import CheckboxElement from "../../../Component/Form/Checkbox/Checkbox";
const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <Box as="div">
      <FormControl display={"flex"} flexDirection={"column"} rowGap={6}>
        <InputElement type="email" label="Email" />
        <InputElement
          type="password"
          label="Password"
          placeholder="Enter Password"
        />
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <CheckboxElement label="Remember for 30 days" />
          <NavLink name="Forgot password?" href="/sign-up" variant="primary" />
        </Flex>
        <ButtonElement
          variant="secondary"
          isFullWidth
          onClick={() => {
            navigate("/dashboard");
            window.location.reload();
          }}
          type="submit"
        >
          Sign in
        </ButtonElement>
        <ButtonElement variant="primary" isFullWidth type="button">
          <Flex gap={1} alignItems={"center"}>
            <span>
              <img src={google} alt="google" width={"20px"} />
            </span>
            <Text>Sign in with Google</Text>
          </Flex>
        </ButtonElement>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Text>Don't have an account yet?</Text>
          <span className="-ml-3">
            <NavLink name="Sign up" href="/sign-up" />
          </span>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default LoginForm;
