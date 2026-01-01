// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import backgroundImage from "../assets/DISASTERS.webp";
import {
  CreateEmployee,
  UpdateEmployee,
  getEmployee,
} from "../services/EployeeService.js"; // Corrected import statement
import { useNavigate, useParams } from "react-router-dom";

const EmployeeComponent = () => {
  const [employee, setEmployee] = useState({
    disasterName: "",
    startDate: "",
    endDate: "",
    deathCount: "",
  });

  const { id } = useParams();
  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          setEmployee(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    if (id) {
      UpdateEmployee(id, employee)
        .then((response) => {
          console.log(response.data);
          navigator("/employees");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      CreateEmployee(employee)
        .then((response) => {
          console.log(response.data);
          navigator("/employees");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  function pageTitle() {
    return id ? (
      <h2 className="text-center">Update Informations</h2>
    ) : (
      <h2 className="text-center">Add New</h2>
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle()}
          <div className="card-body">
            <form onSubmit={saveOrUpdateEmployee}>
              <div className="form-group b-2">
                <label className="form-label">Disaster Name</label>
                <input
                  type="text"
                  placeholder="Enter Disaster Name"
                  name="disasterName"
                  value={employee.disasterName}
                  className="form-control"
                  required
                  onChange={(e) =>
                    setEmployee({ ...employee, disasterName: e.target.value })
                  }
                />
              </div>

              <div className="form-group b-2">
                <label className="form-label">Start Date</label>
                <input
                  type="date"
                  placeholder="Enter Start Date"
                  name="startDate"
                  value={employee.startDate}
                  className="form-control"
                  required
                  onChange={(e) =>
                    setEmployee({ ...employee, startDate: e.target.value })
                  }
                />
              </div>

              <div className="form-group b-2">
                <label className="form-label">End Date</label>
                <input
                  type="date"
                  placeholder="Enter End Date"
                  name="endDate"
                  value={employee.endDate}
                  className="form-control"
                  required
                  onChange={(e) =>
                    setEmployee({ ...employee, endDate: e.target.value })
                  }
                />
              </div>

              <div className="form-group b-2">
                <label className="form-label">Death Count</label>
                <input
                  type="text"
                  placeholder="Enter Death Count"
                  name="deathCount"
                  value={employee.deathCount}
                  className="form-control"
                  required
                  onChange={(e) =>
                    setEmployee({ ...employee, deathCount: e.target.value })
                  }
                />
              </div>

              <button
                className="btn btn-success"
                onClick={saveOrUpdateEmployee}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
