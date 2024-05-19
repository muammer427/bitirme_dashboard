import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./magazalar.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { userRows } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  
  {
    field: "MagazaIsim",
    type: "string",
    headerName: "Mağaza İsmi",
    width: 300,
  },
  {
    field: "ApiKey",
    type: "string",
    headerName: "API Key",
    width: 300,
  },
  {
    field: "ApiSecret",
    type: "string",
    headerName: "API Secret",
    width: 300,
  },
  {
    field: "SaticiId",
    type: "string",
    headerName: "Satıcı Id",
    width: 300,
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1>Mağazalar</h1>
        <button onClick={() => setOpen(true)}>Mağaza ekle</button>
      </div>
      <DataTable slug="mağazalar" columns={columns} rows={userRows} />
    
      {open && <Add slug="Mağaza" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
