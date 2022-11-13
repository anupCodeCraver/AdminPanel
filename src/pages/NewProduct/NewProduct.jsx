import "./newProduct.css"

export const NewProduct = () => {
  return (
    <div className="newProduct">
         <h3 className='newProductTitle'>New Product</h3>
         <span>Image</span>
            <form className="newProductForm">
                <div className="LblInputDiv">
                    <label>Name</label>
                    <input type="text" className='inputProduct' placeholder='Apple Airpods' />

                </div>
               
                <div className="LblInputDiv">
                    <label>Stock</label>
                    <input type="number" className='inputProduct' placeholder='123' />
                </div>
              
                <div className="SelectDiv">
                <span className='activeLabel'>Active</span>
                    <select className='newProductSelect' name="active" id="active">    
                        <option value="yes">Yes</option>    
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newProductbtn1">Create</button>
            </form>
    </div>
  )
}
