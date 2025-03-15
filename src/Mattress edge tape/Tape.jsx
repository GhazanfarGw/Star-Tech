import React from 'react'
import { useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Climate() {
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };

  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <>
        <Box 
            className="mx-auto justify-between"
            >
                <h1 className='md:text-4xl text-2xl md:py-10 font-displace max-w-screen-xl mx-auto md:px-10 px-5'>
                    Mattress Tape Styles
                </h1>
                <div className='items-center text-left bg-[#146690] pt-10 mt-10 pb-52'>
                    <Tabs className='border-[#fff] border-b border-opacity-20 max-w-screen-xl mx-auto'
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        aria-label="scrollable force tabs example"
                    >
                        <Tab
                            label="Mattress Twill Tape" {...a11yProps(0)}
                            sx={{
                                
                                fontSize: { xs: 16, md: 16, },
                                
                                textAlign: 'left',
                                color: '#E0E0E9',
                                paddingBottom:{xs: 3, md: 7,},
                                fontWeight: 'bold',
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    color: '#fff', // Change the text color to #146690 for the selected tab
                                }
                            }}
                        />
                        <Tab
                            label="Stripe Mattress Tape"
                            {...a11yProps(1)}
                            sx={{
                                paddingBottom:{xs: 3, md: 7,},
                                textAlign: 'left',
                                color: '#E0E0E9',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    color: '#fff', // Change the text color to #146690 for the selected tab
                                }
                            }}
                        />
                        <Tab 
                            label="Wave Mattress Tape" {...a11yProps(2)}
                            sx={{
                                paddingBottom:{xs: 3, md: 7,},
                                textAlign: 'left',
                                color: '#E0E0E9',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    color: '#fff', // Change the text color to #146690 for the selected tab
                                }
                            }}
                        />
                        <Tab 
                            label="Diamond Mattress Tape" {...a11yProps(3)}
                            sx={{
                                paddingBottom:{xs: 3, md: 7,},
                                textAlign: 'left',
                                color: '#E0E0E9',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    color: '#fff', // Change the text color to #146690 for the selected tab
                                }
                            }}
                        />
                        <Tab 
                            label="Chessboards Mattress Tape" {...a11yProps(4)}
                            sx={{
                                paddingBottom:{xs: 3, md: 7,},
                                textAlign: 'left',
                                color: '#E0E0E9',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    color: '#fff', // Change the text color to #146690 for the selected tab
                                }
                            }}
                        />
                    </Tabs>
                </div>

                <div className='mx-auto max-w-screen-xl justify-center md:px-10 px-5 items-center'>
                    <TabPanel value={value} index={0}>
                        <div className='lg:flex items-center justify-between rounded-md gap-10 border md:-mt-40 -mt-44 bg-white'>
                            <div className='lg:hidden block'>
                                <img className='' src='././Bold-Beautiful-Black-Bedroom-Inspirations-Preview.jpg' alt='images'/>
                            </div>
                            <div className='md:px-20 md:max-w-xl px-5 md:pb-0 lg:pb-0 pb-5'>
                                <h1 className='lg:pt-5 pt-3 md:text-4xl text-2xl text-[#146690]'>
                                    Mattress Twill Tape
                                </h1>
                                <p className='py-8 text-sm font-light text-[#1b1b1b]'>
                                    Mattress twill tape weaving pattern is beveled, and the material more often use polyester, cotton, or combed etc. The weaving width is around 25~42mm. Mattress twill tape is one of the more common ones on the market. It provides strong edge support and durability. Available in multiple colors and designs to match different mattress styles. Can be designed according to customer samples and preferences.
                                </p>
                            </div>
                            <div className='hidden lg:block'>
                                <img className='' src='././Bold-Beautiful-Black-Bedroom-Inspirations-Preview.jpg' alt='images'/>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                        <div className='lg:flex items-center justify-between rounded-md gap-10 border md:-mt-40 -mt-44 bg-white'>
                            <div className='lg:hidden block'>
                                <img className='' src='./Bold-Beautiful-Black-Bedroom-Inspirations-Preview.jpg' alt='images'/>
                            </div>
                            <div className='md:px-20 md:max-w-xl px-5 md:pb-0 lg:pb-0 pb-5'>
                                <h1 className='lg:pt-5 pt-3 md:text-4xl text-2xl text-[#146690]'>
                                    Stripe Mattress Tape
                                </h1>
                                <p className='py-8 text-sm font-light text-[#1b1b1b]'>
                                    Stripe mattress tape features a linear design, offering a modern aesthetic with durable materials for long-lasting use. The stripes can be customized in different widths and colors to suit various mattress designs. It provides a clean and structured look while maintaining flexibility and strength.
                                </p>
                            </div>
                            <div className='hidden lg:block'>
                                <img className='' src='./Bold-Beautiful-Black-Bedroom-Inspirations-Preview.jpg' alt='images'/>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className='lg:flex items-center justify-between rounded-md gap-10 border md:-mt-40 -mt-44 bg-white'>
                            <div className='lg:hidden block'>
                                <img className='' src='./Bold-Beautiful-Black-Bedroom-Inspirations-Preview.jpg' alt='images'/>
                            </div>
                            <div className='md:px-20 md:max-w-xl px-5 md:pb-0 lg:pb-0 pb-5'>
                                <h1 className='lg:pt-5 pt-3 md:text-4xl text-2xl text-[#146690]'>
                                    Wave Mattress Tape
                                </h1>
                                <p className='py-8 text-sm font-light text-[#1b1b1b]'>
                                    Wave mattress tape has a flowing pattern that enhances mattress edges with a soft and stylish appearance. Its wavy texture allows for better adaptability around curved edges, making it a preferred choice for luxury mattresses. Available in a variety of wave designs and material compositions for added comfort and durability.
                                </p>
                                <br/>
                                <p className='text-sm font-light text-[#5e5e5e]'>
                                    *In case of any issue or problem do not hesitate to call 938                            
                                </p>
                            </div>
                            <div className='hidden lg:block'>
                                <img className='' src='./Bold-Beautiful-Black-Bedroom-Inspirations-Preview.jpg' alt='images'/>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={3}>
                        <div className='lg:flex items-center justify-between rounded-md gap-10 border md:-mt-40 -mt-44 bg-white'>
                            <div className='lg:hidden block'>
                                <img className='' src='./Bold-Beautiful-Black-Bedroom-Inspirations-Preview.jpg' alt='images'/>
                            </div>
                            <div className='md:px-20 md:max-w-xl px-5 md:pb-0 lg:pb-0 pb-5'>
                                <h1 className='lg:pt-5 pb-5 pt-3 md:text-4xl text-2xl text-[#146690]'>
                                    Diamond Mattress Tape
                                </h1>
                                <a className='py-8 text-sm font-light text-[#1b1b1b]'>
                                    Diamond mattress tape incorporates a geometric design for a more elegant and reinforced mattress finish. Its interlocking diamond pattern offers extra stability and a high-end look. Designed for both functional and decorative purposes, it enhances the overall strength of the mattress while adding a touch of sophistication.
                                </a>
        
                            </div>
                            <div className='hidden lg:block'>
                                <img className='' src='./Bold-Beautiful-Black-Bedroom-Inspirations-Preview.jpg' alt='images'/>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={4}>
                    <div className='lg:flex items-center justify-between rounded-md gap-10 border md:-mt-40 -mt-44 bg-white'>
                        <div className='lg:hidden block'>
                            <img className='' src='./Bold-Beautiful-Black-Bedroom-Inspirations-Preview.jpg' alt='images'/>
                        </div>
                        <div className='md:px-20 md:max-w-xl px-5 md:pb-0 lg:pb-0 pb-5'>
                            <h1 className='lg:pt-5 pb-5 pt-3 md:text-4xl text-2xl text-[#146690]'>
                                Chessboards Mattress Tape
                            </h1>
                            <a className='py-8 text-sm font-light text-[#1b1b1b]'>
                                Chessboards mattress tape has a checkered pattern, adding a unique and sturdy design to mattress edges. This tape is commonly used in high-quality mattresses to provide a distinctive and visually appealing border. Its strong structure ensures durability while allowing customization in color and size
                            </a>
                        </div>
                        <div className='hidden lg:block'>
                            <img className='' src='./Bold-Beautiful-Black-Bedroom-Inspirations-Preview.jpg' alt='images'/>
                        </div>
                    </div>
                    </TabPanel>
                </div>
            </Box>
    </>
  )
}