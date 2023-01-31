
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pocetna from './komponente/Pocetna';
import NavBar from './komponente/NavBar';
import { useState } from 'react';
import Festivali from './komponente/Festivali';
import Omiljeni from './komponente/Omiljeni';
import Footer from './komponente/Footer';

function App() {
 const [omiljeniF,setOmiljeniF]=useState([]);
  const[sviFestivali]=useState([
{
  id:1,
  naziv:"Coachella",
  slika:"https://www.cornucopia-events.co.uk/wp-content/uploads/2016/02/coachella1.jpg",
  opis:"Festival muzike i umetnosti- Coachella, održava se u Kaliforniji, u dolini Coachella, u pustinji Kolorado. Okuplja različite žanrove muzike.",
  datum:"25.08.2023.",
  omiljeni:0
},
{
  id:2,
  naziv:"Exit",
  slika:"https://www.billboard.com/wp-content/uploads/2021/07/Benny-Gasi-exit-festival-2021-billboard-1548-1626297761.jpg",
  opis:"Exit je festival koji se svake godine održava na Petrovaradinskoj tvrđavi u Novom Sadu. Svake godine okupi veliki broj ljubitelja raznovrsne muzike",
  datum:"03.07.2023.",
  omiljeni:0
},
{
id:3,
naziv:"Tomorrowland",
slika:"https://www.tomorrowland.com/src/Frontend/Themes/tomorrowland/Core/Layout/images/timeline/2019-9.jpg",
opis:"Tomorrowland je festival elektrnonske muzike koji se održava u Beligiji, u gradu Bum.Ovo je festival sa najlepšim stejdžovima.",
datum:"07.09.2023.",
omiljeni:0

},
{id:4,
  naziv:"Awakenings",
  slika:"https://weraveyou.com/wp-content/uploads/2022/06/Awakenings-Festival-Press-by-TIM-BUITING.jpg",
  opis:"Awakening se svake godine održava u Amsterdamu. Neki od najpoznatijih dj-eva koji nastupaju su Indira Paganotto, Solomun, Dax J...",
  datum:"01.04.2023.",
  omiljeni:0
},
{
  id:5,
naziv:"Sonus",
slika:"https://www.croatiaweek.com/wp-content/uploads/2022/04/Sonus-festival-2019.jpg",
opis:"Sonus je festival koji se održava na plaži Zrće. Privlači veliki broj stranaca zbog svoje egzoitiče destinacije ali i izvanrednog lineup-a.",
datum:"29.08.2023.",
omiljeni:0
},
{
id:6,
naziv:"Sea Star",
slika:"https://www.exitfest.org/wp-content/uploads/2019/02/jutro_paul_kalkbrenner.jpg",
opis:"Sea Star je festival koji se svake godine održava na hrvatskom primorju. Veoma je poznat među mladim ljudima, a svake godine ima sve bolji lineup",
datum:"17.09.2023.",
omiljeni:0
},
{
  id:7,
naziv:"Sea Dance",
slika:"https://www.b92.net/news/pics/2022/07/26/206415138262e012f0b6177912247470_v4_big.jpg",
opis:"Sea Dance je festival koji se svake godine održava u Crnoj gori, na primorju. Okuplja veliki broj poznatih dj-eva kako inostranih tako i domaćih.",
datum:"07.06.2023.",
omiljeni:0
},
{
id:8,
naziv:"Lovefest",
slika:"https://www.euronews.rs/data/images/2021-08-04/23028_lovefest-fire-stage-2_f.jpg",
opis:"Lovefest je festival koji se svake godine održava u Vrnjačkoj banji. Sastoji se od 4 bine, a najpoznatija je Fire Stage.",
datum:"24.08.2023.",
omiljeni:0
},


]);

const [krterijumPretrage,setKriterijumPretrage]=useState("");

  function pretrazi(kriterijum){
    setKriterijumPretrage(kriterijum);
  }

function dodaj(id){
  for(var i=0;i<sviFestivali.length;i++){
    if(sviFestivali[i].id==id){
      sviFestivali[i].omiljeni=1;
    }
  }
  var niz = sviFestivali.filter((f)=>f.omiljeni==1);
  setOmiljeniF(niz);
}
function izbaci(id){
  for(var i=0;i<sviFestivali.length;i++){
    if(sviFestivali[i].id==id){
      sviFestivali[i].omiljeni=0;
    }
  }
  var niz = sviFestivali.filter((f)=>f.omiljeni==1);
  setOmiljeniF(niz);
}

  return (
    <div>
      <BrowserRouter>
      <NavBar pretrazi={pretrazi}></NavBar>
      <Routes>
        <Route path="/" element={<Pocetna></Pocetna>}></Route>
        <Route path="/festivali" element={<Festivali kriterijum={krterijumPretrage}  festivali={sviFestivali} dodaj={dodaj}></Festivali>}></Route>
        <Route path="/omiljeni" element={<Omiljeni kriterijum={krterijumPretrage}  festivali={omiljeniF} izbaci={izbaci}></Omiljeni>}></Route>
      </Routes>
     
      </BrowserRouter>
      <Footer></Footer>
      </div>
  );
}

export default App;
