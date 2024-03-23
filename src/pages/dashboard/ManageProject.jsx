import React from "react";
import { useGetProjectsQuery, useRemoveProjectMutation } from "../../redux/features/ProjectApi";
import { ScaleLoader } from "react-spinners";

const ManageProject = () => {
  const { data: projects, isLoading } = useGetProjectsQuery([]);
  const [removePro, { isLoading: deleteLoading }] = useRemoveProjectMutation();
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
              ? <div className="text-[#294d70] flex justify-center items-center bg-slate-100 my-3 rounded-md w-full flex-col h-[200px]">
                <ScaleLoader height={20} color="#294d70" />
                <span>Data Fetching</span>
              </div>
              : projects?.data?.map((project, index) => (
                <tr key={project._id} className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{project.name}</td>
                  <td>{project.category} - 23/04/23</td>
                  <td>
                    {deleteLoading ? (
                      <div className="text-[#294d70]">
                        <ScaleLoader height={20} color="#294d70" />
                        <span>Deleting</span>
                      </div>
                    ) : (
                      <button onClick={() => handleRemove(project._id)} className="btn btn-sm btn-secondary mr-2">Delete</button>
                    )}
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
