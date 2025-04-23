import React, { useEffect, useState } from 'react'
import { DeleteData, FeactData } from '../feature/Creteslice';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';


import './view.css'
import axios from 'axios';
import Nav from './Nav';
function View() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()


const [filterdata,setfilterdata]=useState([])
  const { StudentLmsData } = useSelector((state) => state.StudentLmsData)
  console.log(StudentLmsData);
  

  console.log(location);
  useEffect(() => {
    dispatch(FeactData())
  }, [location])

  const handleDelete = async (id) => {
    await dispatch(DeleteData(id));
    dispatch(FeactData());
  
    if (filterdata.length > 0) {
      const filterclass = filterdata[0]?.std;
      filterdata1(filterclass);
    }
  };
  
  const filterdata1=(filterclass)=>{

    const filterlmsdata=StudentLmsData.filter((val)=>val.std == filterclass)
console.log(filterdata);

setfilterdata(filterlmsdata)
  }

   const checkLogin = async () => {
            try {
              const res = await axios.get('http://localhost:3000/login');
          console.log(res.data);
          if (res.data.length === 0) {
            navigate('/login');
          } else {
            navigate('/view');
          }
            } catch (error) {
              console.error('Error checking login:', error);
              navigate('/login'); 
            }
          };
          useEffect(()=>{
            checkLogin();
          
          },[navigate])
  return (
    <div>
      
      <Nav/>
      <button className='AddButton' onClick={()=>navigate('/add')}>Add New<i class="fa-solid fa-plus"></i></button>
      <div className="button-row">
  <button   onClick={()=>filterdata1(1)}>1</button>
  <button   onClick={()=>filterdata1(2)}>2</button>
  <button   onClick={()=>filterdata1(3)}>3</button>
  <button   onClick={()=>filterdata1(4)}>4</button>
  <button   onClick={()=>filterdata1(5)}>5</button>
  <button   onClick={()=>filterdata1(6)}>6</button>
  <button   onClick={()=>filterdata1(7)}>7</button>
  <button   onClick={()=>filterdata1(8)}>8</button>
  <button   onClick={()=>filterdata1(9)}>9</button>
  <button   onClick={()=>filterdata1(10)}>10</button>
  <button   onClick={()=>filterdata1(11)}>11</button>
  <button  onClick={()=>filterdata1(12)}>12</button>
</div>

      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: '20px' }}>

          
          
          {(Array.isArray(filterdata) && filterdata.length > 0
  ? filterdata
  : Array.isArray(StudentLmsData)
    ? StudentLmsData
    : []
).map((val, index) => (

            <div
              key={index}
              style={{
                padding: '20px',
                borderRadius: '12px',
                background: 'white',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
            >
              {/* Website icon with fallback */}
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  backgroundColor: '#f0f2f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                {val.url ? (
                  <img
                    src={val.url}
                    alt="Website Icon"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJDNi40NzcgMiAyIDYuNDc3IDIgMTJzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTBTMTcuNTIzIDIgMTIgMnptLTEgMTVoMnYyaC0ydi0yem0wLTEzaDJ2MTBoLTJWNHoiLz48L3N2Zz4=';
                    }}
                  />
                ) : (
                  <div style={{ color: '#666', fontSize: '24px' }}>🌐</div>
                )}
              </div>
          
              {/* Text Content */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <h3 style={{ margin: 0, color: '#333', fontSize: '18px', fontWeight: '600' }}>
                    {val.name}
                  </h3>
                  {val.std && (
                    <span
                      style={{
                        backgroundColor: '#e3f2fd',
                        color: '#1976d2',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '500',
                      }}
                    >
                      Std: {val.std}
                    </span>
                  )}
                </div>
          
                <div
                  style={{
                    display: 'grid',
                    gap: '6px',
                    marginBottom: '12px',
                    fontSize: '14px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#666', minWidth: '60px' }}>Email:</span>
                    <span style={{ color: '#333', fontWeight: '500' }}>{val.email}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#666', minWidth: '60px' }}>Password:</span>
                    <span
                      style={{
                        fontFamily: 'monospace',
                        letterSpacing: '1px',
                        backgroundColor: '#f5f5f5',
                        padding: '2px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      {val.password}
                    </span>
                  </div>
                </div>
          
                {/* Buttons */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={() => navigate('/edit', { state: val })}
                    style={{
                      backgroundColor: '#fff',
                      color: '#ff9800',
                      border: '1px solid #ff9800',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'all 0.2s',
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(val.id)}
                    style={{
                      backgroundColor: '#fff',
                      color: '#f44336',
                      border: '1px solid #f44336',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'all 0.2s',
                    }}
                  >
                    Delete
                  </button>
                  {val.url && (
                    <a
                      href={val.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        marginLeft: 'auto',
                        backgroundColor: '#fff',
                        color: '#2196f3',
                        border: '1px solid #2196f3',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: '500',
                        transition: 'all 0.2s',
                      }}
                    >
                      Visit Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>


    </div>
  )
}

export default View