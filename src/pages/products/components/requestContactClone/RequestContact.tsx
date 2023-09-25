import Dialog from "@mui/material/Dialog";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  PurchaseContainer,
  RequestContactBtn,
  RequestContactDesc,
  RequestContactTitle,
  RequestContactContainer,
  RequestContactNameInput,
  RequestContactPhoneInput,
} from "./RequestContactStyle";

import CloseIcon from "@mui/icons-material/Close";
import { useButtonIsClickedStateContext } from "../../../../context/useButtonIsClickedContext";

export default function RequestContactClone() {
  const { requestOpen, setRequestOpen } = useButtonIsClickedStateContext();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setRequestOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={requestOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <form>
          <RequestContactContainer>
            <CloseIcon className="closeIcon" onClick={handleClose} />
            <PurchaseContainer>
              <p>Purchase</p>
            </PurchaseContainer>

            <RequestContactTitle>
              We will definitely contact you
            </RequestContactTitle>

            <RequestContactDesc>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value.
            </RequestContactDesc>

            <RequestContactNameInput
              placeholder="Your name *"
              required
              type="text"
            />

            <RequestContactPhoneInput
              placeholder="Phone Number *"
              required
              type="number"
              min={0}
            />

            <RequestContactBtn>To Send</RequestContactBtn>
          </RequestContactContainer>
        </form>
      </Dialog>
    </div>
  );
}
