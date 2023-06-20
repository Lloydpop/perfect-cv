import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Container from "../../Component/Container/Container";
import { Tabs } from "../../Component/Tabs/Tabs";
import { FileUpload } from "../../Component/FileUpload";
import { useResume } from "../../hooks/useResume";
import CvForm from "./CvForm/CvForm";
import ButtonElement from "../../Component/Button/Button";
import { useNavigate } from "react-router-dom";

const ChatRoom = () => {
  const { url, handleChange, clearFile, files } = useResume();
  const navigate = useNavigate();
  return (
    <div>
      <Box className="">
        <Container>
          <Heading size={"md"}>CV Builder</Heading>
          <div className="mt-4">
            <Tabs
              tabs={[
                {
                  id: "upload",
                  label: "Upload Existing CV",
                  content: (
                    <div className="h-[350px] w-[500px]">
                      <Heading className="my-7" size={"lg"}>
                        {url === ""
                          ? "   Upload Existing File"
                          : "Ready for upload!"}
                      </Heading>
                      <FileUpload
                        infoText="Must be a pdf or txt file"
                        url={url}
                        file={files}
                        onChange={(file) => handleChange(file)}
                        accept="application/pdf, .txt"
                        removeFile={() => {
                          clearFile();
                        }}
                        children={
                          <>
                            <div>
                              <p className="text-center mt-3 font-medium text-md">
                                We are all set! Let's build your resume!
                              </p>
                            </div>
                          </>
                        }
                      />
                      {url !== "" && (
                        <div className="text-right mt-4">
                          <ButtonElement
                            variant="secondary"
                            onClick={() => {
                              navigate("/app/personalize");
                            }}
                          >
                            Continue
                          </ButtonElement>
                        </div>
                      )}
                    </div>
                  ),
                },
                {
                  id: "create",
                  label: "Create a new CV from scratch",
                  content: (
                    <>
                      <CvForm />
                    </>
                  ),
                },
              ]}
            />

            {/* {url ? <iframe src={url} height={"300px"}></iframe> : ""} */}
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default ChatRoom;
