import type { ProjectAnalytics } from "../api";

interface ProjectsTableProps {
  projects: ProjectAnalytics[];
}

function formatProjectName(
  slug: string,
): string {
  return slug
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) =>
      char.toUpperCase(),
    );
}

export default function ProjectsTable({
  projects,
}: ProjectsTableProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="mb-6">
        <h2 className="text-lg font-medium">
          Projetos
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Interações com seus projetos no
          período selecionado.
        </p>
      </div>

      {projects.length === 0 ? (
        <div className="rounded-xl border border-dashed border-white/10 px-4 py-10 text-center">
          <p className="text-sm text-zinc-500">
            Nenhuma interação com projetos
            encontrada neste período.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wider text-zinc-500">
                <th className="pb-3 font-medium">
                  Projeto
                </th>

                <th className="pb-3 text-right font-medium">
                  GitHub
                </th>

                <th className="pb-3 text-right font-medium">
                  Demo
                </th>

                <th className="pb-3 text-right font-medium">
                  Total
                </th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project) => (
                <tr
                  key={project.projectSlug}
                  className="border-b border-white/5 last:border-0"
                >
                  <td className="py-4">
                    <span className="text-sm font-medium text-zinc-200">
                      {formatProjectName(
                        project.projectSlug,
                      )}
                    </span>
                  </td>

                  <td className="py-4 text-right text-sm text-zinc-400">
                    {project.githubClicks}
                  </td>

                  <td className="py-4 text-right text-sm text-zinc-400">
                    {project.demoClicks}
                  </td>

                  <td className="py-4 text-right">
                    <span className="inline-flex min-w-8 justify-center rounded-lg bg-white/5 px-2 py-1 text-sm font-medium text-zinc-200">
                      {project.totalClicks}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}