import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { Select } from "src/Component/Form/Select/Select";
import React from "react";
import { useForm } from "react-hook-form";
import { InputElement } from "src/Component/Form/Input/Input";
import useCountry from "src/hooks/useCountry";
import { useDate } from "src/hooks/useDate";
import Container from "src/Component/Container/Container";
import ButtonElement from "src/Component/Button/Button";
import { NavLink } from "src/Component/Link/Link";

const HighSchool = () => {
  const { month, year } = useDate();
  const { country } = useCountry();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <Grid gridTemplateColumns={"1fr 1fr"}>
      <Container>
        <Heading size={"lg"} my={"4"}>
          What's your high school?
        </Heading>
        <Grid gridTemplateColumns={"300px 300px"} gap={"6"}>
          <GridItem colSpan={2}>
            <InputElement type="text" label="High School Name " />
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
              label="Graduation Month"
              control={control}
              options={month}
            />
          </GridItem>
          <GridItem>
            <Select
              name={"start year"}
              label="Graduation Year"
              control={control}
              options={year}
            />
          </GridItem>
          <GridItem colSpan={2}>
            <div className="flex items-center justify-center gap-7 mt-4">
              <ButtonElement variant="outline">Back</ButtonElement>
              <ButtonElement variant="secondary">Continue</ButtonElement>
            </div>
            <div className="mt-3">
              <NavLink href="/next" variant="primary" name="Skip this step" />
            </div>
          </GridItem>
        </Grid>
      </Container>
    </Grid>
  );
};

export default HighSchool;
