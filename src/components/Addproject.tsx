import React, { useState } from "react";
import axios from "axios";
import { supabase } from "../lib/supabase";
import { PlusCircle, Trash2, Save } from "lucide-react";

interface ProjectFormData {
  source_code_url: string | number | readonly string[] | undefined;
  live_url: string | number | readonly string[] | undefined;
  title: string;
  description: string;
  images: string[];
  tech_stack: string[];
  priority: number;
}

const Addproject: React.FC = () => {
  const [formData, setFormData] = useState<ProjectFormData>({
    title: "",
    description: "",
    images: [],
    tech_stack: [""],
    source_code_url:'',
    live_url:'',
    priority: 5,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  // Function to handle Cloudinary image upload
  const uploadImageToCloudinary = async (file: File) => {
    const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dhac6t2n1/image/upload";
    const uploadPreset = "AbhishekPortfolio"; // Cloudinary upload preset

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);

      const response = await axios.post(cloudinaryUrl, formData);
      return response.data.secure_url; // Return uploaded image URL
    } catch (error) {
      console.error("Error uploading image to Cloudinary", error);
      return null;
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const files = Array.from(e.target.files);
      const uploadedUrls = await Promise.all(files.map(file => uploadImageToCloudinary(file)));

      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...uploadedUrls.filter(url => url !== null)]
      }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: '', type: '' });
  
    try {
      console.log("formData before submission:", formData);
  
      // Ensure only non-empty values are stored
      const cleanedData = {
        ...formData,
        images: formData.images.filter(img => img.trim() !== ''),
        tech_stack: formData.tech_stack.filter(tech => tech.trim() !== ''),
      };
  
      // Save to Supabase
      const { error } = await supabase.from('projects').insert(cleanedData);
  
      if (error) throw error;
  
      setMessage({ text: 'Project added successfully!', type: 'success' });
      setFormData({
        title: '',
        description: '',
        images: [''],
        tech_stack: [''],
        source_code_url:'',
        live_url:'',
        priority: 5,
      });
  
    } catch (error) {
      console.error('Error adding project:', error);
      setMessage({ 
        text: error instanceof Error ? error.message : 'An error occurred while adding the project', 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleArrayChange = (index: number, field: "tech_stack", value: string) => {
    setFormData((prev) => {
      const newArray = [...prev[field]];
      newArray[index] = value;
      return { ...prev, [field]: newArray };
    });
  };

  const addArrayItem = (field: "tech_stack") => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const removeArrayItem = (index: number, field: "images" | "tech_stack") => {
    setFormData((prev) => {
      const newArray = [...prev[field]];
      newArray.splice(index, 1);
      return { ...prev, [field]: newArray };
    });
  };



  return (
    <div className="w-full min-h-screen flex items-center justify-center gap-4">

    <div className="bg-white rounded-lg shadow-md p-6 w-full mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Project</h2>

      {message.text && (
        <div
          className={`p-4 mb-6 rounded ${
            message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Project Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="mt-2">
            {formData.images.map((image, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <img src={image} alt="Uploaded" className="w-16 h-16 object-cover rounded" />
                <button
                  type="button"
                  onClick={() => removeArrayItem(index, "images")}
                  className="p-2 text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Tech Stack</label>
          {formData.tech_stack.map((tech, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                value={tech}
                onChange={(e) => handleArrayChange(index, "tech_stack", e.target.value)}
                placeholder="React, Node.js, etc."
                className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => removeArrayItem(index, "tech_stack")}
                className="ml-2 p-2 text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
          <button type="button" onClick={() => addArrayItem("tech_stack")} className="mt-2 flex items-center text-blue-500 hover:text-blue-700">
            <PlusCircle size={20} className="mr-1" /> Add Another Technology
          </button>
        </div>
        <div className="mb-4">
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">Set Priority</label>
            <input type="number" id="priority" name="priority" value={formData.priority} placeholder="priority" onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        <div className="mb-4">
            <label htmlFor="live_url" className="block text-sm font-medium text-gray-700 mb-1">Live URL</label>
            <input type="url" id="live_url" name="live_url" value={formData.live_url} placeholder="Live URL" onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="source_code_url" className="block text-sm font-medium text-gray-700 mb-1">Source Code URL</label>
            <input type="url" id="source_code_url" name="source_code_url" value={formData.source_code_url} placeholder="Source Code UR" onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

        <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          {isSubmitting ? "Saving..." : <div className="flex items-center justify-center">
          <Save size={20} className="mr-2" /> Save Project</div>}
        </button>
      </form>
    </div>

         
    </div>
  );
};

export default Addproject;
