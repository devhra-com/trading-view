import React from 'react';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import { Product } from '../types/Product';
import PriceLogo from '../../core/components/PriceLogo';
import SvgContainer from '../../core/components/SvgContainer';

interface EnhancedTableProps {
  products: Product[];
}

function EnhancedTableHead({ products }: EnhancedTableProps) {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <TableHead>
      <TableRow sx={{ '& th': { border: 0 } }}>
        <TableCell sx={{ py: 0 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <SvgContainer>
              <PriceLogo size={50} />
            </SvgContainer>
            <Box sx={{ alignItems: 'baseline' }}>
              <Typography component="div" variant="h4">
                {t(`productManagement.table.contactus`)}
              </Typography>
              <Button className="Contact-button" endIcon={<ArrowForwardIcon />}>
                {t(`productManagement.table.getstarted`)}
              </Button>
            </Box>
          </Box>
        </TableCell>
        {products.map((product) => (
          <TableCell align="left" key={product.id}>
            <Box
              sx={{
                alignItems: 'middle',
                color: parseInt(product.id, 10) === 3 ? 'white' : 'GrayText',
              }}
            >
              <Typography variant="h6">
                {t(`productManagement.table.headers.${product.id}`)}
              </Typography>
              <Typography variant="h5">
                {product.price}$ /{t(`productManagement.table.month`)}
              </Typography>
              {parseInt(product.id, 10) !== 3 && (
                <Button
                  className="Choose-plan"
                  variant="contained"
                  size="small"
                >
                  {t(`productManagement.table.chooseplan`)}
                </Button>
              )}
            </Box>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

type ProductRowProps = {
  index: number;
  product: Product;
  products: Product[];
};

function ProductRow({ index, product, products }: ProductRowProps) {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <TableRow hover className="MuiTableRow-spec" tabIndex={-1} key={product.id}>
      <TableCell className="MuiTabCell-spec" align="left" color="white">
        {t(`productManagement.table.types.${index}`)}
      </TableCell>
      {products.map((rowProduct) => (
        <TableCell key={rowProduct.id} align="center">
          {Object.values(rowProduct.types[index])[0] ? (
            <CheckCircleIcon
              sx={{
                color:
                  parseInt(rowProduct.id, 10) === 3
                    ? 'white'
                    : `${theme.palette.secondary.light}`,
              }}
            />
          ) : (
            <HighlightOffIcon
              sx={{
                color:
                  parseInt(rowProduct.id, 10) === 3 ? '#455A64' : 'primary',
              }}
            />
          )}
        </TableCell>
      ))}
    </TableRow>
  );
}

type ProductTableProps = {
  products?: Product[];
};

function ProductTable({ products = [] }: ProductTableProps) {
  const { t } = useTranslation();
  return (
    <TableContainer>
      <Table
        className="MuiTable-spec"
        aria-labelledby="tableTitle"
        sx={{
          minWidth: 600,
          borderCollapse: 'separate',
        }}
      >
        <EnhancedTableHead products={products} />
        <TableBody className="MuiTableBody-spec">
          {products.map((product, index) => (
            <ProductRow
              index={index}
              key={product.id}
              product={product}
              products={products}
            />
          ))}
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell align="center">
              <Button
                className="Choose-plan-bottom"
                variant="contained"
                fullWidth
              >
                {t(`productManagement.table.chooseplan`)}
              </Button>
            </TableCell>
            <TableCell />
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductTable;
