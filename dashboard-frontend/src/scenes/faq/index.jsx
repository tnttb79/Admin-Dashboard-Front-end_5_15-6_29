import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography, useTheme } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from "../../components/Header";

function FAQ() {
  const theme = useTheme()
  return (
    <Box m="0px 20px 0px 20px">
      <Header title={"FAQ"} subtitle="Frequently Asked Questions Page"/>
      <Box>
      <Accordion defaultExpanded>
        <AccordionSummary sx={{backgroundColor:`${theme.palette.primary.dark}`}}
          expandIcon={<ExpandMoreIcon />}
          >
          <Typography variant='h5'>How can I reset my password?</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
            To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions provided to reset your password.
          </Typography>
        </AccordionDetails>
        
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary sx={{backgroundColor:`${theme.palette.primary.dark}`}}
          expandIcon={<ExpandMoreIcon />}
          >
          <Typography variant='h5'>What payment methods do you accept?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We accept various payment methods, including credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. You can select your preferred payment method during the checkout process.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded>
        <AccordionSummary sx={{backgroundColor:`${theme.palette.primary.dark}`}}
          expandIcon={<ExpandMoreIcon />}
          >
          <Typography variant='h5'>How long does shipping take?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Shipping times may vary depending on your location and the shipping method chosen. Typically, our standard shipping takes 3-5 business days, while express shipping delivers within 1-2 business days. Please note that these are general estimates, and actual delivery times may differ.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
    </Box>
  );
}

export default FAQ;