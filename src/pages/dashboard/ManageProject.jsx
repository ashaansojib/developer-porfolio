import React from "react";
import {
  useGetProjectsQuery,
  useRemoveProjectMutation,
} from "../../redux/features/ProjectApi";

const ManageProject = () => {
  const { data: projects, isLoading } = useGetProjectsQuery([]);
  const [removePro] = useRemoveProjectMutation();
  const handleRemove = (id) => {
    removePro(id);
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Tags</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading
              ? "Projects loading... Please Wait!!"
              : projects?.data?.map((project, index) => (
                  <tr key={project._id} className="bg-base-200">
                    <th>{index + 1}</th>
                    <td>{project.name}</td>
                    <td>{project.category} - 23/04/23</td>
                    <td>
                      <button
                        onClick={() => handleRemove(project._id)}
                        className="btn btn-sm btn-secondary mr-2"
                      >
                        Delete
                      </button>
                      <button className="btn btn-sm btn-primary">Edit</button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProject;
