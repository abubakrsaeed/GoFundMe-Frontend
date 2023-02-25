import React from 'react';
import {Header} from '../components/Header'
import {HeroSection} from '../components/HeroSection'
import {TopFundraisers} from '../components/TopFundraisers'
import {Footer} from '../components/Footer'
import {Tabs} from '../components/Tabs'
import {FindFundraiser} from '../components/FindFundraiser'
import {Leader} from '../components/Leader'

function HomePage () {
    return(
        <div>
        <Header/>
        <HeroSection/>
        <TopFundraisers/>
        <Leader/>
        <FindFundraiser/>
        <Tabs/>
        <Footer/>
        </div>
    )

}

export { HomePage };