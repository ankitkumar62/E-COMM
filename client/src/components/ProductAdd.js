import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {

  let url = 'http://localhost:5000/add-product';
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState(false);
  const [file, setFile] = useState();
  const navigate = useNavigate();
  const [previewUrl, setPreviewUrl] = useState(null); 
  const handleChange = (event)=> {
    
    const selectedFile = event.target.files[0];
    setFile(selectedFile)
   setPreviewUrl(URL.createObjectURL(selectedFile));
}

  const nave = () =>{
    setName('');
    setCategory('');
    setPrice('');
    setCompany('');
    setFile(null);
    setPreviewUrl(null);
   
  }
  const handleSubmit = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return;
    }
    console.log(file,name,price,category,company);
    const formData = new FormData();
    formData.append('file',file)
    formData.append('name',name)
    formData.append('price',price)
    formData.append('category',category)
    formData.append('company',company)

    try {
      const result = await fetch(url,{
        method: 'POST',
        body: formData,
       });

     
    } catch (error) {
     
      console.error('Fetch error:', error);
    }
  };
  const handleCombinedClicks = () => {
    handleSubmit();
    nave();
    
  };

  return (
    <>
      <div className="register_form">
        
        <div className='box1'>
        <div className="upload__box">
  <div className="upload__btn-box">
    <label className="upload__btn">
      <img className='uplo' src='https://th.bing.com/th/id/OIP.djrHhPrOVynppSdGJ2dtPgHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7' />
      <input type="file"  multiple=""
        className="upload__inputfile" name="file" onChange={handleChange} />
        {previewUrl && <img className='product-img' src={previewUrl} alt="Preview" />}
    </label>
  </div>

</div>

              {/* <input type="file"  multiple=""
        data-max_length={20}
        className="upload__inputfile" name="file" onChange={handleChange} />
              {previewUrl && <img className='product-img' src={previewUrl} alt="Preview" />} */}
            
        </div>
        <div className="form_box">
          <h2 className="h-register">ADD Product</h2>
          <ul className="register-ul">
            <li>
              <span><i className="fa-solid fa-user fa-2xl"></i></span>
              <input type="text" className="registerbox" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" />
            </li>
            <li>

              <span><i className="fa-solid fa-money fa-2xl"></i></span>
              <input type="text" className="registerbox" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price" />
            </li>
            <li>
              <span><i className="fa-solid fa-filter fa-2xl"></i></span>
              <input type="text" className="registerbox" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Category" />
            </li>
            <li>
              <span><i className="fa-solid fa-building fa-2xl"></i></span>
              <input type="text" className="registerbox" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Company" />
            </li>
          </ul>


          <button type="button" onClick={handleCombinedClicks} className="button-29">ADD</button>
        </div>
      </div>











      
    </>
  )
}

export default Products