 import './Staff.scss'
 import DataTable from "./DataTable/DataTable"

const StaffPage = () => {
  return  <div className="staff">
    <div className="info">
     <h1> Staff</h1> 
     <button>Add New </button>
    </div>
  <DataTable/>
  </div>;
};

export default StaffPage;
