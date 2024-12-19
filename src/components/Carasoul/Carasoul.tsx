import Slider from 'react-slick';
import testThumb1 from '../../assets/images/resource/testi-thumb-1.jpg';
import testThumb2 from '../../assets/images/resource/testi-thumb-2.jpg';
import testThumb3 from '../../assets/images/resource/testi-thumb-3.jpg';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Box, Grid, Typography } from '@mui/material';


const Carasoul = () => {
    
    const testimonials = [
        {
            text: "Lorem ipsum dolor sit amet consectetur adipis elit eiusmod tempor incidunt sed labore dolore magna.",
            name: "Mark Adams",
            designation: "Designer",
            image: testThumb1,
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipis elit eiusmod tempor incidunt sed labore dolore magna.",
            name: "Fiona Edwards",
            designation: "Developer",
            image: testThumb2,
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipis elit eiusmod tempor incidunt sed labore dolore magna.",
            name: "Dominic Allen",
            designation: "Designer",
            image: testThumb3,
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