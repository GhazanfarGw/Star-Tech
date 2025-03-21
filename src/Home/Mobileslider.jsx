import React, { useState, useEffect } from 'react';

const slides = [
    {
        eachSlide: 'url(./Welcome.jpg)',
        heading: 'Welcome to the Startech',
        text:' We are experts in the manufacturing products of various industries. at the startech, we have more than 25 years of manufacturing experience'
    },

    {
        eachSlide: 'url(./MattressEdgeTape.jpg)',
        heading: 'Mattress Edge Tapes',
        text: 'Revolutionizing mattress fabrics. Comfort that’s always with you...'
    },

    {
        eachSlide: 'url(./MatressFabric.jpg)',
        heading: "Mattress Fabric",
        text:"Mattress Fabrics are manufactured with special series cotton, viscose, polyester and polypropylene yarns..."
    },

    {
        eachSlide: 'url(./SofaElasticWebbing.jpg)',
        heading: 'Safe Elastic Webbing',
        text:"Elastic Webbing Our range of Elastic Webbing provided to customers are knitted and dyed variety that caters to the needs of sofa, bed, sports clothing, and various other kinds of industries."
    },
];

const Dashboard = () => {
    const [active, setActive] = useState(0);
    const max = slides.length;

    const intervalBetweenSlides = () => setActive(active === max - 1 ? 0 : active + 1)

    useEffect(() => {
        const interval = setInterval(() => intervalBetweenSlides(), 8000);
        return () => clearInterval(interval);
    }, [active]);

    const nextOne = () => active < max - 1 && setActive(active + 1)

    const prevOne = () => active > 0 && setActive(active - 1)

    const isActive = value => active === value && 'active'

    const setSliderStyles = () => {
        const transition = active * - 100;
        
        return {
          width: ( slides.length * 100 ) + 'vw',
          transform: 'translateX(' + transition + 'vw)'
        }
    }

    const renderSlides = () => slides.map((item, index) => (
        <div 
            className='each-slide items-center' 
            key={ index } 
            style={{ backgroundImage: item.eachSlide }}>
            <div 
            className='text-white bg-black relative top-0 bottom-0 bg-opacity-50 xl:mx-44 xl:my-52 xl:py-32 lg:mx-20 lg:my-40 lg:py-20 md:my-60 md:py-32 md:mx-20 my-60 py-16 mx-10 px-5 items-center justify-center text-center'>
                <h1 className="slide-heading xl:text-6xl lg:text-5xl md:text-4xl text-2xl text-white md:max-w-2xl mx-auto justify-center font-displace">{item.heading}</h1>
                <p className="slide-text xl:text-lg lg:text-base md:text-base text-sm py-5 max-w-screen-md mx-auto justify-center ">{item.text}</p>
            </div>
        </div> 
    ));

    const renderDots = () => slides.map((slide, index) => (
        <li 
            className={ isActive(index) + ' dots' }   
            key={ index }>
                <button onClick={ () => setActive(index) }>
                <span style={{ color: isActive(index) ? '#403F68' : '#FFFFFF' }}>{/* Green for active, white for inactive */} &#9679;</span>
                </button>
        </li> 
    ));

    const renderArrows = () => (
        <React.Fragment>
            <button 
                type='button'
                className='arrows prev md:px-5' 
                onClick={ () => prevOne() } >
                <svg fill='#ffffff' width='50' viewBox='0 0 24 24'>
                    <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/>
                    <path d='M0 0h24v24H0z' fill='none'/>
                </svg>
            </button>
            <button 
                type='button'
                className='arrows next md:px-5' 
                onClick={ () => nextOne() } > 
                <svg fill='#ffffff' viewBox='0 0 24 24' width='50'>
                    <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/>
                    <path d='M0 0h24v24H0z' fill='none'/>
                </svg>
            </button>
        </React.Fragment>
    )

    return (
        <section className='slider'>
            <div 
                className='wrapper' 
                style={ setSliderStyles() }>
                { renderSlides() }
            </div>
            { renderArrows() }
            <ul className='dots-container'>
                { renderDots() }
            </ul>
        </section>
    );
};

  export default Dashboard;