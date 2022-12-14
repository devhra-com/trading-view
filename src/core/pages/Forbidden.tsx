import React from 'react';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { ReactComponent as ForbiddenSvg } from '../assets/403.svg';
import Result from '../components/Result';

function Forbidden() {
  const { t } = useTranslation();

  return (
    <Result
      extra={
        <Button
          color="secondary"
          component={RouterLink}
          to={`${process.env.PUBLIC_URL}/admin`}
          variant="contained"
        >
          {t('common.backHome')}
        </Button>
      }
      image={<ForbiddenSvg />}
      maxWidth="sm"
      subTitle={t('common.errors.forbidden.subTitle')}
      title={t('common.errors.unexpected.title')}
    />
  );
}

export default Forbidden;
