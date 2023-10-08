import { Container, Typography, Box } from "@mui/material";

 const Home = () => {
    return(
        <>
              <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 2,
            // pb: ,
          }}
        >
          <Container maxWidth="sm" sx={{minHeight:"85vh", display:"flex", alignItems:"center"}}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
            //   gutterBottom
            >
              Welcome To Bhatia Store
            </Typography>
          </Container>
        </Box>
        </>
    )
 }

 export default Home;