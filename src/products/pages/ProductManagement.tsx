import React from 'react';
import { useTranslation } from 'react-i18next';
import AdminAppBar from '../../admin/components/AdminAppBar';
import AdminToolbar from '../../admin/components/AdminToolbar';
import ProductTable from '../components/ProductTable';
import useProducts from '../hooks/useProducts';

function ProductManagement() {
  const { t } = useTranslation();
  const { data } = useProducts();

  return (
    <>
      <AdminAppBar>
        <AdminToolbar
          title={t('productManagement.toolbar.title')}
          subtitle={t('productManagement.toolbar.subtitle')}
        />
      </AdminAppBar>
      <ProductTable products={data} />
    </>
  );
}

export default ProductManagement;
