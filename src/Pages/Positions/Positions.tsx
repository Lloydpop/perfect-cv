import {
  FormControl,
  Heading,
  Text,
  Grid,
  GridItem,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { InputElement } from "../../Component/Form/Input/Input";
import Container from "../../Component/Container/Container";
import ButtonElement from "../../Component/Button/Button";
import { Select } from "../../Component/Form/Select/Select";
import { useForm } from "react-hook-form";
import CheckboxElement from "../../Component/Form/Checkbox/Checkbox";
import { useState } from "react";
import { useDate } from "../../hooks/useDate";
import { RichText } from "src/Component/RichText/RichText";
import Search from "src/Component/Search/Search";
import useCountry from "src/hooks/useCountry";
import { ModalComp } from "src/Component/Modal/Modal";
import ModalContent from "./ModalContent";
import { useNavigate } from "react-router-dom";

const Positions = () => {
  const [checked, setChecked] = useState(false);
  const { month, year } = useDate();
  const { country } = useCountry();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const handleCheck = () => {
    if (checked === false) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  return (
    <div className="">
      <Container>
        <Heading size={"lg"}>Add positions</Heading>
        <Text mt={"2"}>Rest APIS, Google Firebase</Text>
        <FormControl mt={5}>
          <Grid gridTemplateColumns={"300px 300px"} gap={"6"}>
            <GridItem colSpan={2}>
              <InputElement type="text" label="Job Title" />
            </GridItem>

            <GridItem colSpan={2}>
              <InputElement type="text" label="Organization name" />
            </GridItem>
            <GridItem>
              <Select
                name={"country"}
                label="Country"
                options={country}
                control={control}
              />
            </GridItem>
            <GridItem>
              <InputElement type="text" label="State" />
            </GridItem>
            <GridItem>
              <Select
                name={"start month"}
                label="Start Month"
                control={control}
                options={month}
              />
            </GridItem>
            <GridItem>
              <Select
                name={"start year"}
                label="Start Year"
                control={control}
                options={year}
              />
            </GridItem>
            <GridItem>
              {checked === true ? null : (
                <Select
                  name={"End month"}
                  label="End Month"
                  control={control}
                  disabled={checked}
                  options={month}
                />
              )}
            </GridItem>

            <GridItem>
              {checked ? null : (
                <Select
                  name={"End year"}
                  label="End Year"
                  control={control}
                  options={year}
                />
              )}
            </GridItem>
            <GridItem colSpan={2}>
              <CheckboxElement
                checked={checked}
                label="I currently work here"
                onClick={() => {
                  handleCheck();
                }}
              />
            </GridItem>
          </Grid>
          <Grid gridTemplateColumns={"2fr 1fr"} gap={5} mt={5}>
            <GridItem>
              <RichText />
            </GridItem>
            <div className="mt-10">
              <Container>
                <Search placeholder="Search by job title" />
                <div className="h-[210px] overflow-y-auto"></div>
              </Container>
            </div>
          </Grid>
          <GridItem colSpan={2}>
            {" "}
            <Flex justifyContent={"between"} gap={15} mt={5}>
              <ButtonElement isFullWidth variant="primary">
                Back
              </ButtonElement>
              <ButtonElement isFullWidth variant="secondary" onClick={onOpen}>
                Save
              </ButtonElement>
            </Flex>
          </GridItem>
        </FormControl>
        <ModalComp onClose={onClose} isOpen={isOpen} size="md" onOpen={onOpen}>
          <ModalContent
            onClick={() => {
              navigate("/education/select");
            }}
          />
        </ModalComp>
      </Container>
    </div>
  );
};

export default Positions;
