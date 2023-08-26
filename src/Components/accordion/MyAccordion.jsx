import { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from '@emotion/styled';


const SmallButton = styled(Button)`
  padding: 4px 8px;
  font-size: 10px;
  min-width: initial;
`;

const MyAccordion = ({ question, answer }) => {

  const [show, setShow] = useState(false);

  return (
    <>

      <div className="content mb-3">

        <div className="main-heading">

          <SmallButton variant='contained' size='' className='btn rounded-circle me-3 ' onClick={() => setShow(!show)}> {show ? <RemoveIcon /> : <AddIcon fontSize='small' />} </SmallButton>
          <h6 className='ques'>{question}</h6>

        </div>

        {show && <p className='ans'>{answer}</p>}
      </div>
    </>
  )
}

export default MyAccordion