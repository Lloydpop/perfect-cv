import {
  Box,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Heading,
  Spinner,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import Container from "../../../Component/Container/Container";
import { InputElement } from "../../../Component/Form/Input/Input";
import { Select } from "../../../Component/Form/Select/Select";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import Tips from "./Tips";
import ButtonElement from "../../../Component/Button/Button";
import classnames from "classnames";
import {
  PencilIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import TextAreaElement from "../../../Component/Form/TextArea/TextArea";
import { useNavigate } from "react-router-dom";
import { RichText } from "src/Component/RichText/RichText";
import useCountry from "src/hooks/useCountry";
const CvForm = () => {
  const formStateOptions = {
    workExperience: "Work-experience",
    Education: "education",
    contact: "contact-info",
  };

  const [formState, setFormState] = useState(formStateOptions.contact);

  const [counter, setCounter] = useState<number>(1);
  const { country } = useCountry();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <FormControl
        className={classnames("space-y-6", {
          hidden: formState === formStateOptions.workExperience,
        })}
      >
        <Heading size={"lg"} className="my-4">
          Contact Section
        </Heading>
        <Text className="mb-4">
          This information will be placed at the top of your resume.
        </Text>
        <Grid gridTemplateColumns={"1fr 300px"} gap={10}>
          <Grid gridTemplateColumns={"1fr 1fr"} gap={"10"}>
            <GridItem>
              <InputElement type="text" label="First Name" />
            </GridItem>
            <GridItem>
              <InputElement type="text" label="Last Name" />
            </GridItem>
            <GridItem>
              <InputElement type="text" label="Address" />
            </GridItem>
            <GridItem>
              <InputElement type="text" label="Postal Code" />
            </GridItem>

            <GridItem>
              {/* <Select
        label="Verifiers"
        name="verifiers"
        control={control}
        disabled={type !== 'create'}
        options={transformData(verifiers ?? [], 'verifier')}
        isMulti
        error={errors.verifiers && 'verifiers are required'}
      /> */}
              <Select
                name={"gender"}
                label="Gender"
                control={control}
                options={[
                  {
                    label: "male",
                    value: "Male",
                  },
                  {
                    label: "female",
                    value: "Female",
                  },
                  {
                    label: "others",
                    value: "Others",
                  },
                ]}
              />
            </GridItem>
            <GridItem>
              {country === undefined ? (
                <Spinner />
              ) : (
                <Select
                  label="Country"
                  options={country}
                  control={control}
                  name={"country"}
                />
              )}
            </GridItem>
            <GridItem>
              {country === undefined ? (
                <Spinner />
              ) : (
                <InputElement label="State" type="text" />
              )}
            </GridItem>
            <GridItem>
              <InputElement type="text" label="Email" />
            </GridItem>
            <GridItem>
              <InputElement type="text" label="Job Title" />
            </GridItem>
            <GridItem>
              <InputElement type="text" label="* Phone Number" />
            </GridItem>
            <GridItem colSpan={2}>
              {" "}
              <ButtonElement
                isFullWidth
                variant="secondary"
                onClick={() => {
                  setFormState(formStateOptions.workExperience);
                }}
              >
                Next
              </ButtonElement>
            </GridItem>
          </Grid>
          <Tips />
        </Grid>
      </FormControl>
      <FormControl
        w={"500px"}
        className={classnames("space-y-6", {
          hidden: formState === formStateOptions.contact,
        })}
      >
        <Heading size={"lg"} className="my-4">
          Work Experience
        </Heading>
        <Text className="mb-4">Add, edit, or delete your work experience.</Text>
        <span
          className="flex items-center gap-1 font-medium justify-end cursor-pointer"
          onClick={() => {
            navigate("/add-position");
          }}
        >
          <PlusCircleIcon className="w-7 text-blue-600" />
          Add position
        </span>
        <RichText />
      </FormControl>
    </div>
  );
};

export default CvForm;
