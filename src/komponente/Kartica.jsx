
function Kartica({f,dodaj,mod,izbaci}) {


    return (
    <div className="card"   >
        <h5 className="card-title">{f.naziv}</h5>
        <img src={f.slika} className="card-img-top" alt="..."/>
        <div className="card-body">
          
          <p className="card-text">{f.opis} <br /> Datum: {f.datum}</p>
          {mod==1 ?
            <button className="btn btn-primary" onClick={()=>dodaj(f.id)}>Dodaj u omiljene</button>
            :
            <button className="btn btn-danger" onClick={()=>izbaci(f.id)}>Izbaci iz omiljenih</button>

          }
        </div>
      </div>
    );
  }
  
  export default Kartica;
