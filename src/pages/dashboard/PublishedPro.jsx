import React, { useState } from "react";
import { ScaleLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import { useAddProjectMutation } from "../../redux/features/ProjectApi";

const PublishedPro = () => {
  const [addPost, { data: returnPro, isLoading, isSuccess }] = useAddProjectMutation([]);

  const [selectedItem, setSelectedItem] = useState(["ReactJs"]);

  const { register, handleSubmit, reset, formState: { errors }, } = useForm();

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setSelectedItem((prevSelectedItem) => [...prevSelectedItem, value]);
  };

  const onSubmit = async (data) => {
    const { name, category, frontEnd, backEnd, image } = data;
    const project = {
      name,
      category,
      image,
      links: { frontEnd, backEnd },
      tools: selectedItem,
    };
    try {
      await addPost(project);
      reset();
    } catch (err) {
      console.error(err);
    }
  };
  console.log(returnPro?.data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="published-container">
          <input
            {...register("name", { required: true })}
            className="input-css"
            type="text"
            placeholder="Type Name"
          />
          <input
            {...register("category", { required: true })}
            className="input-css"
            type="text"
            placeholder="Category"
          />
          {/* <input type="file" {...register("image", { required: true })} /> */}
          <input
            {...register("image", { required: true })}
            className="input-css"
            type="text"
            placeholder="Image Link"
          />
          <input
            {...register("frontEnd", { required: true })}
            className="input-css"
            type="text"
            placeholder="Front-end Code"
          />
          <input
            {...register("backEnd", { required: true })}
            className="input-css"
            type="text"
            placeholder="Backend Code"
          />
          <select onChange={handleSelectChange} className="border p-3">
            <option value="ReactJs">ReactJs</option>
            <option value="NextJS">NextJS</option>
            <option value="Bootstrap">Bootstrap</option>
            <option value="React Router">React Router</option>
            <option value="JS ES6">JS ES6</option>
            <option value="NodeJS">NodeJS</option>
            <option value="ExpressJS">ExpressJS</option>
            <option value="Mongoose">Mongoose</option>
            <option value="MongoDB">MongoDB</option>
            <option value="Redux">Redux</option>
            <option value="RTK Query">RTK Query</option>
            <option value="Axios">Axios</option>
            <option value="Tailwindcss">Tailwind CSS</option>
            <option value="CSS">CSS</option>
            <option value="HTML">HTML5</option>
            <option value="JWT">JWT</option>
            <option value="React Hook Form">React Hook Form</option>
          </select>
        </div>
        {isLoading ? (
          <div className="text-[#294d70]">
            <ScaleLoader height={20} color="#294d70" />
            <span>Creating</span>
          </div>
        ) : (
          <input type="submit" value="Published" className="submit-btn" />
        )}
      </form>
    </div>
  );
};

export default PublishedPro;
