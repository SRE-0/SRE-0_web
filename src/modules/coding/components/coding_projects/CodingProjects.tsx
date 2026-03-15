import { useCodingProjects } from '../../hooks/useCodingProjects';
import ProjectGrid from '../../../shared/projects/ProjectGrid';
import ScrollReveal from "../../../../core/components/ui/scroll_reveal/ScrollReveal"

function CodingProjects() {
  const projects = useCodingProjects();

  return (
    <div>
        <ScrollReveal mode='cascade'>
          <ProjectGrid
              projects={projects}
          />
        </ScrollReveal>        
    </div>
  )
}

export default CodingProjects;