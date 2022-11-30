import React from "react";
import Header from "../../components/Header";
import { Box, TextField, Grid, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

function Form() {
  // Form client-side validation w Yup
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    contacts: Yup.string().required("Required"),
    address1: Yup.string().required("Required"),
    address2: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contacts: "",
      address1: "",
      address2: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Box m="0px 20px 0px 20px">
      <Header title="CREATE NEW USER" subtitle="Creating New User" />
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {/* First Name */}
            <TextField
              error={formik.touched.firstName && formik.errors.firstName}
              id="firstName"
              name="firstName"
              label="First Name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              variant="standard"
              helperText={formik.errors.firstName}
              fullWidth
              sx={{ my: 2 }}
            />
          </Grid>
          <Grid item xs={6}>
            {/* Last Name */}
            <TextField
              error={formik.touched.lastName && formik.errors.lastName}
              id="lastName"
              name="lastName"
              label="Last Name"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              variant="standard"
              helperText={formik.errors.lastName}
              fullWidth
              sx={{ my: 2 }}
            />
          </Grid>
        </Grid>

        {/* Email Adress */}
        <TextField
          error={formik.touched.email && formik.errors.email}
          id="email"
          name="email"
          label="Email Adress"
          onChange={formik.handleChange}
          value={formik.values.email}
          variant="standard"
          helperText={formik.errors.email}
          fullWidth
          sx={{ my: 2 }}
        />

        {/* Contact */}
        <TextField
          error={formik.touched.contacts && formik.errors.contacts}
          id="contacts"
          name="contacts"
          label="Contacts"
          onChange={formik.handleChange}
          value={formik.values.contacts}
          variant="standard"
          helperText={formik.errors.contacts}
          fullWidth
          sx={{ my: 2 }}
        />

        {/* Adress 1 */}
        <TextField
          error={formik.touched.address1 && formik.errors.address1}
          id="address1"
          name="address1"
          label="Address 1"
          onChange={formik.handleChange}
          value={formik.values.address1}
          variant="standard"
          helperText={formik.errors.address1}
          fullWidth
          sx={{ my: 2 }}
        />

        {/* Adress 2 */}
        <TextField
          error={formik.touched.address2 && formik.errors.address2}
          id="address2"
          name="address2"
          label="Address 2"
          onChange={formik.handleChange}
          value={formik.values.address2}
          variant="standard"
          helperText={formik.errors.address2}
          fullWidth
          sx={{ my: 2 }}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "50%" }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Form;
