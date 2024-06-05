import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Tab,
  Tabs,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQ() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ maxWidth: 1400, margin: "auto", marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Tabs value={value} onChange={handleChange} aria-label="FAQ Tabs">
        <Tab label="SellSmart" />
        <Tab label="SmartBuy" />
        <Tab label="Repair/Others" />
      </Tabs>
      <div hidden={value !== 0}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What if my pickup is delayed?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Usually, it doesn’t happen, it may happen due to some unforeseen
              circumstances. But we will update you with the real-time pickup
              status. In case of delay, please contact us by email at
              support@cashify.in. We shall respond to you within one business
              day and issue a refund/ fresh order.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              My mobile phone is not listed on the website. What to do now?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              In such cases, please contact us by email at support@cashify.in.
              We shall respond to you within one business day and try to rectify
              the issue as soon as possible.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              How To Sell Your Old Mobile Phone In 3 Steps?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              When it comes to selling your old mobile phone in a super easy and
              convenient fashion, you can trust none but Cashify. Here are three
              hassle-free ways. On the Cashify website or app, under the Sell
              phone category, choose the brand name and model. Add a few details
              related to the phone to get the exact value. Schedule a doorstep
              pickup for your phone as per your preferred date and time slot.
              Receive instant cash at your doorstep once the pickup is complete.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      {/* Similarly, add the content for other tabs if needed */}
      <Button
        variant="text"
        color="primary"
        style={{
          marginTop: "20px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        Load More FAQs
      </Button>
    </div>
  );
}

export default FAQ;
