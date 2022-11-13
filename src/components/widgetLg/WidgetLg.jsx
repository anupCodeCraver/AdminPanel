import "./widgetlg.css"

export default function WidgetLg() {
  const Button=({type})=>{
    return <button className={"widgetLgBtn "+type}>{type}</button>
  }
  return (
    <div className="largContainer">
      <span className="widgetLgTitle">Latest Transactions</span>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgth">Customer</th>
          <th className="widgetLgth">Date</th>
          <th className="widgetLgth">Amount</th>
          <th className="widgetLgth">Status</th>
        </tr>
        <tr className="widgetLgUsertr">
          <td className="widgetLgUser">
            <img className="widgetLgimg" src="https://1fid.com/wp-content/uploads/2022/02/boy-dp-image-77-1024x1002.jpg" alt="" />
            <span className="widgetLgName">
              Sam Deo
            </span>
          </td>
          <td className="widgetLgDate">6 May 2022</td>
          <td className="widgetLgAmount">$1222.3</td>
          <td className="widgetLgbutton"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLgUsertr">
          <td className="widgetLgUser">
            <img className="widgetLgimg" src="https://1fid.com/wp-content/uploads/2022/02/boy-dp-image-77-1024x1002.jpg" alt="" />
            <span className="widgetLgName">
              Sam Deo
            </span>
          </td>
          <td className="widgetLgDate">6 May 2022</td>
          <td className="widgetLgAmount">$1222.3</td>
          <td className="widgetLgbutton"><Button type="Declined"/></td>
        </tr>
        <tr className="widgetLgUsertr">
          <td className="widgetLgUser">
            <img className="widgetLgimg" src="https://1fid.com/wp-content/uploads/2022/02/boy-dp-image-77-1024x1002.jpg" alt="" />
            <span className="widgetLgName">
              Sam Deo
            </span>
          </td>
          <td className="widgetLgDate">6 May 2022</td>
          <td className="widgetLgAmount">$1222.3</td>
          <td className="widgetLgbutton"><Button type="Pending"/></td>
        </tr>
        <tr className="widgetLgUsertr">
          <td className="widgetLgUser">
            <img className="widgetLgimg" src="https://1fid.com/wp-content/uploads/2022/02/boy-dp-image-77-1024x1002.jpg" alt="" />
            <span className="widgetLgName">
              Sam Deo
            </span>
          </td>
          <td className="widgetLgDate">6 May 2022</td>
          <td className="widgetLgAmount">$1222.3</td>
          <td className="widgetLgbutton"><Button type="Approved"/></td>
        </tr>
      </table>
    </div>
  )
}
