import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const slides = [
    {
        title: 'CREATE CUSTOM TAPES IN 6-STEPS',
        image: './7.png',
        description: 'Have a special project in mind? No problem. We can walk you through our customizations process to create the perfect narrow fabric for your businesses.'
    },
    {
        title: 'Step 1: Assessment',
        image: './1.avif',
        description: 'We meet with the customer to assess their narrow fabric requirements including all yarn and construction specifications.'
    },
    {
        title: 'Step 2: Inspiration',
        image: './2.avif',
        description: 'Through customer-supplied design briefs, or a customer’s product samples, our design team determines an initial pattern and color direction.'
    },
    {
        title: 'Step 3: Research',
        image: './3.avif',
        description: 'To help solidify a design direction, we review with the customer existing tapes, including series of woven and knit fabrics, that may correlate with certain design or color needs.',
        note: '*In case of any issue or problem do not hesitate to call 938'
    },
    {
        title: 'Step 4: Pattern design',
        image: './4.avif',
        description: 'During this period, we frequently coordinate tape patterns with the customer’s mattress fabrics, often working through several custom designs to achieve a near-exact pattern match.'
    },
    {
        title: 'Step 5: Color Design',
        image: './5.avif',
        description: 'Via customer’s color samples or Pantone chips, we work closely with our yarn suppliers to attain accurate matches, especially when color is critical.'
    },
    {
        title: 'Step 6: Review',
        image: './6.avif',
        description: 'Through our review and revision period, we work to supply our customers with the perfect pairing of tape to fabric.'
    }
];

