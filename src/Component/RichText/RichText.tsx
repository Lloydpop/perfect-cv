import { Box } from "@chakra-ui/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";
import Label from "../Form/Label/Label";

const myTheme = createTheme({
  // Set up your custom MUI theme here
});
interface props {
  props?: any;
}
export const RichText = ({ props }: props) => {
  return (
    <>
      <div className="mb-3">
        <Label name="Work Experience" />
      </div>
      <ThemeProvider theme={myTheme}>
        <Box
          border="1px solid #d3d0d0"
          {...props}
          borderRadius={"md"}
          minHeight="280px"
          paddingX={2}
          paddingBottom={2}
          className="rich-text"
        >
          <MUIRichTextEditor label="Start typing..." />
        </Box>
      </ThemeProvider>
    </>
  );
};
