import React from "react";
import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import {
  Button,
  Container,
  Input,
  Label,
  StyledErrorMessage,
  Success,
} from "./styles.jsx";
import { feedback } from "../../actions/feedback.js";



function Forma() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (data) => {
    console.log(data)
    try {
      feedback(data.name, data.email, data.message);
      setIsSuccess(true);
    }
    catch (error) {
      console.log(`You see some error ${error}`);
    }
  };

    const formSchema = Yup.object({
    name: Yup.string().min(3, "Must have at least 3 characteres").required(),
    email: Yup.string().email().required("E-mail is required"),
    message: Yup.string()
      .min(10, "Need more then 10 letters")
      .max(500, "Can't exceed 500 characters")
      .required(),
    });
  
  
    return (
      <Container>
        {!isSuccess ? (
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
            validationSchema={formSchema}
            onSubmit={(data) => {
            handleSubmit(data);
          }}
        >
          {({ errors, touched, handleSubmit, isValid }) => (
            <Form name="contact" method="post" onSubmit={handleSubmit} >
              <Label htmlFor="title">Reach out to us!</Label>
                <Input
                id="title"
                type="text"
                name="name"
                placeholder="Your name*"
                valid={touched.name && !errors.name}
                error={touched.name && errors.name}
                />
                {errors.name && touched.name ? (
                  <StyledErrorMessage>
                    {errors.name}
                  </StyledErrorMessage>
              ) : null}
              <Input
                type="email"
                name="email"
                autoComplete="email"
                  placeholder="Your email*"
                valid={touched.email && !errors.email}
                error={touched.email && errors.email}
                />
                  {errors.email && touched.email ? (
                  <StyledErrorMessage>
                    {errors.email}
                  </StyledErrorMessage>
              ) : null}
              <Input
                component="textarea"
                name="message"
                autoCapitalize="on"
                placeholder="Your message*"
                valid={touched.message && !errors.message}
                error={touched.message && errors.message}
              />
                  {errors.message && touched.message ? (
                  <StyledErrorMessage>
                    {errors.message}
                  </StyledErrorMessage>
              ) : null}
              <Button type="submit" disabled={!isValid} >
                Send message
              </Button>
            </Form>
          )}
        </Formik>
      ) : 
        <Success>
              <p>Your message was successfully sent!</p>
        </Success>
      }
      </Container>

    )
}

export default Forma;