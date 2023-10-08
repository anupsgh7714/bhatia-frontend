import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

const Copyright = (props) =>  {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          BhatiaElectricals
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

// const Footer = () => {
//     return(
//         <>
//             <footer>
//                 <Copyright sx={{ mt: 8, mb: 4 }} />
//             </footer>
//         </>
//     )
// }

export default Copyright;



 {/* Footer */}
//  <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
//  <Typography variant="h6" align="center" gutterBottom>
//    Footer
//  </Typography>
//  <Typography
//    variant="subtitle1"
//    align="center"
//    color="text.secondary"
//    component="p"
//  >
//    Something here to give the footer a purpose!
//  </Typography>
// </Box>
{/* End footer */}