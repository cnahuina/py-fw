import { BackNavigation } from "./../../components/shared/BackNavigation"
import CoverProfile from "./../../assets/coverProfile.png"

import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';


export const ProfileViewController = () => {
    return (
        <>
            <BackNavigation />
            <div className="coverProfile">
                <img src={"https://fasterwaybackoffice.com/accounts/default1/files/Untitled%20design.png"} alt="" />
            </div>
            <div className="cardModal">
                <div className="headerModal">
                    <div className="text">
                        <h2>Sarah</h2>
                        <p>Your Expert Coach</p>
                    </div>
                    <a href="#" className="btn-primary">Contact</a>
                </div>
                <Accordion>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                About your coach                            
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                               lorem
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Contact information
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                               lorem.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Certifications
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="containerAccordion">
                                <div className="tag">Wellness</div>
                                <div className="tag">Wellness</div>

                                <div className="tag">Nutrition</div>
                                <div className="tag">Nutrition</div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    )
}