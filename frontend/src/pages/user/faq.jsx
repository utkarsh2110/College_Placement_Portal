import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../../styles/user/faq.css'


export default function FAQ() {
  return (
    <div className='faq'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='accord'
          sx={{borderRadius: 1}}
        >
          How can I address my queries?
        </AccordionSummary>
        <AccordionDetails className='summary'>
          You can use your personal chatbot, PlacementPal, which is located at the bottom right corner of your dashboard, for any inquiries. If your queries are not resolved through PlacementPal, you can click on "Ask your coordinator" available on the left navbar of your dashboard, for further assistance.
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel2-content"
          id="panel1-header"
          className='accord'
        >
          I don't have a CGPA above 75%. Can I still participate in campus placements?
        </AccordionSummary>
        <AccordionDetails className='summary'>
          Absolutely, you can still apply for placements. Not all companies enforce a minimum CGPA requirement, and many consider a combination of skills, experience, and other factors. It's advisable to explore opportunities and apply to a diverse range of companies to maximize your chances of securing a position.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel3-content"
          id="panel1-header"
          className='accord'
        >
          I don't have marks above 75% in either my 10th or 12th grade (or both). Can I still participate in campus placements?
        </AccordionSummary>
        <AccordionDetails className='summary'>
          Absolutely, you can still participate in placements. Not all companies have a minimum grade requirement, and many consider a holistic evaluation, including skills, achievements, and interview performance. It's advisable to explore various opportunities and apply to companies that prioritize a diverse range of qualifications.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel4-content"
          id="panel1-header"
          className='accord'
        >
          What is the eligibility criteria for participating in placements?
        </AccordionSummary>
        <AccordionDetails className='summary'>
          The eligibility criteria for participating in placements may vary for different companies. It's advisable to refer to the job descriptions (JDs) provided by each company to understand their specific requirements as a general guideline, there is no strict CGPA requirement, but maintaining a CGPA above 3.0 is recommended. What matters most are your skills and capabilities. Focus on honing your technical and soft skills, as they play a crucial role in the selection process.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel5-content"
          id="panel1-header"
          className='accord'
        >
          Where can I get updates regarding Placement?
        </AccordionSummary>
        <AccordionDetails className='summary'>
          You can get updates regarding placements by checking the Home tab of your student dashboard. The placement department sends notifications whenever there is an update regarding placement activities, events, or job opportunities. Keep an eye on your dashboard to stay informed about the latest developments.
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel6-content"
          id="panel1-header"
          className='accord'
        >
          Where can I get updates regarding Training sessions conducted by Placement cell?
        </AccordionSummary>
        <AccordionDetails className='summary'>
          You can get updates regarding placements by checking the Home tab of your student dashboard. The placement department sends notifications whenever there is a training session. Keep an eye on your dashboard to stay informed about the latest developments.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel7-content"
          id="panel1-header"
          className='accord'
          sx={{borderBottomRightRadius: 2, borderBottomLeftRadius: 2}}
        >
          What is the selection process followed by different companies?
        </AccordionSummary>
        <AccordionDetails className='summary'>
          The selection process followed by different companies can vary, but it commonly includes stages such as resume screening, aptitude tests, technical interviews, HR interviews, and sometimes group discussions or case studies. Specific details about the selection process will be provided to you by the Placement cell.
        </AccordionDetails>
      </Accordion>


    </div>
  );
}