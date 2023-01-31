import Kartica from "./Kartica";

function Omiljeni({festivali,kriterijum,izbaci}) {
    return (
    <div className="row">
        {kriterijum==""
        ?
        festivali.map((f)=> <div   key={f.id} className="col-sm-3"><Kartica  key={f.id} f={f} mod={2} izbaci={izbaci}></Kartica><br /></div>)
        :
        <>
        {festivali
        .filter((f)=>f.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((f)=> <div   key={f.id} className="col-sm-3"><Kartica  key={f.id} f={f} mod={2} izbaci={izbaci}></Kartica><br /></div>)}

        </>
        }
           
      </div>
    );
  }
  
  export default Omiljeni;