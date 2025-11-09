const Skills = () => {
  return (
    <div className="text-terminal-valid">
      <p className="mb-2">🛠️ Tech stack & tooling:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
        <div>
          <span className="text-terminal-input">Frontend:</span> React, Next.js,
          TypeScript, Tailwind
        </div>
        <div>
          <span className="text-terminal-input">Backend:</span> Node.js, REST
          APIs, Stripe
        </div>
        <div>
          <span className="text-terminal-input">Infra/DevOps:</span> Docker,
          Bash, Linux
        </div>
        <div>
          <span className="text-terminal-input">HPC:</span> SLURM, PBS Pro, MPI,
          NFS, Modules
        </div>
        <div>
          <span className="text-terminal-input">Languages:</span> JavaScript,
          Python, C/C++, SQL
        </div>
        <div>
          <span className="text-terminal-input">Extras:</span> Framer Motion,
          Git, Open Source
        </div>
      </div>
    </div>
  );
};

export default Skills;
