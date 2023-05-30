import {Table,TableCell,TableBody,TableContainer,TableRow,TableHead,Paper} from '@mui/material'

export const Information = () => {
  return (
    <TableContainer component= {Paper} sx={{maxWidth:'100%',height:'auto',margin:"20px auto"}}>
     <Table stickyHeader >
      <TableHead > 
        <TableRow >
          <TableCell>Id</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Gender</TableCell>
          <TableCell>Ip Address</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tableData.map((row) => (
          <TableRow key={row.id}>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.first_name}</TableCell>
        <TableCell>{row.last_name}</TableCell>
        <TableCell>{row.email}</TableCell>
        <TableCell>{row.gender}</TableCell>
        <TableCell>{row.ip_address}</TableCell>
        </TableRow>))}
      </TableBody>
     </Table>
    </TableContainer>
  )
}

export default Information

const tableData = [{
  "id": 1,
  "first_name": "Yolanda",
  "last_name": "Adamov",
  "email": "yadamov0@miibeian.gov.cn",
  "gender": "Non-binary",
  "ip_address": "61.146.212.121"
}, {
  "id": 2,
  "first_name": "Franz",
  "last_name": "Menere",
  "email": "fmenere1@godaddy.com",
  "gender": "Male",
  "ip_address": "156.44.184.4"
}, {
  "id": 3,
  "first_name": "Winnah",
  "last_name": "Auchinleck",
  "email": "wauchinleck2@miitbeian.gov.cn",
  "gender": "Genderfluid",
  "ip_address": "59.142.19.49"
}, {
  "id": 4,
  "first_name": "Bear",
  "last_name": "Carlon",
  "email": "bcarlon3@amazon.co.jp",
  "gender": "Male",
  "ip_address": "252.157.5.222"
}, {
  "id": 5,
  "first_name": "Auroora",
  "last_name": "Ritchley",
  "email": "aritchley4@naver.com",
  "gender": "Female",
  "ip_address": "46.58.200.185"
}, {
  "id": 6,
  "first_name": "Clerc",
  "last_name": "Bowick",
  "email": "cbowick5@cocolog-nifty.com",
  "gender": "Male",
  "ip_address": "159.26.113.212"
}, {
  "id": 7,
  "first_name": "Clarence",
  "last_name": "Troubridge",
  "email": "ctroubridge6@desdev.cn",
  "gender": "Male",
  "ip_address": "40.124.37.250"
}, {
  "id": 8,
  "first_name": "Lucia",
  "last_name": "Cantwell",
  "email": "lcantwell7@geocities.com",
  "gender": "Female",
  "ip_address": "101.4.135.175"
}, {
  "id": 9,
  "first_name": "Art",
  "last_name": "Derle",
  "email": "aderle8@bandcamp.com",
  "gender": "Male",
  "ip_address": "226.82.17.184"
}, {
  "id": 10,
  "first_name": "Dalis",
  "last_name": "Riddles",
  "email": "driddles9@youku.com",
  "gender": "Male",
  "ip_address": "51.146.247.183"
}, {
  "id": 11,
  "first_name": "Ingelbert",
  "last_name": "Yole",
  "email": "iyolea@4shared.com",
  "gender": "Male",
  "ip_address": "146.217.91.48"
}, {
  "id": 12,
  "first_name": "Marv",
  "last_name": "Puller",
  "email": "mpullerb@joomla.org",
  "gender": "Male",
  "ip_address": "96.13.232.88"
}, {
  "id": 13,
  "first_name": "Felicio",
  "last_name": "Challes",
  "email": "fchallesc@printfriendly.com",
  "gender": "Male",
  "ip_address": "250.63.154.78"
}, {
  "id": 14,
  "first_name": "Jacynth",
  "last_name": "Wreath",
  "email": "jwreathd@dropbox.com",
  "gender": "Female",
  "ip_address": "102.226.12.105"
}, {
  "id": 15,
  "first_name": "Ford",
  "last_name": "Thuillier",
  "email": "fthuilliere@abc.net.au",
  "gender": "Male",
  "ip_address": "84.94.162.128"
}, {
  "id": 16,
  "first_name": "Ted",
  "last_name": "Hucks",
  "email": "thucksf@mysql.com",
  "gender": "Female",
  "ip_address": "25.81.137.3"
}, {
  "id": 17,
  "first_name": "Averil",
  "last_name": "Biggin",
  "email": "abigging@bluehost.com",
  "gender": "Male",
  "ip_address": "209.111.53.110"
}, {
  "id": 18,
  "first_name": "Annora",
  "last_name": "Baguley",
  "email": "abaguleyh@businessweek.com",
  "gender": "Female",
  "ip_address": "1.185.169.174"
}, {
  "id": 19,
  "first_name": "Virgil",
  "last_name": "Robberts",
  "email": "vrobbertsi@paypal.com",
  "gender": "Male",
  "ip_address": "57.132.194.100"
}, {
  "id": 20,
  "first_name": "Cherilynn",
  "last_name": "Dundridge",
  "email": "cdundridgej@free.fr",
  "gender": "Female",
  "ip_address": "184.192.53.74"
}, {
  "id": 21,
  "first_name": "Lucky",
  "last_name": "Simoncelli",
  "email": "lsimoncellik@weebly.com",
  "gender": "Female",
  "ip_address": "50.184.223.93"
}, {
  "id": 22,
  "first_name": "Ariela",
  "last_name": "Spiers",
  "email": "aspiersl@ustream.tv",
  "gender": "Female",
  "ip_address": "73.79.244.248"
}, {
  "id": 23,
  "first_name": "Roi",
  "last_name": "Drexel",
  "email": "rdrexelm@123-reg.co.uk",
  "gender": "Male",
  "ip_address": "8.237.139.30"
}, {
  "id": 24,
  "first_name": "Ellwood",
  "last_name": "Ivison",
  "email": "eivisonn@amazon.co.uk",
  "gender": "Male",
  "ip_address": "20.54.43.107"
}, {
  "id": 25,
  "first_name": "Guinna",
  "last_name": "Armitage",
  "email": "garmitageo@time.com",
  "gender": "Female",
  "ip_address": "167.28.18.237"
}]
