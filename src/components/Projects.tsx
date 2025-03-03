
import { Database } from "../types/supabase";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Link } from "react-router-dom";

type Project = Database["public"]["Tables"]["projects"]["Row"];

interface ProjectGridProps {
  darkmode: boolean;
  limit?: number;
  showViewMore?: boolean;
}

const Projects: React.FC<ProjectGridProps> = ({
  darkmode,
  limit,
  showViewMore,
}) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        let query = supabase
          .from("projects")
          .select("*")
          .order("priority", { ascending: true });

        if (limit) {
          query = query.limit(limit);
        }

        const { data, error } = await query;
        if (data) {
          data.forEach(project => console.log(project.title));
        }
        if (error) throw error;

        setProjects(data || []);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [limit]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-lg">{error}</div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="bg-gray-100 text-gray-700 p-8 rounded-lg text-center">
        <p className="text-lg">No projects found.</p>
      </div>
    );
  }

  return (
    <div
      className=" flex justify-center items-center flex-col w-full h-full mb-10"
      id="projects"
    >
      <h1
        className={
          darkmode
            ? "text-white text-5xl font-semibold my-10"
            : "text-5xl font-semibold my-10"
        }
      >
        My Projects
      </h1>
      <div className="w-full grid mx-auto grid-cols-1 md:grid-cols-2  gap-6  place-items-center">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
      {showViewMore && (
        <div className="flex justify-center mt-8">
          <Link
            to="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      )}
    </div>
  );
};

export default Projects;
