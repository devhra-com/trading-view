import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Link,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import AdminAppBar from '../components/AdminAppBar';
import AdminToolbar from '../components/AdminToolbar';

const questions = [
  {
    id: 1,
    title: 'faq.questions.title1',
    answer: 'faq.questions.answer1',
  },
  {
    id: 2,
    title: 'faq.questions.title2',
    answer: 'faq.questions.answer2',
  },
  {
    id: 3,
    title: 'faq.questions.title3',
    answer: 'faq.questions.answer3',
  },
  {
    id: 4,
    title: 'faq.questions.title4',
    answer: 'faq.questions.answer4',
  },
  {
    id: 5,
    title: 'faq.questions.title5',
    answer: 'faq.questions.answer5',
  },
  {
    id: 6,
    title: 'faq.questions.title6',
    answer: 'faq.questions.answer6',
  },
];

function Faq() {
  const { t } = useTranslation();

  return (
    <>
      <AdminAppBar>
        <AdminToolbar />
      </AdminAppBar>
      <Container maxWidth="sm">
        <Typography align="center" marginBottom={6} variant="h2">
          {t('faq.title')}
        </Typography>
        {questions.map((question) => (
          <Accordion key={question.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography component="p" variant="h6">
                {t(question.title)}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">
                {t(question.answer)}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        <Link
          component={RouterLink}
          to={`${process.env.PUBLIC_URL}/admin/help`}
          variant="body2"
        >
          {t('faq.noAnswerLink')}
        </Link>
      </Container>
    </>
  );
}

export default Faq;
