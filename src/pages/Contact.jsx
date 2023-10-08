import { Button, Container, Box, Typography } from "@mui/material";
import {theme} from "../components/theme";
import { ThemeProvider } from "@mui/material/styles";

const Contact = () => {
    return(
        <>
            {/* <!--Section: Contact v.2--> */}
            <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 2,
            // pb: ,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
            //   gutterBottom
            >
              Contact Us
            </Typography>
          </Container>
        </Box>
            <Container maxWidth="md" sx={{py:8}}>
<section className="mb-4">

    {/* <!--Section heading--> */}
    {/* <!--Section description--> */}
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row">

        {/* <!--Grid column--> */}
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                {/* <!--Grid row--> */}
                <div className="row">

                    {/* <!--Grid column--> */}
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control" />
                            <label for="name" className="">Your name</label>
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control" />
                            <label for="email" className="">Your email</label>
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                </div>
                {/* <!--Grid row-->

                <!--Grid row--> */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" className="form-control" />
                            <label for="subject" className="">Subject</label>
                        </div>
                    </div>
                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div className="row">

                    {/* <!--Grid column--> */}
                    <div className="col-md-12">

                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                {/* <!--Grid row--> */}

            </form>
            
            <div className="text-center text-md-left">
            <ThemeProvider theme={theme} align="center  ">
                <Button  variant="contained" color="black" onclick={() => document.getElementById('contact-form').submit()}>Send</Button>
            </ThemeProvider>
            </div>
            <div className="status"></div>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>A33, Dabua Colony, Faridabad, Hr,</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01 234 567 89</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@bhatiaelectrical.com</p>
                </li>
            </ul>
        </div>
        {/* <!--Grid column--> */}

    </div>

</section>
</Container>    
{/* <!--Section: Contact v.2--> */}
        </>
    )
}

export default Contact;
