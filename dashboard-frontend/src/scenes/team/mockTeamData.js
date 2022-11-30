import Button from '@mui/material/Button';

export const columns = [
  { field: "id", 
  headerName: "ID", 
  },
  {
    field: "fullName",
    headerName: "Full name",
    flex: 1,
  },
  {
   field: "age",
    headerName: "Age",
    type: "number",
    headerAlign: "left",
    align: "left",
  },
  {
    field: "role",
    headerName: "Role",
    flex: 1,
  },
  {
    field: "accessLevel",
    headerName: "Access",
    sortable: false,
    flex: 1,
    renderCell: params => (
        <Button
          variant="contained"
          size="small"
          sx={{ width: 250,}}
          disabled={params.row.role !== 'Admin'}
        >
          {params.row.role==='Admin'?'Access':'Locked'}
        </Button>
    )
  },
];

export const rows = [
  { id: 1, fullName: 'Robb Stark', age: 28, role: 'Admin' },
  { id: 2, fullName: 'Cersei Lannister', age: 45, role: 'Manager' },
  { id: 3, fullName: 'Jaime Lannister', age: 47, role: 'Staff' },
  { id: 4, fullName: 'Sansa Stark', age: 23, role: 'Staff' },
  { id: 5, fullName: 'Daenerys Targaryen', age: 32, role: 'Admin' },
  { id: 6, fullName: 'Red Melisandre', age: 180, role: 'Staff' },
  { id: 7, fullName: 'Ferrara Clifford', age: 41, role: 'Manager' },
  { id: 8, fullName: 'Rossini Frances', age: 39, role: 'Staff' },
  { id: 9, fullName: 'Harvey Roxie', age: 68, role: 'Staff' },
  { id: 10, fullName: 'Margaery Tyrell', age: 29, role: 'Staff' },
  { id: 11, fullName: 'Oberyn Martell', age: 40, role: 'Staff' },
  { id: 12, fullName: 'Theon Greyjoy', age: 30, role: 'Manager' },
  { id: 13, fullName: 'Sandor Clegane', age: 42, role: 'Staff' },
  { id: 14, fullName: 'Ramsay Bolton', age: 35, role: 'Staff' },
  { id: 15, fullName: 'Lyanna Mormont', age: 18, role: 'Staff' },
  { id: 16, fullName: 'Samwell Tarly', age: 32, role: 'Staff' },
  { id: 17, fullName: 'Yara Greyjoy', age: 33, role: 'Manager' },
  { id: 18, fullName: 'Wyman Manderly', age: 55, role: 'Staff' },
  { id: 19, fullName: 'Smalljon Umber', age: 38, role: 'Staff' },
  { id: 20, fullName: 'Davos Seaworth', age: 49, role: 'Staff' },
  { id: 21, fullName: 'Harrion Karstark', age: 27, role: 'Staff' },
  { id: 22, fullName: 'Galbart Glover', age: 61, role: 'Admin' },
];