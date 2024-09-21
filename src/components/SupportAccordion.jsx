import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';



const SupportAccordion = () => {

    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className='flex flex-col gap-2'>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography><p className='font-semibold'>How do I start a conversation?</p></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        After signing in, you can search for or add contacts. Select a contact and start a conversation by sending a message.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography><p className='font-semibold'>Can I create group chats?</p></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, you can create group chats by adding multiple contacts to a conversation. Everyone in the group can send and receive messages in real-time.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography><p className='font-semibold'>Can I customize the app for my own use?</p></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, the app is open-source, so you are free to modify it to fit your needs. You can fork the repository on GitHub and make your own changes.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography><p className='font-semibold'>What should I do if I encounter a bug?</p></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        If you find a bug, report it to my email <a className='font-semibold text-textColor' href="mailto:mhjim.info@gmail.com?body=My custom mail body">mhjim.info@gmail.com</a> with a detailed description and, if possible, steps to reproduce the issue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography><p className='font-semibold'>What makes this messenger app unique?</p></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This is an open-source, real-time messaging app that focuses on providing a simple and customizable communication platform. Unlike traditional apps, you can tweak it to suit your needs.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default SupportAccordion