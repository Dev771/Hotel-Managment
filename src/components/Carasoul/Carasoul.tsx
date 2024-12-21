import Slider from 'react-slick';
/*import testThumb1 from '../../assets/images/resource/testi-thumb-1.jpg';
import testThumb2 from '../../assets/images/resource/testi-thumb-2.jpg';
import testThumb3 from '../../assets/images/resource/testi-thumb-3.jpg';*/

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Box, Grid, Typography } from '@mui/material';

const man1 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734767131/PSK%20Hotels/Reviews/man_2_aq5gnn.png";
const man2 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734767131/PSK%20Hotels/Reviews/man_1_qme1tp.png";
const man3 = "https://res.cloudinary.com/dxzp2cqfc/image/upload/v1734767131/PSK%20Hotels/Reviews/man_3_rsvmae.png";

const Carasoul = () => {
    
    const testimonials = [
        {
            text: "Very Good Property.",
            name: "Shankar",
            designation: "",
            image: man1,
        },
        {
            text: "Had a lovely stay with the family.",
            name: "Nishant",
            designation: "",
            image: man2,
        },
        {
            text: "Good property with good view and good location.",
            name: "Singh",
            designation: "",
            image: man3,
        },
    ];
      
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
    };

    return (
        <Box sx={{ maxWidth: "800px", mx: "auto", my: 4 }}>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <Box key={index} sx={{ p: 2, textAlign: "center" }}>
                        <Grid container direction="column" alignItems="center">
                        <Avatar
                            src={testimonial.image}
                            alt={testimonial.name}
                            sx={{ width: 80, height: 80, mb: 2 }}
                        />
                        <Typography
                            variant="body1"
                            sx={{
                            fontStyle: "italic",
                            mb: 2,
                            color: "text.secondary",
                            }}
                        >
                            "{testimonial.text}"
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            {testimonial.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            {testimonial.designation}
                        </Typography>
                        </Grid>
                    </Box>
                ))}
            </Slider>
        </Box>
    )
}

export default Carasoul