export default function SliderComponent() {
    return (
        <div className='mx-auto max-w-screen-xl px-5 md:px-10'>
            <Swiper
                navigation
                modules={[Navigation]}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='lg:flex items-center justify-between rounded-md gap-10 border bg-white p-5'>
                            <div className=''>
                                <img src={slide.image} alt={slide.title} className='w-full' />
                            </div>
                            <div className='md:px-20 md:max-w-xl px-5'>
                                <h1 className='lg:pt-5 pt-3 md:text-4xl text-2xl text-[#146690] uppercase'>
                                    {slide.title}
                                </h1>
                                <p className='py-8 text-sm font-light text-[#1b1b1b]'>
                                    {slide.description}
                                </p>
                                {slide.note && (
                                    <p className='text-sm font-light text-[#5e5e5e]'>
                                        {slide.note}
                                    </p>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}


// import React from 'react'
// import { useState } from "react";
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
      
//       {...other}
//     >
//       {value === index && (
//         <Box>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   };
// }

// export default function Climate() {
//     const [value, setValue] = React.useState(0);
//     const [open, setOpen] = useState(0);
//     const handleOpen = (value) => {
//       setOpen(open === value ? 0 : value);
//     };

  
//     const handleChange = (event, newValue) => {
//       setValue(newValue);
//     };

//   return (
//     <>
//         <Box 
//             className="mx-auto justify-between"
//             >
//                 <div className='max-w-screen-xl mx-auto md:px-10 px-5'>
//                     <h1 className='md:text-4xl text-2xl md:py-10 font-displace'>
//                         CREATE CUSTOM TAPES IN 6-STEPS
//                     </h1>
//                     <p>
//                         Have a special project in mind? <br />
//                         No problem. We can walk you through our customizations process to create the perfect narrow fabric for your businesses' needs.
//                     </p>
//                 </div>
//                 <div className='items-center text-left bg-[#146690] pt-10 mt-10 pb-52'>
//                     <Tabs className='border-[#fff] border-b border-opacity-20 max-w-screen-xl mx-auto'
//                         value={value}
//                         onChange={handleChange}
//                         variant="scrollable"
//                         scrollButtons
//                         allowScrollButtonsMobile
//                         aria-label="scrollable force tabs example"
//                     >
//                         <Tab
//                             label="STEP 1" {...a11yProps(0)}
//                             sx={{
                                
//                                 fontSize: { xs: 16, md: 16, },
                                
//                                 textAlign: 'left',
//                                 color: '#E0E0E9',
//                                 paddingBottom:{xs: 3, md: 7,},
//                                 fontWeight: 'bold',
//                                 textTransform: 'none',
//                                 '&.Mui-selected': {
//                                     color: '#fff', // Change the text color to #146690 for the selected tab
//                                 }
//                             }}
//                         />
//                         <Tab
//                             label="STEP 2"
//                             {...a11yProps(1)}
//                             sx={{
//                                 paddingBottom:{xs: 3, md: 7,},
//                                 textAlign: 'left',
//                                 color: '#E0E0E9',
//                                 fontWeight: 'bold',
//                                 fontSize: '16px',
//                                 textTransform: 'none',
//                                 '&.Mui-selected': {
//                                     color: '#fff', // Change the text color to #146690 for the selected tab
//                                 }
//                             }}
//                         />
//                         <Tab 
//                             label="STEP 3" {...a11yProps(2)}
//                             sx={{
//                                 paddingBottom:{xs: 3, md: 7,},
//                                 textAlign: 'left',
//                                 color: '#E0E0E9',
//                                 fontWeight: 'bold',
//                                 fontSize: '16px',
//                                 textTransform: 'none',
//                                 '&.Mui-selected': {
//                                     color: '#fff', // Change the text color to #146690 for the selected tab
//                                 }
//                             }}
//                         />
//                         <Tab 
//                             label="STEP 4" {...a11yProps(3)}
//                             sx={{
//                                 paddingBottom:{xs: 3, md: 7,},
//                                 textAlign: 'left',
//                                 color: '#E0E0E9',
//                                 fontWeight: 'bold',
//                                 fontSize: '16px',
//                                 textTransform: 'none',
//                                 '&.Mui-selected': {
//                                     color: '#fff', // Change the text color to #146690 for the selected tab
//                                 }
//                             }}
//                         />
//                         <Tab 
//                             label="STEP 5" {...a11yProps(4)}
//                             sx={{
//                                 paddingBottom:{xs: 3, md: 7,},
//                                 textAlign: 'left',
//                                 color: '#E0E0E9',
//                                 fontWeight: 'bold',
//                                 fontSize: '16px',
//                                 textTransform: 'none',
//                                 '&.Mui-selected': {
//                                     color: '#fff', // Change the text color to #146690 for the selected tab
//                                 }
//                             }}
//                         />
//                         <Tab 
//                             label="STEP 6" {...a11yProps(5)}
//                             sx={{
//                                 paddingBottom:{xs: 3, md: 7,},
//                                 textAlign: 'left',
//                                 color: '#E0E0E9',
//                                 fontWeight: 'bold',
//                                 fontSize: '16px',
//                                 textTransform: 'none',
//                                 '&.Mui-selected': {
//                                     color: '#fff', // Change the text color to #146690 for the selected tab
//                                 }
//                             }}
//                         />
//                     </Tabs>
//                 </div>

//                 <div className='mx-auto max-w-screen-xl justify-center md:px-10 px-5 items-center'>
//                     <TabPanel value={value} index={0}>
//                         <div className='lg:flex items-center justify-between rounded-md gap-10 border md:-mt-40 -mt-44 bg-white'>
//                             <div className='lg:hidden block'>
//                                 <img className='' src='././1.avif' alt='images'/>
//                             </div>
//                             <div className='md:px-20 md:max-w-xl px-5 md:pb-0 lg:pb-0 pb-5'>
//                                 <h1 className='lg:pt-5 pt-3 md:text-4xl text-2xl text-[#146690] uppercase'>
//                                     Assessment
//                                 </h1>
//                                 <p className='py-8 text-sm font-light text-[#1b1b1b]'>
//                                     We meet with the customer to assess their narrow fabric requirements including all yarn and construction specifications.
//                                 </p>
//                             </div>
//                             <div className='hidden lg:block'>
//                                 <img className='' src='././1.avif' alt='images'/>
//                             </div>
//                         </div>
//                     </TabPanel>

//                     <TabPanel value={value} index={1}>
//                         <div className='lg:flex items-center justify-between rounded-md gap-10 border md:-mt-40 -mt-44 bg-white'>
//                             <div className='lg:hidden block'>
//                                 <img className='' src='./2.avif' alt='images'/>
//                             </div>
//                             <div className='md:px-20 md:max-w-xl px-5 md:pb-0 lg:pb-0 pb-5'>
//                                 <h1 className='lg:pt-5 pt-3 md:text-4xl text-2xl text-[#146690] uppercase'>
//                                     Inspiration
//                                 </h1>
//                                 <p className='py-8 text-sm font-light text-[#1b1b1b]'>
//                                 Through customer-supplied design briefs, or a customer’s product samples, our design team determines an initial pattern and color direction.
//                                 </p>
//                             </div>
//                             <div className='hidden lg:block'>
//                                 <img className='' src='./2.avif' alt='images'/>
//                             </div>
//                         </div>
//                     </TabPanel>
//                     <TabPanel value={value} index={2}>
//                         <div className='lg:flex items-center justify-between rounded-md gap-10 border md:-mt-40 -mt-44 bg-white'>
//                             <div className='lg:hidden block'>
//                                 <img className='' src='./3.avif' alt='images'/>
//                             </div>
//                             <div className='md:px-20 md:max-w-xl px-5 md:pb-0 lg:pb-0 pb-5'>
//                                 <h1 className='lg:pt-5 pt-3 md:text-4xl text-2xl text-[#146690] uppercase'>
//                                     Research
//                                 </h1>
//                                 <p className='py-8 text-sm font-light text-[#1b1b1b]'>
//                                     To help solidify a design direction, we review with the customer existing tapes, including series of woven and knit fabrics, that may correlate with certain design or color needs.
//                                 </p>
//                                 <br/>
//                                 <p className='text-sm font-light text-[#5e5e5e]'>
//                                     *In case of any issue or problem do not hesitate to call 938                            
//                                 </p>
//                             </div>
//                             <div className='hidden lg:block'>
//                                 <img className='' src='./3.avif' alt='images'/>
//                             </div>
//                         </div>
//                     </TabPanel>

//                     <TabPanel value={value} index={3}>
//                         <div className='lg:flex items-center justify-between rounded-md gap-10 border md:-mt-40 -mt-44 bg-white'>
//                             <div className='lg:hidden block'>
//                                 <img className='' src='./4.avif' alt='images'/>
//                             </div>
//                             <div className='md:px-20 md:max-w-xl px-5 md:pb-0 lg:pb-0 pb-5'>
//                                 <h1 className='lg:pt-5 pb-5 pt-3 md:text-4xl text-2xl text-[#146690] uppercase'>
//                                     Pattern design
//                                 </h1>
//                                 <p className='py-8 text-sm font-light text-[#1b1b1b]'>
//                                     During this period, we frequently coordinate tape patterns with the customer’s mattress fabrics, often working through several custom designs to achieve
//                                     a near-exact pattern match.
//                                 </p>
//                             </div>
//                             <div className='hidden lg:block'>
//                                 <img className='' src='./4.avif' alt='images'/>
//                             </div>
//                         </div>
//                     </TabPanel>
//                     <TabPanel value={value} index={4}>
//                         <div className='lg:flex items-center justify-between rounded-md gap-10 border md:-mt-40 -mt-44 bg-white'>
//                             <div className='lg:hidden block'>
//                                 <img className='' src='./5.avif' alt='images'/>
//                             </div>
//                             <div className='md:px-20 md:max-w-xl px-5 md:pb-0 lg:pb-0 pb-5'>
//                                 <h1 className='lg:pt-5 pb-5 pt-3 md:text-4xl text-2xl text-[#146690] uppercase'>
//                                     Color Design
//                                 </h1>
//                                 <p className='py-8 text-sm font-light text-[#1b1b1b]'>
//                                     Via customer’s color samples or Pantone chips, we work closely with our yarn suppliers to attain accurate matches, especially when color is critical.
//                                 </p>
//                             </div>
//                             <div className='hidden lg:block'>
//                                 <img className='' src='./5.avif' alt='images'/>
//                             </div>
//                         </div>
//                     </TabPanel>
//                     <TabPanel value={value} index={5}>
//                         <div className='lg:flex items-center justify-between rounded-md gap-10 border md:-mt-40 -mt-44 bg-white'>
//                             <div className='lg:hidden block'>
//                                 <img className='' src='./6.avif' alt='images'/>
//                             </div>
//                             <div className='md:px-20 md:max-w-xl px-5 md:pb-0 lg:pb-0 pb-5'>
//                                 <h1 className='lg:pt-5 pb-5 pt-3 md:text-4xl text-2xl text-[#146690] uppercase'>
//                                     Review
//                                 </h1>
//                                 <p className='py-8 text-sm font-light text-[#1b1b1b]'>
//                                     Through our review and revision period, we work to supply our customers with the perfect pairing of tape to fabric.
//                                 </p>
//                             </div>
//                             <div className='hidden lg:block'>
//                                 <img className='' src='./6.avif' alt='images'/>
//                             </div>
//                         </div>
//                     </TabPanel>
//                 </div>
//             </Box>
//     </>
//   )
// }