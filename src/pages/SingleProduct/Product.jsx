import Charts from "../../components/chart/Charts"
import "./product.css";
import { productData } from '../../dummyData'
import { Link } from "react-router-dom";
import { Publish } from "@mui/icons-material";


export const Product = () => {

    return (
        <div className="productContainer">
            <div className="productTitleContainer">
                <h4 className="productTitle">Product</h4>
                <Link to='/newproduct'>
                    <button className="createbutton">Create</button>
                </Link>

            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Charts className="ChartLib" dataKey="Sales" data={productData} title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productinfotop">
                        <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Apple_AirPods_Pro_6.jpg" alt="" className="productimg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productinfobottom">
                        <div className="productInfodiv">
                            <span className="attr">Id:</span>
                            <span className="attrVal">123</span>
                        </div>
                        <div className="productInfodiv">
                            <span className="attr">sales:</span>
                            <span className="attrVal">6271</span>
                        </div>
                        <div className="productInfodiv">
                            <span className="attr">active:</span>
                            <span className="attrVal">yes</span>
                        </div>
                        <div className="productInfodiv">
                            <span className="attr">in stock:</span>
                            <span className="attrVal">no</span>
                        </div>
                    </div>

                </div>

            </div>
            <div className="productBottomDiv">
                <form className="formContainerdiv">
                    <div className="productForm">
                        <label for="name">Product Name</label>
                        <input type="text" name='editname' id="name" placeholder="Apple Airpod" />
                        <label for="inStock">in Stoke</label>
                        <select name="">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label for="active">Active</label>
                        <select name="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="uploadImgdiv">
                        <div>
                        <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Apple_AirPods_Pro_6.jpg" alt="" className="updateImg"/>
                        <label for="file">
                            <Publish className="uploadIcon"/>
                        </label>
                        <input type="file" id="file" style={{display:'none'}} />
                        </div>
                    <button className="updatebutton">Update</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
