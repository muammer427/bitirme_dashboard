import { useState } from "react";
import "./Products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Resim",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "barcode",
    type: "string",
    headerName: "Barkod No",
    width: 150,
  },
  {
    field: "title",
    type: "string",
    headerName: "Başlık",
    width: 250,
  },
  {
    field: "description",
    headerName: "Ürün Açıklaması",
    width: 200,
    type: "string",
  },
  
  {
    field: "productcode",
    type: "number",
    headerName: "Ürün Kodu",
    width: 200,
  },
  {
    field: "brand",
    headerName: "Marka",
    type: "string",
    width: 200,
  },
  {
    field: "category",
    headerName: "Kategori",
    width: 200,
    type: "string",
  },
  {
    field: "Stock",
    headerName: "Stok Miktarı",
    width: 150,
    type: "integer",
  },
  {
    field: "desi",
    headerName: "Desi Miktarı",
    width: 200,
    type: "string",
  },
  {
    field: "currency",
    headerName: "Para Birimi",
    width: 200,
    type: "string",
  },
  {
    field: "listprice",
    headerName: "Liste Fiyatı",
    width: 200,
    type: "string",
  },
  {
    field: "saleprice",
    headerName: "Satış Fiyatı",
    width: 200,
    type: "string",
  },
  {
    field: "cargo",
    headerName: "Kargo Şirketi",
    width: 200,
    type: "string",
  },
  {
    field: "vatrate",
    headerName: "KDV Oranı",
    width: 200,
    type: 'singleSelect',
    valueOptions: ['0', '5', '10','15','20']
  },
  {
    field: "categoriAttributes",
    headerName: "Kategori Özellikleri",
    width: 200,
    type: "string",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>Ürünler</h1>
        <button onClick={() => setOpen(true)}>Yeni ürün ekle</button>
        <button onClick={() => setOpen(true)}>Yayınla</button>
      </div>
      <DataTable slug="Ürünler" columns={columns} rows={products} />
      
      {open && <Add slug="Ürün" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
