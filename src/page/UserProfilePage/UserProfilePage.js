import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./UserProfilePage.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "../../redux/actions/authActions";

function UserProfile() {
  const [newUser, setNewUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUpdate = async () => {
    await axios
      .put("https://port-0-prj666-team2-backend-1gksli2alplvaptm.sel4.cloudtype.app/api/users/profile", newUser, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then(() => {
        dispatch(setUser(newUser));
        setEditMode(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDelete = () => {
    setIsLoading(true);
    axios
      .delete("https://port-0-prj666-team2-backend-1gksli2alplvaptm.sel4.cloudtype.app/api/users/profile", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then(() => {
        dispatch(clearUser());
        navigate("/main");
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  useEffect(() => {
    if (user) {
      setNewUser(user);
    }
  }, [user]);

  return (
    <>
      {isLoading ? (
        <div>Loadings</div>
      ) : (
        <div className="profile-container">
          <h2>User Profile</h2>

          {!editMode ? (
            <div className="profile-view">
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>First Name:</strong> {user.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {user.lastName}
              </p>
              <p>
                <strong>Role:</strong> {user.role}
              </p>
              <div>
                <button className="edit-btn" onClick={handleEdit}>
                  Edit
                </button>
                <button className="delete-btn" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          ) : (
            <div className="profile-edit">
              <div className="input-group">
                <label>Email:</label>
                <input
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                />
              </div>
              <div className="input-group">
                <label>First Name:</label>
                <input
                  value={newUser.firstName}
                  onChange={(e) =>
                    setNewUser({ ...newUser, firstName: e.target.value })
                  }
                />
              </div>
              <div className="input-group">
                <label>Last Name:</label>
                <input
                  value={newUser.lastName}
                  onChange={(e) =>
                    setNewUser({ ...newUser, lastName: e.target.value })
                  }
                />
              </div>
              <div className="input-group">
                <label>Role:</label>
                <select
                  value={newUser.role}
                  onChange={(e) =>
                    setNewUser({ ...newUser, role: e.target.value })
                  }
                >
                  <option value="Admin">Administrative staff</option>
                  <option value="Professor">Professor</option>
                  <option value="Student">Student</option>
                </select>
              </div>
              <div className="button-group">
                <button className="update-btn" onClick={handleUpdate}>
                  Update
                </button>
                <button
                  className="cancel-btn"
                  onClick={() => setEditMode(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default UserProfile;
