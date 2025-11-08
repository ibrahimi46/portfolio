const Skills = () => {
  return (
    <div className="text-green-400 text-sm font-mono">
      <p className="mb-2">🛠️ Tech stack & tooling:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
        <div>
          <span className="text-cyan-300">Frontend:</span> React, Next.js,
          TypeScript, Tailwind
        </div>
        <div>
          <span className="text-cyan-300">Backend:</span> Node.js, REST APIs,
          Stripe
        </div>
        <div>
          <span className="text-cyan-300">Infra/DevOps:</span> Docker, Bash,
          Linux
        </div>
        <div>
          <span className="text-cyan-300">HPC:</span> SLURM, PBS Pro, MPI, NFS,
          Modules
        </div>
        <div>
          <span className="text-cyan-300">Languages:</span> JavaScript, Python,
          C/C++, SQL
        </div>
        <div>
          <span className="text-cyan-300">Extras:</span> Framer Motion, Git,
          Open Source
        </div>
      </div>
    </div>
  );
};

export default Skills;
